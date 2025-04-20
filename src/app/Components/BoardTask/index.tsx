"use client";

import {
  AntDesignOutlined,
  BugOutlined,
  FileAddOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Tag, Tooltip } from "antd";
import React from "react";
import EditTaskComponent from "./EditTask";

interface Props {
  isEditTaskOpen: boolean;
  handleEditTaskOpen: () => void;
  handleEditTaskClose: () => void;
}

export default function BoardTaskComponent({
  isEditTaskOpen,
  handleEditTaskOpen,
  handleEditTaskClose,
}: Props) {
  return (
    <div className="flex justify-center gap-5 flex-wrap">
      <div className="w-80 h-fit p-2 bg-gray-100 space-y-2 rounded-md">
        <span className="bg-gray-200 font-medium px-2 rounded-md">BACKLOG</span>
        <div>
          <Card
            onClick={handleEditTaskOpen}
            size="small"
            title={<p>Loi phan mem</p>}
            className="shadow cursor-grab"
          >
            <div className="flex justify-between">
              <div className="flex space-x-1">
                <BugOutlined className="text-xl text-red-500" />
                <Tag color="orange">Medium</Tag>
              </div>
              <Avatar.Group
                size={"small"}
                max={{
                  count: 2,
                  style: { color: "#f56a00", backgroundColor: "#fde3cf" },
                }}
              >
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
                <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                  />
                </Tooltip>
                <Avatar
                  style={{ backgroundColor: "#1677ff" }}
                  icon={<AntDesignOutlined />}
                />
              </Avatar.Group>
            </div>
          </Card>
        </div>
        <button className="hover:bg-slate-300 w-full rounded-md">
          <PlusOutlined />
          Create
        </button>
      </div>
      <div className="w-80 h-fit p-2 bg-gray-100 space-y-2 rounded-md">
        <span className="bg-indigo-200 font-medium px-2 rounded-md">
          SELECTED FOR DEVELOPMENT
        </span>
        <Card
          onClick={handleEditTaskOpen}
          size="small"
          title={<p>Loi phan mem</p>}
          className="shadow cursor-grab"
        >
          <div className="flex justify-between">
            <div className="flex space-x-1">
              <FileAddOutlined className="text-xl text-green-500" />
              <Tag color="orange">Medium</Tag>
            </div>
            <Avatar.Group
              size={"small"}
              max={{
                count: 2,
                style: { color: "#f56a00", backgroundColor: "#fde3cf" },
              }}
            >
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
              <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
              <Tooltip title="Ant User" placement="top">
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
              <Avatar
                style={{ backgroundColor: "#1677ff" }}
                icon={<AntDesignOutlined />}
              />
            </Avatar.Group>
          </div>
        </Card>
      </div>
      <div className="w-80 h-fit p-2 bg-gray-100 space-y-2 rounded-md">
        <span className="bg-blue-200 font-medium px-2 rounded-md">
          IN PROGRESS
        </span>
      </div>
      <div className="w-80 h-fit p-2 bg-gray-100 space-y-2 rounded-md">
        <span className="bg-green-200 font-medium px-2 rounded-md">DONE</span>
      </div>
      <EditTaskComponent
        isEditTaskOpen={isEditTaskOpen}
        handleEditTaskClose={handleEditTaskClose}
      />
    </div>
  );
}
