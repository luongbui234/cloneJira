"use client";

import React from "react";
import {
  Table,
  Input,
  Avatar,
  Tooltip,
  Dropdown,
  Button,
  Descriptions,
} from "antd";
import {
  AntDesignOutlined,
  EllipsisOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
const { Search } = Input;

export default function ProjectsPage() {
  const onSearch = (value: string) => {
    return console.log(value);
  };

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
      children: "luong",
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
        <>
          <Button>Sua</Button>
          <Button>Xoa</Button>
        </>
      ),
    },
  ];

  const dataSource = [
    {
      id: 1,
      projectName: "luong",
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
    <div className="m-5 space-y-5">
      <div className="flex justify-between">
        <p className="text-2xl font-bold">Projects</p>
        <Button type="primary">
          <Link href={"/projects/createProject"}>Create Project</Link>
        </Button>
      </div>
      <Search onSearch={onSearch} allowClear enterButton size="large" />
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
    </div>
  );
}
