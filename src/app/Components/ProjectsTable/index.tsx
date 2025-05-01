"use client";

import { RootState } from "@/app/store/store";
import {
  DeleteOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Descriptions, Popconfirm, Table, Tooltip } from "antd";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

interface Props {
  handleDeleteProject: (id: number) => void;
}

export default function ProjectsTableComponent({ handleDeleteProject }: Props) {
  const { listProject } = useSelector((state: RootState) => {
    return state.project;
  });

  const dataSource = listProject.map((project) => {
    return {
      key: project.id,
      id: project.id,
      projectName: (
        <Link
          href={`/projects/boardProject/${project.id}`}
          className="text-blue-500"
        >
          {project.projectName}
        </Link>
      ),
      categoryName: project.categoryName,
      creator: project.creator.name,
      members: (
        <Avatar.Group
          max={{
            count: 2,
            style: { color: "#f56a00", backgroundColor: "#fde3cf" },
          }}
        >
          {project.members.map((member, index) => {
            return (
              <Tooltip key={index} title={member.name} placement="top">
                <Avatar src={member.avatar} />
              </Tooltip>
            );
          })}
        </Avatar.Group>
      ),
      actions: (
        <div className="space-x-2">
          <Button type="primary" href={`/projects/updateProject/${project.id}`}>
            <EditOutlined />
          </Button>
          <Popconfirm
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            title={`Are you sure to delete project: ${project.projectName}?`}
            onConfirm={() => handleDeleteProject(project.id)}
            okText="Yes"
            cancelText="No"
            okType="danger"
          >
            <Button danger>
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        </div>
      ),
    };
  });

  const dataSourceMobile = listProject.map((project) => {
    return {
      key: project.id,
      dataMobile: (
        <Descriptions
          bordered
          items={[
            {
              key: 1,
              label: <strong>Id</strong>,
              children: project.id,
            },
            {
              key: 2,
              label: <strong>Project name</strong>,
              children: (
                <Link
                  href={`/projects/boardProject/${project.id}`}
                  className="text-blue-500"
                >
                  {project.projectName}
                </Link>
              ),
            },
            {
              key: 3,
              label: <strong>Category name</strong>,
              children: project.categoryName,
            },
            {
              key: 4,
              label: <strong>Creator</strong>,
              children: project.creator.name,
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
                  {project.members.map((member, index) => {
                    return (
                      <Tooltip key={index} title={member.name} placement="top">
                        <Avatar src={member.avatar} />
                      </Tooltip>
                    );
                  })}
                </Avatar.Group>
              ),
            },
            {
              key: 6,
              label: <strong>Actions</strong>,
              children: (
                <div className="space-x-2">
                  <Button
                    type="primary"
                    href={`/projects/updateProject/${project.id}`}
                  >
                    <EditOutlined />
                  </Button>
                  <Popconfirm
                    icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                    title={`Are you sure to delete project: ${project.projectName}?`}
                    onConfirm={() => handleDeleteProject(project.id)}
                    okText="Yes"
                    cancelText="No"
                    okType="danger"
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
    };
  });

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
