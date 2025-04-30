"use client";

import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { Category, CategoryApi, CreateProject } from "@/app/types/project";
import {
  createProjectService,
  getCategoryService,
} from "@/app/services/projectService";
import toast from "react-hot-toast";
const { TextArea } = Input;

export default function CreateProjectPage() {
  const [form] = Form.useForm();

  const [listCategory, setListCategory] = useState<Category[]>([]);

  useEffect(() => {
    (async () => {
      const action = await getCategoryService();
      const categoryApi: CategoryApi[] = action.content;
      const category = categoryApi.map((item, index) => {
        return {
          key: index + 1,
          label: item.projectCategoryName,
          value: item.id,
        };
      });
      setListCategory(category);
    })();
  }, []);

  const handleCreateProject = async (data: CreateProject) => {
    const action = await createProjectService(data);
    if (action.statusCode === 200) {
      form.resetFields();
      toast.success("Create project successfully");
    } else {
      toast.error(action.message);
    }
  };

  return (
    <div className="m-5 space-y-5">
      <p className="text-xl font-bold">Create Project</p>
      <Form
        form={form}
        name="basic"
        layout="vertical"
        onFinish={handleCreateProject}
        className="w-full"
        initialValues={{ description: "" }}
      >
        <Form.Item
          label="Project name"
          name="projectName"
          rules={[{ required: true, message: "Project name is required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Project category"
          name="categoryId"
          rules={[{ required: true, message: "Project category is required" }]}
        >
          <Select
            placeholder={"Select a project category"}
            options={listCategory}
          />
        </Form.Item>

        <Form.Item label="Descriptions" name="description">
          <TextArea rows={4} placeholder="Description project..." />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="default" href="/projects" className="bg-gray-300">
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" className="mx-3">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
