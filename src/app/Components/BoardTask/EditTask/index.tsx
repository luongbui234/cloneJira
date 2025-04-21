import {
  BugOutlined,
  CheckOutlined,
  CloseOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Input, List, Modal, Select } from "antd";
import React from "react";
import DetailFormComponent from "./DetailForm";
import DeleteTaskComponent from "./DeleteTask";
const { TextArea } = Input;

interface Props {
  isEditTaskOpen: boolean;
  handleEditTaskClose: () => void;
  isNameTaskOpen: boolean;
  handleNameTaskOpen: () => void;
  handleNameTaskClose: () => void;
  isDescTaskOpen: boolean;
  handleDescTaskOpen: () => void;
  handleDescTaskClose: () => void;
  isEstimateOpen: boolean;
  handleEstimateOpen: () => void;
  handleEstimateClose: () => void;
}

export default function EditTaskComponent({
  isEditTaskOpen,
  handleEditTaskClose,
  isNameTaskOpen,
  handleNameTaskOpen,
  handleNameTaskClose,
  isDescTaskOpen,
  handleDescTaskOpen,
  handleDescTaskClose,
  isEstimateOpen,
  handleEstimateOpen,
  handleEstimateClose,
}: Props) {
  const data = [
    {
      title: "luong",
    },
    {
      title: "luong",
    },
    {
      title: "luong",
    },
    {
      title: "luong",
    },
    {
      title: "luong",
    },
    {
      title: "luong",
    },
    {
      title: "luong",
    },
    {
      title: "luong",
    },
    {
      title: "luong",
    },
  ];

  return (
    <Modal
      title={
        <div className="flex justify-between">
          <Select
            className="w-32"
            defaultValue={1}
            options={[
              {
                label: (
                  <div className="flex space-x-1">
                    <BugOutlined className="text-xl text-red-500" />
                    <p>Bug</p>
                  </div>
                ),
                value: 1,
              },
              {
                label: (
                  <div className="flex space-x-1">
                    <FileAddOutlined className="text-xl text-green-500" />
                    <p>New task</p>
                  </div>
                ),
                value: 2,
              },
            ]}
          />
          <div className="space-x-2">
            <DeleteTaskComponent />
            <CloseOutlined
              onClick={handleEditTaskClose}
              className="text-3xl cursor-pointer"
            />
          </div>
        </div>
      }
      closable={false}
      footer
      centered
      width={1000}
      open={isEditTaskOpen}
      onCancel={handleEditTaskClose}
    >
      <div className="flex gap-3 flex-wrap ipad:flex-nowrap">
        <div className="w-full space-y-3">
          {isNameTaskOpen ? (
            <div className="flex flex-wrap justify-end gap-1 border p-1">
              <Input onBlur={handleNameTaskClose} autoFocus={isNameTaskOpen} />
              <Button
                onClick={handleNameTaskClose}
                icon={<CheckOutlined />}
                type="primary"
              />

              <Button onClick={handleNameTaskClose} icon={<CloseOutlined />} />
            </div>
          ) : (
            <p
              onClick={handleNameTaskOpen}
              className="hover:bg-gray-300 text-2xl font-semibold"
            >
              loi phan mem
            </p>
          )}

          <div className="space-y-2">
            <p className="font-bold">Description</p>
            {isDescTaskOpen ? (
              <div className="flex flex-wrap justify-end gap-1 border p-1">
                <TextArea
                  onBlur={handleDescTaskClose}
                  autoFocus={isDescTaskOpen}
                  placeholder="Add a descriptions..."
                />
                <Button
                  onClick={handleDescTaskClose}
                  icon={<CheckOutlined />}
                  type="primary"
                />

                <Button
                  onClick={handleDescTaskClose}
                  icon={<CloseOutlined />}
                />
              </div>
            ) : (
              <p onClick={handleDescTaskOpen} className="hover:bg-gray-300">
                helo
              </p>
            )}
          </div>

          <div className="space-y-2">
            <p>Comments</p>
            <div className="flex gap-2">
              <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
              <Input placeholder="Add a comment..." />
            </div>
            <List
              className="h-96 overflow-auto border px-2"
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                    }
                    title={item.title}
                    description={
                      <div className="space-x-2">
                        <span className="hover:underline cursor-pointer">
                          Edit
                        </span>
                        <span className="hover:underline cursor-pointer">
                          Delete
                        </span>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
        <div className="w-full space-y-3">
          <Select
            className="w-60"
            defaultValue={1}
            options={[
              {
                label: "BACKLOG",
                value: 1,
              },
              {
                label: "SELECTED FOR DEVELOPMENT",
                value: 2,
              },
              {
                label: "IN PROGRESS",
                value: 3,
              },
              {
                label: "DONE",
                value: 4,
              },
            ]}
          />
          <DetailFormComponent
            isEstimateOpen={isEstimateOpen}
            handleEstimateOpen={handleEstimateOpen}
            handleEstimateClose={handleEstimateClose}
          />
        </div>
      </div>
    </Modal>
  );
}
