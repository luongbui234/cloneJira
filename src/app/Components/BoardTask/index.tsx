"use client";

import React, { useState } from "react";
import EditTaskComponent from "./EditTask";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import {
  assignUserTaskService,
  createTaskService,
  deleteComment,
  getTaskDetail,
  insertComment,
  removeTaskService,
  removeUserTaskService,
  updateComment,
  updateDescriptionTaskService,
  updateEstimateTaskService,
  updatePriorityTaskService,
  updateTaskService,
  updateStatusTaskService,
  updateTimeTrackingTaskService,
} from "@/app/services/taskService";
import { setDetailTask } from "@/redux/taskSlice";
import {
  UserTask,
  CreateTask,
  InsertComment,
  UpdateComment,
  UpdateDescription,
  UpdateEstimate,
  UpdatePriority,
  UpdateStatus,
  UpdateTask,
  UpdateTimeTracking,
  DetailTask,
  LstTask,
  DragType,
} from "@/app/types/task";
import toast from "react-hot-toast";
import { getProjectDetailService } from "@/app/services/projectService";
import { setDetailProject } from "@/redux/projectSlice";
import {
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import ListTaskItemComponent from "./ListTaskItem";
import { defaultDropAnimationSideEffects, DragOverlay } from "@dnd-kit/core";
import TaskItemComponent from "./ListTaskItem/TaskItem";

interface Props {
  board: LstTask[];
  active_drag_item_type: DragType;
  activeDragItemType: null | string;
  activeDragItemData: LstTask | null;
  activeDragItemDataCard: DetailTask | null;
}

export default function BoardTaskComponent({
  board,
  active_drag_item_type,
  activeDragItemType,
  activeDragItemData,
  activeDragItemDataCard,
}: Props) {
  const [isEditTaskOpen, setIsEditTaskOpen] = useState(false);

  const [isCardOpen, setIsCardOpen] = useState(false);

  const [isRemoveOpen, setIsRemoveOpen] = useState(false);

  const [isNameTaskOpen, setIsNameTaskOpen] = useState(false);

  const [isDescTaskOpen, setIsDescTaskOpen] = useState(false);

  const [isEstimateOpen, setIsEstimateOpen] = useState(false);

  const [valueCreateTaskName, setValueCreateTaskName] = useState("");

  const [valueTaskName, setValueTaskName] = useState("");

  const [valueDesc, setValueDesc] = useState("");

  const [valueComment, setValueComment] = useState("");
  const [valueIdComment, setValueIdComment] = useState(0);
  const [valueEditComment, setValueEditComment] = useState("");

  const [valueEstimate, setValueEstimate] = useState<number | string>(0);
  const [valueTimeSpent, setValueTimeSpent] = useState<number | string>(0);

  const dispatch = useDispatch();

  const { id: idProject } = useSelector((state: RootState) => {
    return state.project.detailProject;
  });

  const { detailTask } = useSelector((state: RootState) => {
    return state.task;
  });

  const handleEditTaskOpen = async (taskId: number) => {
    const action = await getTaskDetail(taskId);
    dispatch(setDetailTask(action.content));
    setIsEditTaskOpen(true);
  };

  const handleEditTaskClose = () => {
    setValueComment("");
    setValueTimeSpent(0);
    setIsEditTaskOpen(false);
  };

  const handleCardOpen = () => {
    setIsCardOpen(true);
  };
  const handleCardClose = () => {
    setIsCardOpen(false);
  };

  const handleRemoveTaskOpen = () => {
    setIsRemoveOpen(true);
  };

  const handleRemoveTaskClose = () => {
    setIsRemoveOpen(false);
  };

  const handleNameTaskOpen = () => {
    setValueTaskName(detailTask.taskName);
    setIsNameTaskOpen(true);
  };

  const handleNameTaskClose = () => {
    setIsNameTaskOpen(false);
  };

  const handleDescTaskOpen = () => {
    setValueDesc(detailTask.description);
    setIsDescTaskOpen(true);
  };

  const handleDescTaskClose = () => {
    setIsDescTaskOpen(false);
  };

  const handleEditCommentOpen = (idComment: number) => {
    setValueIdComment(idComment);
  };

  const handleEditCommentClose = () => {
    setValueIdComment(0);
    setValueEditComment("");
  };

  const handleEstimateOpen = () => {
    setValueEstimate(detailTask.originalEstimate);
    setIsEstimateOpen(true);
  };

  const handleEstimateClose = () => {
    setValueEstimate(0);
    setIsEstimateOpen(false);
  };

  const handleChangeCreateTaskName = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValueCreateTaskName(e.target.value);
  };

  const handleCreateTask = async () => {
    const data: CreateTask = {
      listUserAsign: [],
      taskName: valueCreateTaskName,
      description: "",
      statusId: "1",
      originalEstimate: 0,
      timeTrackingSpent: 0,
      timeTrackingRemaining: 0,
      projectId: idProject,
      typeId: 1,
      priorityId: 1,
    };
    const actionCreateTask = await createTaskService(data);
    if (actionCreateTask.statusCode === 200) {
      handleCardClose();
      const actionDetailProject = await getProjectDetailService(
        idProject.toString()
      );
      dispatch(setDetailProject(actionDetailProject.content));
      toast.success("Create task successfully");
    } else {
      toast.error(actionCreateTask.message);
    }
  };

  const handleRemoveTask = async (taskId: number) => {
    const actionRemoveTask = await removeTaskService(taskId);
    if (actionRemoveTask.statusCode === 200) {
      handleRemoveTaskClose();
      handleEditTaskClose();
      const actionDetailProject = await getProjectDetailService(
        idProject.toString()
      );
      dispatch(setDetailProject(actionDetailProject.content));
      toast.success("Remove task successfully");
    } else {
      toast.error(actionRemoveTask.message);
    }
  };

  const handleUpdateType = async (typeId: number) => {
    const members: number[] = detailTask.assigness.map((member) => {
      return member.id;
    });
    const data: UpdateTask = {
      listUserAsign: members,
      taskId: detailTask.taskId.toString(),
      taskName: detailTask.taskName,
      description: detailTask.description,
      statusId: detailTask.statusId,
      originalEstimate: detailTask.originalEstimate,
      timeTrackingSpent: detailTask.timeTrackingSpent,
      timeTrackingRemaining: detailTask.timeTrackingRemaining,
      projectId: idProject,
      typeId: typeId,
      priorityId: detailTask.priorityId,
    };
    const actionTypeTask = await updateTaskService(data);
    if (actionTypeTask.statusCode === 200) {
      const actionDetailProject = await getProjectDetailService(
        idProject.toString()
      );
      const actionDetailTask = await getTaskDetail(detailTask.taskId);
      dispatch(setDetailProject(actionDetailProject.content));
      dispatch(setDetailTask(actionDetailTask.content));
      toast.success("Update type task successfully");
    } else {
      toast.error(actionTypeTask.message);
    }
  };

  const handleChangeNameTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueTaskName(e.target.value);
  };

  const handleUpdateNameTask = async () => {
    const members: number[] = detailTask.assigness.map((member) => {
      return member.id;
    });
    const data: UpdateTask = {
      listUserAsign: members,
      taskId: detailTask.taskId.toString(),
      taskName: valueTaskName,
      description: detailTask.description,
      statusId: detailTask.statusId,
      originalEstimate: detailTask.originalEstimate,
      timeTrackingSpent: detailTask.timeTrackingSpent,
      timeTrackingRemaining: detailTask.timeTrackingRemaining,
      projectId: idProject,
      typeId: detailTask.typeId,
      priorityId: detailTask.priorityId,
    };
    if (valueTaskName !== detailTask.taskName) {
      const actionNameTask = await updateTaskService(data);
      if (actionNameTask.statusCode === 200) {
        handleNameTaskClose();
        const actionDetailProject = await getProjectDetailService(
          idProject.toString()
        );
        const actionDetailTask = await getTaskDetail(detailTask.taskId);
        dispatch(setDetailProject(actionDetailProject.content));
        dispatch(setDetailTask(actionDetailTask.content));
        toast.success("Update name task successfully");
      } else {
        toast.error(actionNameTask.message);
      }
    }
  };

  const handleChangeDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValueDesc(e.target.value);
  };

  const handleUpdateDescription = async () => {
    const data: UpdateDescription = {
      taskId: detailTask.taskId,
      description: valueDesc,
    };
    if (valueDesc !== detailTask.description) {
      const actionDescTask = await updateDescriptionTaskService(data);
      if (actionDescTask.statusCode === 200) {
        handleDescTaskClose();
        const actionDetailTask = await getTaskDetail(detailTask.taskId);
        dispatch(setDetailTask(actionDetailTask.content));
        toast.success("Update description successfully");
      } else {
        toast.error(actionDescTask.message);
      }
    }
  };

  const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueComment(e.target.value);
  };

  const handleInsertComment = async () => {
    const data: InsertComment = {
      taskId: detailTask.taskId,
      contentComment: valueComment,
    };
    if (valueComment !== "") {
      const actionComment = await insertComment(data);
      if (actionComment.statusCode === 200) {
        setValueComment("");
        const actionDetailTask = await getTaskDetail(detailTask.taskId);
        dispatch(setDetailTask(actionDetailTask.content));
        toast.success("Insert comment successfully");
      } else {
        toast.error(actionComment.message);
      }
    }
  };

  const handleChangeEditComment = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValueEditComment(e.target.value);
  };

  const handleUpdateComment = async () => {
    const data: UpdateComment = {
      idComment: valueIdComment,
      contentComment: valueEditComment,
    };
    if (valueEditComment !== "") {
      const actionComment = await updateComment(data);
      if (actionComment.statusCode === 200) {
        setValueIdComment(0);
        const actionDetailTask = await getTaskDetail(detailTask.taskId);
        dispatch(setDetailTask(actionDetailTask.content));
        toast.success("Update comment successfully");
      } else {
        toast.error(actionComment.message);
      }
    }
  };

  const handleDeleteComment = async (idComment: number) => {
    const actionComment = await deleteComment(idComment);
    if (actionComment.statusCode === 200) {
      setValueIdComment(0);
      const actionDetailTask = await getTaskDetail(detailTask.taskId);
      dispatch(setDetailTask(actionDetailTask.content));
      toast.success("Delete comment successfully");
    } else {
      toast.error(actionComment.message);
    }
  };

  const handleUpdateStatus = async (statusId: string) => {
    const data: UpdateStatus = {
      taskId: detailTask.taskId,
      statusId: statusId,
    };
    const action = await updateStatusTaskService(data);
    if (action.statusCode === 200) {
      const actionDetailProject = await getProjectDetailService(
        idProject.toString()
      );
      const actionDetailTask = await getTaskDetail(detailTask.taskId);
      dispatch(setDetailProject(actionDetailProject.content));
      dispatch(setDetailTask(actionDetailTask.content));

      toast.success("Update status successfully");
    } else {
      toast.error(action.message);
    }
  };

  const handleAssignUserTask = async (userId: number) => {
    const data: UserTask = { taskId: detailTask.taskId, userId: userId };
    const actionAssignUserTask = await assignUserTaskService(data);
    if (actionAssignUserTask.statusCode === 200) {
      const actionDetailProject = await getProjectDetailService(
        idProject.toString()
      );
      const actionDetailTask = await getTaskDetail(detailTask.taskId);
      dispatch(setDetailProject(actionDetailProject.content));
      dispatch(setDetailTask(actionDetailTask.content));
      toast.success("Add user Successfully");
    } else {
      toast.error(actionAssignUserTask.message);
    }
  };

  const handleRemoveUserTask = async (userId: number) => {
    const data: UserTask = { taskId: detailTask.taskId, userId: userId };
    const actionRemoveUserTask = await removeUserTaskService(data);
    if (actionRemoveUserTask.statusCode === 200) {
      const actionDetailProject = await getProjectDetailService(
        idProject.toString()
      );
      const actionDetailTask = await getTaskDetail(detailTask.taskId);
      dispatch(setDetailProject(actionDetailProject.content));
      dispatch(setDetailTask(actionDetailTask.content));
      toast.success("Remove user Successfully");
    } else {
      toast.error(actionRemoveUserTask.message);
    }
  };

  const handleUpdatePriority = async (priorityId: number) => {
    const data: UpdatePriority = {
      taskId: detailTask.taskId,
      priorityId: priorityId,
    };
    const actionPriorityTask = await updatePriorityTaskService(data);
    if (actionPriorityTask.statusCode === 200) {
      const actionDetailProject = await getProjectDetailService(
        idProject.toString()
      );
      const actionDetailTask = await getTaskDetail(detailTask.taskId);
      dispatch(setDetailProject(actionDetailProject.content));
      dispatch(setDetailTask(actionDetailTask.content));
      toast.success("Update priority successfully");
    } else {
      toast.error(actionPriorityTask.message);
    }
  };

  const handleChangeEstimate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueEstimate(e.target.value);
  };

  const handleUpdateEstimate = async () => {
    const data: UpdateEstimate = {
      taskId: detailTask.taskId,
      originalEstimate: Number(valueEstimate || 0),
    };
    if (valueEstimate !== detailTask.originalEstimate) {
      const action = await updateEstimateTaskService(data);
      if (action.statusCode === 200) {
        setValueEstimate(0);
        setIsEstimateOpen(false);
        const actionDetailTask = await getTaskDetail(detailTask.taskId);
        dispatch(setDetailTask(actionDetailTask.content));
        toast.success("Update estimate successfully");
      } else {
        toast.error(action.message);
      }
    }
  };

  const handleChangeTimeSpent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueTimeSpent(e.target.value);
  };

  const handleUpdateTimeSpent = async () => {
    const data: UpdateTimeTracking = {
      taskId: detailTask.taskId,
      timeTrackingSpent:
        detailTask.timeTrackingSpent + Number(valueTimeSpent || 0),
      timeTrackingRemaining:
        detailTask.originalEstimate -
        (detailTask.timeTrackingSpent + Number(valueTimeSpent || 0)),
    };
    if (valueTimeSpent !== 0) {
      const actionTimeTrackingTask = await updateTimeTrackingTaskService(data);
      if (actionTimeTrackingTask.statusCode === 200) {
        setValueTimeSpent(0);
        const actionDetailTask = await getTaskDetail(detailTask.taskId);
        dispatch(setDetailTask(actionDetailTask.content));
        toast.success("Update time tracking successfully");
      } else {
        toast.error(actionTimeTrackingTask.message);
      }
    }
  };

  const customDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };

  return (
    <div className="flex justify-center gap-5 flex-wrap">
      <SortableContext
        items={board.map((task) => {
          return task.statusId;
        })}
        strategy={horizontalListSortingStrategy}
      >
        {board.map((task, index) => {
          return (
            <ListTaskItemComponent
              key={index}
              task={task}
              index={index}
              isCardOpen={isCardOpen}
              handleEditTaskOpen={handleEditTaskOpen}
              handleChangeCreateTaskName={handleChangeCreateTaskName}
              handleCreateTask={handleCreateTask}
              handleCardOpen={handleCardOpen}
              handleCardClose={handleCardClose}
            />
          );
        })}
      </SortableContext>

      <EditTaskComponent
        isEditTaskOpen={isEditTaskOpen}
        handleEditTaskClose={handleEditTaskClose}
        handleUpdateType={handleUpdateType}
        isRemoveOpen={isRemoveOpen}
        handleRemoveTaskOpen={handleRemoveTaskOpen}
        handleRemoveTaskClose={handleRemoveTaskClose}
        handleRemoveTask={handleRemoveTask}
        isNameTaskOpen={isNameTaskOpen}
        handleNameTaskOpen={handleNameTaskOpen}
        handleNameTaskClose={handleNameTaskClose}
        handleChangeNameTask={handleChangeNameTask}
        handleUpdateNameTask={handleUpdateNameTask}
        isDescTaskOpen={isDescTaskOpen}
        handleDescTaskOpen={handleDescTaskOpen}
        handleDescTaskClose={handleDescTaskClose}
        handleChangeDesc={handleChangeDesc}
        handleUpdateDescription={handleUpdateDescription}
        valueComment={valueComment}
        handleChangeComment={handleChangeComment}
        handleInsertComment={handleInsertComment}
        handleEditCommentOpen={handleEditCommentOpen}
        handleEditCommentClose={handleEditCommentClose}
        valueIdComment={valueIdComment}
        handleChangeEditComment={handleChangeEditComment}
        handleUpdateComment={handleUpdateComment}
        handleDeleteComment={handleDeleteComment}
        handleUpdateStatus={handleUpdateStatus}
        handleAssignUserTask={handleAssignUserTask}
        handleRemoveUserTask={handleRemoveUserTask}
        handleUpdatePriority={handleUpdatePriority}
        isEstimateOpen={isEstimateOpen}
        handleEstimateOpen={handleEstimateOpen}
        handleEstimateClose={handleEstimateClose}
        valueEstimate={valueEstimate}
        handleChangeEstimate={handleChangeEstimate}
        handleUpdateEstimate={handleUpdateEstimate}
        valueTimeSpent={valueTimeSpent}
        handleChangeTimeSpent={handleChangeTimeSpent}
        handleUpdateTimeSpent={handleUpdateTimeSpent}
      />
      <DragOverlay dropAnimation={customDropAnimation}>
        {!activeDragItemType && null}
        {activeDragItemType === active_drag_item_type.column && (
          <ListTaskItemComponent
            task={activeDragItemData}
            index={activeDragItemData?.statusId}
            isCardOpen={isCardOpen}
            handleEditTaskOpen={handleEditTaskOpen}
            handleChangeCreateTaskName={handleChangeCreateTaskName}
            handleCreateTask={handleCreateTask}
            handleCardOpen={handleCardOpen}
            handleCardClose={handleCardClose}
          />
        )}
        {activeDragItemType === active_drag_item_type.card && (
          <TaskItemComponent
            taskDetail={activeDragItemDataCard}
            handleEditTaskOpen={handleEditTaskOpen}
          />
        )}
      </DragOverlay>
    </div>
  );
}
