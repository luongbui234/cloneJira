"use client";

import {
  AntDesignOutlined,
  DeleteOutlined,
  EditOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Descriptions,
  message,
  Popconfirm,
  Table,
  Tooltip,
} from "antd";
import Link from "next/link";
import React from "react";

export default function ProjectsTableComponent() {
  const confirm = () => {
    message.success("Click on Yes");
  };
  const cancel = () => {
    message.error("Click on No");
  };

  const dataSource = [
    {
      id: 1,
      projectName: (
        <Link href={"/projects/boardProject/15907"} className="text-blue-500">
          luong
        </Link>
      ),
      categoryName: "du an phan mem",
      creator: "bui van luong",
      members: (
        <Avatar.Group
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
      ),
      actions: (
        <div className="space-x-2">
          <Button type="primary" href="/projects/updateProject/15907">
            <EditOutlined />
          </Button>
          <Popconfirm
            icon={
              <QuestionCircleOutlined
                style={{ color: "red" }}
                className="text-red-500"
              />
            }
            title="Are you sure to delete project: du an cyber?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const dataSourceMobile = [
    {
      dataMobile: (
        <Descriptions
          bordered
          items={[
            {
              key: 1,
              label: <strong>Id</strong>,
              children: "1155",
            },
            {
              key: 2,
              label: <strong>Project name</strong>,
              children: (
                <Link
                  href={"/projects/boardProject/15907"}
                  className="text-blue-500"
                >
                  luong
                </Link>
              ),
            },
            {
              key: 3,
              label: <strong>Category name</strong>,
              children: "du an phan mem",
            },
            {
              key: 4,
              label: <strong>Creator</strong>,
              children: "bui van luong",
            },
            {
              key: 5,
              label: <strong>Members</strong>,
              children: (
                <Avatar.Group
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
              ),
            },
            {
              key: 6,
              label: <strong>Actions</strong>,
              children: (
                <div className="space-x-2">
                  <Button type="primary" href="/projects/updateProject/15907">
                    <EditOutlined />
                  </Button>
                  <Popconfirm
                    icon={
                      <QuestionCircleOutlined
                        style={{ color: "red" }}
                        className="text-red-500"
                      />
                    }
                    title="Are you sure to delete project: du an cyber?"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button danger>
                      <DeleteOutlined />
                    </Button>
                  </Popconfirm>
                </div>
              ),
            },
          ]}
        />
      ),
    },
  ];

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Project name",
      dataIndex: "projectName",
    },
    {
      title: "Category name",
      dataIndex: "categoryName",
    },
    {
      title: "Creator",
      dataIndex: "creator",
    },
    {
      title: "Members",
      dataIndex: "members",
    },
    {
      title: "Actions",
      dataIndex: "actions",
    },
  ];

  const columnsMobile = [{ dataIndex: "dataMobile" }];

  return (
    <>
      <Table
        dataSource={dataSourceMobile}
        columns={columnsMobile}
        pagination={{ align: "end" }}
        bordered={true}
        size="small"
        className="ipad:hidden border-2 border-green-500 rounded-xl"
      />
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ align: "end" }}
        bordered={true}
        size="small"
        className="hidden ipad:block border-2 border-green-500 rounded-xl"
      />
    </>
  );
}
