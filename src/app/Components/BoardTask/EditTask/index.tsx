import {
  BugOutlined,
  CloseOutlined,
  DeleteOutlined,
  FileAddOutlined,
  MenuOutlined,
  MinusOutlined,
  PauseOutlined,
  UpOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Collapse,
  Input,
  InputNumber,
  List,
  Modal,
  Select,
  Slider,
} from "antd";
import React from "react";
const { TextArea } = Input;

interface Props {
  isEditTaskOpen: boolean;
  handleEditTaskClose: () => void;
}

export default function EditTaskComponent({
  isEditTaskOpen,
  handleEditTaskClose,
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

  const detailForm = () => {
    return (
      <div className="space-y-3">
        <div className="space-y-1">
          <p className="font-bold">Assignees</p>
          <Select
            placeholder={"Choose assignees..."}
            className="w-full"
            mode="multiple"
            size="large"
            options={[
              {
                label: (
                  <div className="flex items-center space-x-1">
                    <Avatar
                      size={"small"}
                      style={{ backgroundColor: "#f56a00" }}
                    >
                      K
                    </Avatar>
                    <span>luong</span>
                  </div>
                ),
                value: 1,
              },
              {
                label: (
                  <div className="flex items-center space-x-1">
                    <Avatar
                      size={"small"}
                      style={{ backgroundColor: "#f56a00" }}
                    >
                      K
                    </Avatar>
                    <span>quynh</span>
                  </div>
                ),
                value: 2,
              },
              {
                label: (
                  <div className="flex items-center space-x-1">
                    <Avatar
                      size={"small"}
                      style={{ backgroundColor: "#f56a00" }}
                    >
                      K
                    </Avatar>
                    <span>dat</span>
                  </div>
                ),
                value: 3,
              },
              {
                label: (
                  <div className="flex items-center space-x-1">
                    <Avatar
                      size={"small"}
                      style={{ backgroundColor: "#f56a00" }}
                    >
                      K
                    </Avatar>
                    <span>luong</span>
                  </div>
                ),
                value: 4,
              },
              {
                label: (
                  <div className="flex items-center space-x-1">
                    <Avatar
                      size={"small"}
                      style={{ backgroundColor: "#f56a00" }}
                    >
                      K
                    </Avatar>
                    <span>luong</span>
                  </div>
                ),
                value: 5,
              },
              {
                label: (
                  <div className="flex items-center space-x-1">
                    <Avatar
                      size={"small"}
                      style={{ backgroundColor: "#f56a00" }}
                    >
                      K
                    </Avatar>
                    <span>luong</span>
                  </div>
                ),
                value: 6,
              },
              {
                label: (
                  <div className="flex items-center space-x-1">
                    <Avatar
                      size={"small"}
                      style={{ backgroundColor: "#f56a00" }}
                    >
                      K
                    </Avatar>
                    <span>luong</span>
                  </div>
                ),
                value: 7,
              },
            ]}
          />
        </div>
        <div className="space-y-1">
          <span className="font-bold">Priority</span>
          <Select
            className="w-full"
            defaultValue={1}
            options={[
              {
                label: (
                  <div className="space-x-2">
                    <MinusOutlined className="text-green-400" />
                    <span>Lowest</span>
                  </div>
                ),
                value: 1,
              },
              {
                label: (
                  <div className="space-x-2">
                    <PauseOutlined rotate={90} className="text-blue-500" />
                    <span>Low</span>
                  </div>
                ),
                value: 2,
              },
              {
                label: (
                  <div className="space-x-2">
                    <MenuOutlined className="text-yellow-300" />
                    <span>Medium</span>
                  </div>
                ),
                value: 3,
              },
              {
                label: (
                  <div className="space-x-2">
                    <UpOutlined className="text-red-500" />
                    <span>High</span>
                  </div>
                ),
                value: 4,
              },
            ]}
          />
        </div>
        <div className="space-y-1">
          <span className="font-bold">Estimate</span>
          <Input />
        </div>
        <div>
          <span className="font-bold">Time tracking</span>
          <div>
            <div className="flex justify-between">
              <div>
                <p>Time spent</p>
                <InputNumber
                  min={0}
                  defaultValue={0}
                  style={{ width: "120px" }}
                />
              </div>
              <div>
                <p>Time remaining</p>
                <InputNumber
                  min={0}
                  defaultValue={0}
                  style={{ width: "120px" }}
                />
              </div>
            </div>
            <Slider defaultValue={30} />
          </div>
        </div>
      </div>
    );
  };

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
            <DeleteOutlined className="text-3xl text-red-500 cursor-pointer" />
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
          <p className="text-2xl font-semibold">loi phan mem</p>

          <div className="space-y-2">
            <p>Description</p>
            <TextArea placeholder="Add a descriptions..." />
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
          <Collapse
            defaultActiveKey={1}
            expandIconPosition="right"
            items={[{ key: 1, label: "Detail", children: detailForm() }]}
          />
        </div>
      </div>
    </Modal>
  );
}
