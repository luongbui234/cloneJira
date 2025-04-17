"use client";

import { Button, Form, Input, Select } from "antd";
import Link from "next/link";
import React from "react";
const { TextArea } = Input;

export default function UpdateProjectPage() {
  const onFinish = (values: string) => {
    console.log("Success:", values);
  };

  return (
    <div className="m-5 space-y-5">
      <p className="text-xl font-bold">New Project</p>
      <Form
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        className="w-full"
      >
        <Form.Item
          label="Project ID"
          name="projectId"
          rules={[{ required: true, message: "Project ID is required" }]}
        >
          <Input disabled />
        </Form.Item>

        <Form.Item
          label="Project name"
          name="projectName"
          rules={[{ required: true, message: "Project name is required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Project category"
          name="projectCategory"
          rules={[{ required: true, message: "Project category is required" }]}
        >
          <Select
            placeholder={"Select a project category"}
            options={[
              {
                label: "Dự án web",
                value: 1,
              },
              {
                label: "Dự án phần mềm",
                value: 2,
              },
              {
                label: "Dự án di động",
                value: 3,
              },
            ]}
          />
        </Form.Item>

        <Form.Item label="Descriptions">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="default" className="bg-gray-300">
            <Link href={"/projects"}>Cancel</Link>
          </Button>
          <Button type="primary" htmlType="submit" className="mx-3">
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
