"use client";

import BoardTaskComponent from "@/app/Components/BoardTask";
import MembersTaskComponent from "@/app/Components/MembersTask";
import React, { useEffect, useState } from "react";
import {
  closestCorners,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  MouseSensor,
  // PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  getTaskDetail,
  getTaskPriorityService,
  getTaskStatusService,
  getTaskTypeService,
  updateStatusTaskService,
} from "@/app/services/taskService";
import { useDispatch, useSelector } from "react-redux";
import {
  setDetailTask,
  setPriorityTask,
  setStatusTask,
  setTypeTask,
} from "@/redux/taskSlice";
import { RootState } from "@/app/store/store";
import { DetailTask, DragType, LstTask, UpdateStatus } from "@/app/types/task";
import { arrayMove } from "@dnd-kit/sortable";
import { cloneDeep } from "lodash";
import { getProjectDetailService } from "@/app/services/projectService";
import { setDetailProject } from "@/redux/projectSlice";
import toast from "react-hot-toast";

const active_drag_item_type: DragType = {
  column: "activeDragItemTypeColumn",
  card: "activeDragItemTypeCard",
};

export default function BoardProjectPage() {
  const dispatch = useDispatch();

  // const pointerSensor = useSensor(PointerSensor, {
  //   activationConstraint: { distance: 10 },
  // });
  // di chuyển chuột 10px thì mới gọi event và không gọi event khi click
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  });
  // mobile: nhấn giữ 250ms và di chuyển lệch 5px thì sẽ goi event
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 5 },
  });

  // const sensors = useSensors(pointerSensor);
  const sensors = useSensors(mouseSensor, touchSensor);
  const [board, setBoard] = useState<LstTask[]>([]);

  const [activeDragItemType, setActiveDragItemType] = useState<null | string>(
    null
  );
  const [activeDragItemDataColumn, setActiveDragItemDataColumn] =
    useState<LstTask | null>(null);
  const [activeDragItemDataCard, setActiveDragItemDataCard] =
    useState<DetailTask | null>(null);

  const [statusId, setStatusId] = useState(0);

  const { lstTask } = useSelector((state: RootState) => {
    return state.project.detailProject;
  });

  const fetchIndexStatus = async () => {
    setBoard(lstTask);
  };

  useEffect(() => {
    fetchIndexStatus();
  }, [lstTask]);

  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);

  const handleAddMemberOpen = () => {
    setIsAddMemberOpen(true);
  };

  const handleAddMemberClose = () => {
    setIsAddMemberOpen(false);
  };

  useEffect(() => {
    (async () => {
      const actionTaskType = await getTaskTypeService();
      dispatch(setTypeTask(actionTaskType.content));
      const actionTaskStatus = await getTaskStatusService();
      dispatch(setStatusTask(actionTaskStatus.content));
      const actionPriority = await getTaskPriorityService();
      dispatch(setPriorityTask(actionPriority.content));
    })();
  }, []);

  const findColumnByIdCard = (id: number) => {
    return board.find((column) => {
      return column.lstTaskDeTail
        .map((card) => {
          return card.taskId;
        })
        ?.includes(id);
    });
  };

  const handleDragStart = (e: DragStartEvent) => {
    setActiveDragItemType(
      e.active.data.current?.taskId
        ? active_drag_item_type.card
        : active_drag_item_type.column
    );
    const newData = e.active.data.current;
    if (newData !== undefined) {
      setActiveDragItemDataColumn(newData as LstTask);
      setActiveDragItemDataCard(newData as DetailTask);
    }
  };

  const handleDragOver = (e: DragOverEvent) => {
    if (activeDragItemType === active_drag_item_type.column) return;

    const { active, over } = e;

    if (!active || !over) return;

    const {
      id: activeDraggingCardId,
      data: { current: activeDraggingCardData },
    } = active;

    const { id: overCardId } = over;

    const activeColumn = findColumnByIdCard(Number(activeDraggingCardId));
    const overColumn = findColumnByIdCard(Number(overCardId));

    if (!activeColumn || !overColumn) return;

    if (activeColumn.statusId !== overColumn.statusId) {
      setBoard((prevColumns) => {
        const overCardIndex = overColumn.lstTaskDeTail.findIndex((card) => {
          return card.taskId === overCardId;
        });

        const isBelowOverItem =
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;
        const modifier = isBelowOverItem ? 1 : 0;
        const newCardIndex =
          overCardIndex >= 0
            ? overCardIndex + modifier
            : overColumn.lstTaskDeTail.length + 1;

        const nextColumns = cloneDeep(prevColumns);
        const nextActiveColumn = nextColumns.find((column) => {
          return column.statusId === activeColumn.statusId;
        });
        const nextOverColumn = nextColumns.find((column) => {
          return column.statusId === overColumn.statusId;
        });

        if (nextActiveColumn) {
          nextActiveColumn.lstTaskDeTail =
            nextActiveColumn.lstTaskDeTail.filter((card) => {
              return card.taskId !== activeDraggingCardId;
            });
        }

        if (nextOverColumn) {
          nextOverColumn.lstTaskDeTail = nextOverColumn.lstTaskDeTail.filter(
            (card) => {
              return card.taskId !== activeDraggingCardId;
            }
          );
          nextOverColumn.lstTaskDeTail = nextOverColumn.lstTaskDeTail.toSpliced(
            newCardIndex,
            0,
            activeDraggingCardData as DetailTask
          );
          console.log("activeDraggingCardData: ", activeDraggingCardData);
        }

        const newStatus = nextColumns.filter((card) => {
          return (
            card.statusId &&
            card.lstTaskDeTail.includes(activeDraggingCardData as DetailTask)
          );
        });
        setStatusId(newStatus[0].statusId);
        console.log(
          "nextColumns: ",
          nextColumns.filter((card) => {
            return (
              card.statusId &&
              card.lstTaskDeTail.includes(activeDraggingCardData as DetailTask)
            );
          })
        );
        return nextColumns;
      });
    }
  };

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;

    if (!active || !over) return;

    // xử lý kéo thả card
    if (activeDragItemType === active_drag_item_type.column) {
      if (active.id !== over.id) {
        // lấy vị trí cũ
        const oldIndex = board.findIndex((item) => {
          return item.statusId === active.id;
        });

        // lấy vị trí mới
        const newIndex = board.findIndex((item) => {
          return item.statusId === over.id;
        });

        const dndBoard = arrayMove(board, oldIndex, newIndex);
        setBoard(dndBoard);
      }
    }

    handleUpdateStatus(statusId.toString());

    setActiveDragItemType(null);
    setActiveDragItemDataColumn(null);
    setActiveDragItemDataCard(null);
  };

  const handleUpdateStatus = async (statusId: string) => {
    const data: UpdateStatus = {
      taskId: activeDragItemDataCard?.taskId || 0,
      statusId: statusId,
    };
    const action = await updateStatusTaskService(data);
    if (action.statusCode === 200) {
      const actionDetailProject = await getProjectDetailService(
        activeDragItemDataCard?.projectId.toString()
      );
      const actionDetailTask = await getTaskDetail(
        activeDragItemDataCard?.taskId || 0
      );
      dispatch(setDetailProject(actionDetailProject.content));
      dispatch(setDetailTask(actionDetailTask.content));

      toast.success("Update status successfully");
    } else {
      toast.error(action.message);
    }
  };

  return (
    <DndContext
      collisionDetection={closestCorners}
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="m-5 space-y-5">
        <div>
          <p className="text-xl font-bold">Board Project</p>
          <MembersTaskComponent
            isAddMemberOpen={isAddMemberOpen}
            handleAddMemberOpen={handleAddMemberOpen}
            handleAddMemberClose={handleAddMemberClose}
          />
        </div>
        <BoardTaskComponent
          board={board}
          active_drag_item_type={active_drag_item_type}
          activeDragItemType={activeDragItemType}
          activeDragItemData={activeDragItemDataColumn}
          activeDragItemDataCard={activeDragItemDataCard}
        />
      </div>
    </DndContext>
  );
}
