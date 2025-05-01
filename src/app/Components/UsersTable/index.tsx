"use client";

import {
  DeleteOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Button, Descriptions, Popconfirm, Table } from "antd";
import React from "react";
import EditUserComponent from "./EditUser";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { User } from "@/app/types/user";

interface Props {
  isEditUserOpen: boolean;
  handleEditUserOpen: (id: number) => void;
  handleEditUserClose: () => void;
  handleUpdateUser: (data: User) => void;
  handleDeleteUser: (id: number) => void;
}

export default function UsersTableComponent({
  isEditUserOpen,
  handleEditUserOpen,
  handleEditUserClose,
  handleUpdateUser,
  handleDeleteUser,
}: Props) {
  const { listUser } = useSelector((state: RootState) => {
    return state.user;
  });

  const dataSource = listUser.map((user, index) => {
    return {
      key: user.userId,
      no: index + 1,
      name: user.name,
      userId: user.userId,
      email: user.email,
      phoneNumber: user.phoneNumber,
      action: (
        <div className="space-x-2">
          <Button
            type="primary"
            onClick={() => handleEditUserOpen(user.userId)}
          >
            <EditOutlined />
          </Button>
          <Popconfirm
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            title={`Are you sure to delete user: ${user.name}?`}
            onConfirm={() => handleDeleteUser(user.userId)}
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
  const dataSourceMobile = listUser.map((user, index) => {
    return {
      key: user.userId,
      dataMobile: (
        <Descriptions
          bordered
          items={[
            {
              key: 1,
              label: <strong>No.</strong>,
              children: index + 1,
            },
            {
              key: 2,
              label: <strong>Name</strong>,
              children: user.name,
            },
            {
              key: 3,
              label: <strong>User ID</strong>,
              children: user.userId,
            },
            {
              key: 4,
              label: <strong>Email</strong>,
              children: user.email,
            },
            {
              key: 5,
              label: <strong>Phone Number</strong>,
              children: user.phoneNumber,
            },
            {
              key: 6,
              label: <strong>Actions</strong>,
              children: (
                <div className="space-x-2">
                  <Button
                    type="primary"
                    onClick={() => handleEditUserOpen(user.userId)}
                  >
                    <EditOutlined />
                  </Button>
                  <Popconfirm
                    icon={
                      <QuestionCircleOutlined
                        style={{ color: "red" }}
                        className="text-red-500"
                      />
                    }
                    title="Are you sure to delete this user?"
                    onConfirm={() => handleDeleteUser(user.userId)}
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
      title: "No.",
      dataIndex: "no",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "User ID",
      dataIndex: "userId",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
    },
    {
      title: "Action",
      dataIndex: "action",
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
      <EditUserComponent
        isEditUserOpen={isEditUserOpen}
        handleEditUserClose={handleEditUserClose}
        handleUpdateUser={handleUpdateUser}
      />
    </>
  );
}
