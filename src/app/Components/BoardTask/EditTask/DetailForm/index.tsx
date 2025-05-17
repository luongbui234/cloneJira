import { RootState } from "@/app/store/store";
import {
  CheckOutlined,
  CloseOutlined,
  MenuOutlined,
  MinusOutlined,
  PauseOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Collapse, Input, Select, Slider, Tag } from "antd";
import React from "react";
import { useSelector } from "react-redux";

interface Props {
  handleAssignUserTask: (userId: number) => void;
  handleRemoveUserTask: (userId: number) => void;
  handleUpdatePriority: (priorityId: number) => void;
  isEstimateOpen: boolean;
  handleEstimateOpen: () => void;
  handleEstimateClose: () => void;
  valueEstimate: number | string;
  handleChangeEstimate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateEstimate: () => void;
  valueTimeSpent: number | string;
  handleChangeTimeSpent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateTimeSpent: () => void;
}

export default function DetailFormComponent({
  handleAssignUserTask,
  handleRemoveUserTask,
  handleUpdatePriority,
  isEstimateOpen,
  handleEstimateOpen,
  handleEstimateClose,
  valueEstimate,
  handleChangeEstimate,
  handleUpdateEstimate,
  valueTimeSpent,
  handleChangeTimeSpent,
  handleUpdateTimeSpent,
}: Props) {
  const DetailForm = () => {
    const { detailProject } = useSelector((state: RootState) => {
      return state.project;
    });

    const { priorityTask, detailTask } = useSelector((state: RootState) => {
      return state.task;
    });

    const dataAssigness = detailProject.members.map((member, index) => {
      return {
        key: index,
        label: (
          <div className="flex items-center space-x-1">
            <Avatar size={"small"} src={member.avatar} />
            <span>{member.name}</span>
          </div>
        ),
        value: member.userId,
      };
    });

    const dataAssignessDefault = detailTask.assigness.map((member) => {
      return member.id;
    });

    return (
      <div className="space-y-3">
        <div className="space-y-1">
          <p className="font-bold">Assignees</p>
          <Select
            placeholder={"Choose assignees..."}
            className="w-full"
            mode="multiple"
            size="large"
            options={dataAssigness}
            value={dataAssignessDefault}
            onSelect={handleAssignUserTask}
            onDeselect={handleRemoveUserTask}
          />
        </div>
        <div className="space-y-1">
          <span className="font-bold">Priority</span>
          <Select
            onChange={handleUpdatePriority}
            className="w-full"
            value={detailTask.priorityId}
            options={priorityTask.map((priority, index) => {
              const iconPriority = [
                { key: 0, label: <UpOutlined className="text-red-500" /> },
                { key: 1, label: <MenuOutlined className="text-yellow-300" /> },
                {
                  key: 3,
                  label: (
                    <PauseOutlined rotate={90} className="text-blue-500" />
                  ),
                },
                { key: 4, label: <MinusOutlined className="text-green-400" /> },
              ];
              return {
                key: index,
                label: (
                  <div className="space-x-2">
                    {iconPriority[index].label}
                    <span>{priority.priority}</span>
                  </div>
                ),
                value: priority.priorityId,
              };
            })}
          />
        </div>
        <div className="space-y-1">
          <span className="font-bold">Estimate</span>
          {isEstimateOpen ? (
            <div className="flex flex-wrap justify-end gap-1 border p-1">
              <Input
                type="number"
                onChange={handleChangeEstimate}
                autoFocus={isEstimateOpen}
                value={valueEstimate}
                className="w-full"
              />
              <Button
                onClick={handleUpdateEstimate}
                icon={<CheckOutlined />}
                type="primary"
              />
              <Button onClick={handleEstimateClose} icon={<CloseOutlined />} />
            </div>
          ) : (
            <div onClick={handleEstimateOpen} className="hover:bg-gray-300 p-1">
              <Tag>{detailTask.originalEstimate}m</Tag>
            </div>
          )}
        </div>
        <div>
          <span className="font-bold">Time tracking</span>
          <div className="border p-1">
            <div className="flex justify-between">
              <div>
                <p>Time spent</p>
                <Input
                  type="number"
                  onChange={handleChangeTimeSpent}
                  min={
                    -detailTask.originalEstimate +
                    detailTask.timeTrackingRemaining
                  }
                  max={
                    detailTask.originalEstimate - detailTask.timeTrackingSpent
                  }
                  value={valueTimeSpent}
                  style={{ width: "120px" }}
                />
              </div>
              <div>
                <p>Time remaining</p>
                <Input
                  type="number"
                  value={
                    detailTask.originalEstimate - detailTask.timeTrackingSpent
                  }
                  style={{ width: "120px" }}
                  disabled
                />
              </div>
            </div>
            <Slider
              min={0}
              value={
                detailTask.originalEstimate - detailTask.timeTrackingRemaining
              }
              max={detailTask.originalEstimate}
            />
            <div className="flex justify-end">
              <Button
                type="primary"
                onClick={handleUpdateTimeSpent}
                disabled={valueTimeSpent == 0 ? true : false}
              >
                Save time
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Collapse
      defaultActiveKey={1}
      expandIconPosition="end"
      items={[{ key: 1, label: "Detail", children: <DetailForm /> }]}
    />
  );
}
