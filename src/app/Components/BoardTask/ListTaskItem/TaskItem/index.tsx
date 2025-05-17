import { DetailTask } from "@/app/types/task";
import { BugOutlined, FileOutlined } from "@ant-design/icons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Avatar, Card, Tag, Tooltip } from "antd";
import React from "react";

interface Props {
  taskDetail: DetailTask | null;
  handleEditTaskOpen: (taskId: number) => void;
}

export default function TaskItemComponent({
  taskDetail,
  handleEditTaskOpen,
}: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: taskDetail?.taskId || 0, data: { ...taskDetail } });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? "1px solid #2ecc71" : undefined,
  };
  const priority: string[] = ["red", "yellow", "blue", "green"];
  return (
    <Card
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      onClick={() => handleEditTaskOpen(taskDetail?.taskId || 0)}
      size="small"
      title={<p>{taskDetail?.taskName}</p>}
      className="shadow"
    >
      <div className="flex justify-between">
        <div className="flex space-x-1">
          {taskDetail?.taskTypeDetail.id === 1 ? (
            <BugOutlined className="text-xl text-red-500" />
          ) : (
            <FileOutlined className="text-xl text-green-500" />
          )}
          <Tag
            color={`${priority[taskDetail?.priorityTask.priorityId || 0 - 1]}`}
          >
            {taskDetail?.priorityTask.priority}
          </Tag>
        </div>
        <Avatar.Group
          size={"small"}
          max={{
            count: 2,
            style: {
              color: "#f56a00",
              backgroundColor: "#fde3cf",
            },
          }}
        >
          {taskDetail?.assigness.map((member, index) => {
            return (
              <Tooltip key={index} title={member.name} placement="top">
                <Avatar src={member.avatar} />
              </Tooltip>
            );
          })}
        </Avatar.Group>
      </div>
    </Card>
  );
}
