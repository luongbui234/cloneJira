import { Avatar, Form, Input, Modal } from "antd";
import React from "react";

interface Props {
  isEditUserOpen: boolean;
  handleEditUserClose: () => void;
}

export default function EditUserComponent({
  isEditUserOpen,
  handleEditUserClose,
}: Props) {
  const onFinish = (values: string) => {
    console.log("Success:", values);
  };

  return (
    <Modal
      title={"Edit USer"}
      centered
      open={isEditUserOpen}
      onOk={handleEditUserClose}
      onCancel={handleEditUserClose}
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
