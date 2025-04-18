"use client";

import {
  AntDesignOutlined,
  EllipsisOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Descriptions, Dropdown, Table, Tooltip } from "antd";
import Link from "next/link";
import React from "react";

export default function ProjectsTableComponent() {
  const items = [
    {
      key: 1,
      label: (
        <div className="flex flex-col gap-2">
          <Button type="primary">
            <Link href={"/projects/updateProject/15907"}>Update project</Link>
          </Button>
          <Button danger>Delete project</Button>
        </div>
      ),
    },
  ];

  const itemsMobile = [
    {
      key: 1,
      label: <strong>Id</strong>,
      children: "1155",
    },
    {
      key: 2,
      label: <strong>Project name</strong>,
      children: (
        <Link href={"/projects/boardProject/15907"} className="text-blue-500">
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
          <Button type="primary">
            <Link href={"/projects/updateProject/15907"}>Update project</Link>
          </Button>
          <Button danger>Delete project</Button>
        </div>
      ),
    },
  ];

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
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Button onClick={(e) => e.preventDefault()}>
            <EllipsisOutlined />
          </Button>
        </Dropdown>
      ),
    },
  ];

  const dataSourceMobile = [
    {
      dataMobile: <Descriptions bordered items={itemsMobile} />,
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
