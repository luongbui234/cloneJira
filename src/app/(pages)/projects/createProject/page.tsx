"use client";

import React, { useEffect } from "react";
import { Button, Form, Input, Select } from "antd";
import { CreateProject } from "@/app/types/project";
import {
  createProjectService,
  getCategoryService,
} from "@/app/services/projectService";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryProject } from "@/redux/projectSlice";
import { RootState } from "@/app/store/store";
const { TextArea } = Input;

export default function CreateProjectPage() {
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const { categoryProject } = useSelector((state: RootState) => {
    return state.project;
  });

  useEffect(() => {
    (async () => {
      const action = await getCategoryService();
      dispatch(setCategoryProject(action.content));
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
            options={categoryProject}
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
