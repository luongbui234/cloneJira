import { LstTask } from "@/app/types/task";
import React from "react";
import TaskItemComponent from "./TaskItem";
import { Button, Input } from "antd";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
const { TextArea } = Input;

interface Props {
  task: LstTask | null;
  index?: number;
  isCardOpen?: boolean;
  handleEditTaskOpen: (taskId: number) => void;
  handleChangeCreateTaskName: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleCreateTask: () => void;
  handleCardOpen: () => void;
  handleCardClose: () => void;
}

export default function ListTaskItemComponent({
  task,
  index,
  isCardOpen,
  handleEditTaskOpen,
  handleChangeCreateTaskName,
  handleCreateTask,
  handleCardOpen,
  handleCardClose,
}: Props) {
  const status: string[] = ["gray", "indigo", "blue", "green"];

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task?.statusId || 0, data: { ...task } });
  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? "1px solid #2ecc71" : undefined,
  };
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="w-80 h-fit p-2 bg-gray-100 space-y-2 rounded-md"
    >
      <span
        className={`bg-${status[index || 0]}-200 font-medium px-2 rounded-md`}
      >
        {task?.statusId}
      </span>
      <div className="space-y-2 py-3">
        <SortableContext
          items={
            task?.lstTaskDeTail.map((taskDetail) => {
              return taskDetail.taskId;
            }) || [0]
          }
          strategy={verticalListSortingStrategy}
        >
          {task?.lstTaskDeTail.map((taskDetail, index) => {
            return (
              <TaskItemComponent
                key={index}
                taskDetail={taskDetail}
                handleEditTaskOpen={handleEditTaskOpen}
              />
            );
          })}
        </SortableContext>
      </div>
      {index === 0 ? (
        isCardOpen ? (
          <div className="space-y-2">
            <TextArea
              onChange={handleChangeCreateTaskName}
              rows={2}
              showCount
              autoFocus={isCardOpen}
              placeholder="What needs to be done?"
            />
            <Button onClick={handleCreateTask} type="primary">
              Add
            </Button>
            <Button
              onClick={handleCardClose}
              icon={<CloseOutlined />}
              className="mx-2"
            />
          </div>
        ) : (
          <Button onClick={handleCardOpen} className="w-full">
            <PlusOutlined />
            Create
          </Button>
        )
      ) : null}
    </div>
  );
}
