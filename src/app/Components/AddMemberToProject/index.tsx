import { Avatar, Button, List, Modal } from "antd";
import React from "react";
import ProjectsSearchComponent from "../ProjectsSearch";

interface Props {
  isAddMemberOpen: boolean;
  handleAddMemberClose: () => void;
}

export default function AddMemberToProjectComponent({
  isAddMemberOpen,
  handleAddMemberClose,
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
        <div className="">
          <span>ADD MEMBER TO PROJECT </span>
          <p className="text-blue-500 ipad:inline">Du an cyber</p>
        </div>
      }
      footer
      centered
      width={1000}
      open={isAddMemberOpen}
      onCancel={handleAddMemberClose}
    >
      <div className="flex justify-between items-center w-full ipad:w-1/2">
        <p>Search user:</p>
        <ProjectsSearchComponent />
      </div>
      <div className="flex justify-between flex-wrap ipad:flex-nowrap gap-5">
        <div className="w-full space-y-2">
          <p className="text-xl">Not yet added</p>
          <List
            className="h-96 overflow-auto border px-2"
            dataSource={data}
            renderItem={(item) => (
              <List.Item extra={<Button type="primary">Add</Button>}>
                <List.Item.Meta
                  avatar={
                    <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                  }
                  title={item.title}
                  description="User ID: 7502"
                />
              </List.Item>
            )}
          />
        </div>
        <div className="w-full space-y-2">
          <p className="text-xl">Already in project</p>
          <List
            className="h-96 overflow-auto border px-2"
            dataSource={data}
            renderItem={(item) => (
              <List.Item extra={<Button danger>Remove</Button>}>
                <List.Item.Meta
                  avatar={
                    <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                  }
                  title={item.title}
                  description="User ID: 7502"
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </Modal>
  );
}
