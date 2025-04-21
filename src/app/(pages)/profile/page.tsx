"use client";

import { Avatar, Button, Form, Input } from "antd";
import React from "react";

export default function ProfilePage() {
  const onFinish = (values: string) => {
    console.log("Success:", values);
  };

  return (
    <div className="flex flex-wrap ipad:flex-nowrap justify-center gap-10 mt-5">
      <div className="text-center">
        <Avatar className="size-40" style={{ backgroundColor: "#f56a00" }}>
          K
        </Avatar>
        <p className="text-2xl font-bold">luong bui</p>
      </div>
      <Form
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        className="w-full ipad:w-2/5 border rounded-md p-2"
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

        <Form.Item>
          <Button type="default" href="/projects" className="bg-gray-300">
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" className="mx-3">
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
