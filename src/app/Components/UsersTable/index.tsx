import {
  DeleteOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Button, Descriptions, message, Popconfirm, Table } from "antd";
import React from "react";
import EditUserComponent from "./EditUser";

interface Props {
  isEditUserOpen: boolean;
  handleEditUserOpen: () => void;
  handleEditUserClose: () => void;
}

export default function UsersTableComponent({
  isEditUserOpen,
  handleEditUserOpen,
  handleEditUserClose,
}: Props) {
  const confirm = () => {
    message.success("Click on Yes");
  };
  const cancel = () => {
    message.error("Click on No");
  };

  const dataSource = [
    {
      no: 1,
      name: "luong",
      userId: "1111",
      email: "luong@gmail.com",
      phoneNumber: "0123456789",
      action: (
        <div className="space-x-2">
          <Button type="primary" onClick={handleEditUserOpen}>
            <EditOutlined />
          </Button>
          <Popconfirm
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            title="Are you sure to delete this user?"
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
              label: <strong>No.</strong>,
              children: 1,
            },
            {
              key: 2,
              label: <strong>Name</strong>,
              children: "luong",
            },
            {
              key: 3,
              label: <strong>User ID</strong>,
              children: 1111,
            },
            {
              key: 4,
              label: <strong>Email</strong>,
              children: "luong@gmail.com",
            },
            {
              key: 5,
              label: <strong>Phone Number</strong>,
              children: "0123456789",
            },
            {
              key: 6,
              label: <strong>Actions</strong>,
              children: (
                <div className="space-x-2">
                  <Button type="primary" onClick={handleEditUserOpen}>
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
      />
    </>
  );
}
