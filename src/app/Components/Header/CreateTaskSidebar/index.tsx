import { Button, Drawer, Form, Input, Select, Slider } from "antd";
import React from "react";
import { FaFileMedical } from "react-icons/fa6";
const { TextArea } = Input;

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CreateTaskSidebarComponent({ open, onClose }: Props) {
  const onFinish = (values: string) => {
    console.log("Success:", values);
  };

  return (
    <Drawer
      title={
        <div className="flex items-center space-x-3">
          <FaFileMedical className="text-xl" />
          <span className="text-xl">Create Task</span>
        </div>
      }
      onClose={onClose}
      open={open}
      placement="left"
      closable={false}
      footer={
        <div className="flex justify-end space-x-3">
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onClose} type="primary">
            Create
          </Button>
        </div>
      }
    >
      <Form
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        className="w-full"
      >
        <Form.Item
          label="Project"
          name="project"
          rules={[{ required: true, message: "Project name is required" }]}
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

        <Form.Item
          label="Task name"
          name="taskName"
          rules={[{ required: true, message: "Project name is required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
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

        <Form.Item
          label="Priority"
          name="priority"
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

        <Form.Item
          label="Task type"
          name="taskType"
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

        <Form.Item
          label="Assigners"
          name="assigners"
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

        <p>Time Tracking</p>
        <div>
          <Form.Item
            label="Total estimated hours"
            name="totalEstimatedHours"
            rules={[
              { required: true, message: "Project category is required" },
            ]}
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

          <Form.Item
            label="Hours spent"
            name="hoursSpent"
            rules={[
              { required: true, message: "Project category is required" },
            ]}
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
          <div>
            <Slider defaultValue={30} />
            <div className="flex justify-between">
              <span>6 hour(s) spent</span>
              <span>3 hour(s) remaining</span>
            </div>
          </div>
        </div>

        <Form.Item label="Descriptions">
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Drawer>
  );
}
