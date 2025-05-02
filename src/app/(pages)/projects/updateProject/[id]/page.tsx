"use client";

import {
  getCategoryService,
  getProjectDetailService,
  updateProjectService,
} from "@/app/services/projectService";
import { RootState } from "@/app/store/store";
import { EditProject } from "@/app/types/project";
import { Button, Form, Input, Select } from "antd";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const { TextArea } = Input;
import { useParams } from "next/navigation";
import { setCategoryProject, setDetailProject } from "@/redux/projectSlice";
import toast from "react-hot-toast";

export default function UpdateProjectPage() {
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const params = useParams();

  const { id } = params;

  const { categoryProject, editProject } = useSelector((state: RootState) => {
    return state.project;
  });

  const handleUpdateProject = async (data: EditProject) => {
    const action = await updateProjectService(data);
    if (action.statusCode === 200) {
      toast.success("Update project successfully");
    } else {
      toast.error(action.message);
    }
  };

  useEffect(() => {
    (async () => {
      const actionDetail = await getProjectDetailService(id);
      dispatch(setDetailProject(actionDetail.content));
      const actionCategory = await getCategoryService();
      dispatch(setCategoryProject(actionCategory.content));
    })();
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      id: editProject.id,
      projectName: editProject.projectName,
      categoryId: editProject.categoryId.id,
      description: editProject.description,
      creator: editProject.creator.id,
    });
  }, [form, editProject]);

  return (
    <div className="m-5 space-y-5">
      <p className="text-xl font-bold">Edit Project</p>
      <Form
        form={form}
        name="basic"
        layout="vertical"
        onFinish={handleUpdateProject}
        className="w-full"
      >
        <Form.Item
          label="Project ID"
          name="id"
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
          name="categoryId"
          rules={[{ required: true, message: "Project category is required" }]}
        >
          <Select
            placeholder={"Select a project category"}
            options={categoryProject}
          />
        </Form.Item>

        <Form.Item label="Descriptions" name="description">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          hidden
          label="Creator"
          name="creator"
          rules={[{ required: true, message: "Creator is required" }]}
        >
          <Input disabled />
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
