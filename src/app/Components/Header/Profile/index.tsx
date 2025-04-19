import { Avatar, Form, Input, Modal } from "antd";
import React from "react";

interface Props {
  isProfileOpen: boolean;
  handleProfileClose: () => void;
}

export default function ProfileComponent({
  isProfileOpen,
  handleProfileClose,
}: Props) {
  const onFinish = (values: string) => {
    console.log("Success:", values);
  };

  return (
    <Modal
      title={
        <div className="flex items-center gap-2">
          <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
          <p>MY PROFILE</p>
        </div>
      }
      open={isProfileOpen}
      onOk={handleProfileClose}
      onCancel={handleProfileClose}
    >
      <Form
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        className="w-full"
      >
        <Form.Item
          label="ID"
          name="Id"
          rules={[{ required: true, message: "ID is required" }]}
        >
          <Input disabled />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Email is required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Name is required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone number"
          name="phoneNumber"
          rules={[{ required: true, message: "Phone number is required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Password is required",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Password confirmation"
          name="passwordConfirmation"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Password is required",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Password confirmation is required")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
}
