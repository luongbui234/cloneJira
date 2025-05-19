import { createTaskService } from "@/app/services/taskService";
import { RootState } from "@/app/store/store";
import { CreateTask } from "@/app/types/task";
import {
  BugOutlined,
  FileOutlined,
  MenuOutlined,
  MinusOutlined,
  PauseOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Drawer, Form, Input, Select, Slider } from "antd";
import React, { useMemo } from "react";
import toast from "react-hot-toast";
import { FaFileMedical } from "react-icons/fa6";
import { useSelector } from "react-redux";
const { TextArea } = Input;

interface Props {
  isCreateTaskOpen: boolean;
  handleCreateTaskClose: () => void;
  valueTotalEstimate: number;
  handleChangeTotalEstimate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valueTimeSpent: number;
  handleChangeTimeSpent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSetValueTimeSpent: (value: number) => void;
}

export default function CreateTaskSidebarComponent({
  isCreateTaskOpen,
  handleCreateTaskClose,
  valueTotalEstimate,
  handleChangeTotalEstimate,
  valueTimeSpent,
  handleChangeTimeSpent,
  handleSetValueTimeSpent,
}: Props) {
  const [form] = Form.useForm();

  const { listProject: projects } = useSelector((state: RootState) => {
    return state.project;
  });
  const {
    typeTask: types,
    statusTask: status,
    priorityTask: priorities,
  } = useSelector((state: RootState) => {
    return state.task;
  });
  const { listUserNotYetAdded: users } = useSelector((state: RootState) => {
    return state.project;
  });

  const listProject = projects.map((project, index) => {
    return { key: index, label: project.projectName, value: project.id };
  });
  const listType = types.map((type, index) => {
    return {
      key: index,
      label: (
        <div className="flex space-x-1">
          {type.id === 1 ? (
            <BugOutlined className="text-xl text-red-500" />
          ) : (
            <FileOutlined className="text-xl text-green-500" />
          )}
          <p>{type.taskType}</p>
        </div>
      ),
      value: type.id,
    };
  });
  const listStatus = status.map((status, index) => {
    return { key: index, label: status.statusName, value: status.statusId };
  });
  const listPriority = priorities.map((priority, index) => {
    const iconPriority = [
      { key: 0, label: <UpOutlined className="text-red-500" /> },
      { key: 1, label: <MenuOutlined className="text-yellow-300" /> },
      {
        key: 3,
        label: <PauseOutlined rotate={90} className="text-blue-500" />,
      },
      { key: 4, label: <MinusOutlined className="text-green-400" /> },
    ];
    return {
      key: index,
      label: (
        <div className="space-x-2">
          {iconPriority[index].label}
          <span>{priority.priority}</span>
        </div>
      ),
      value: priority.priorityId,
    };
  });
  const listUser = users.map((user, index) => {
    return {
      key: index,
      label: (
        <div className="flex items-center space-x-1">
          <Avatar size={"small"} src={user.avatar} />
          <span>{user.name}</span>
        </div>
      ),
      value: user.userId,
    };
  });

  const handleCreateTask = async (data: CreateTask) => {
    const newData = { ...data };
    newData.description = newData.description || "";
    newData.listUserAsign = newData.listUserAsign || [];
    console.log("newData: ", newData);

    const actionCreateTask = await createTaskService(newData);
    if (actionCreateTask.statusCode === 200) {
      form.resetFields();
      handleSetValueTimeSpent(0);
      toast.success("Create task successfully");
    } else {
      toast.error(actionCreateTask.message);
    }
  };

  useMemo(() => {
    form.setFieldValue(
      "timeTrackingRemaining",
      valueTotalEstimate - valueTimeSpent
    );
  }, [form, valueTotalEstimate, valueTimeSpent]);
  return (
    <Drawer
      title={
        <div className="flex items-center space-x-3">
          <FaFileMedical className="text-xl" />
          <span className="text-xl">Create Task</span>
        </div>
      }
      onClose={handleCreateTaskClose}
      open={isCreateTaskOpen}
      placement="left"
      closable={false}
      footer={
        <div className="flex justify-end space-x-3">
          <Button onClick={handleCreateTaskClose}>Cancel</Button>
          <Button onClick={() => form.submit()} type="primary">
            Create
          </Button>
        </div>
      }
    >
      <Form
        form={form}
        name="basic"
        layout="vertical"
        onFinish={handleCreateTask}
        className="w-full"
        initialValues={{
          originalEstimate: 0,
          timeTrackingSpent: 0,
          timeTrackingRemaining: 0,
        }}
      >
        <Form.Item
          label="Project"
          name="projectId"
          rules={[{ required: true, message: "Project name is required" }]}
        >
          <Select
            showSearch
            optionFilterProp="label"
            placeholder={"Select a project"}
            options={listProject}
          />
        </Form.Item>

        <Form.Item
          label="Task name"
          name="taskName"
          rules={[{ required: true, message: "Task name is required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Status"
          name="statusId"
          rules={[{ required: true, message: "Status is required" }]}
        >
          <Select placeholder={"Select a status"} options={listStatus} />
        </Form.Item>

        <Form.Item
          label="Priority"
          name="priorityId"
          rules={[{ required: true, message: "Priority is required" }]}
        >
          <Select placeholder={"Select a priority"} options={listPriority} />
        </Form.Item>

        <Form.Item
          label="Task type"
          name="typeId"
          rules={[{ required: true, message: "Type is required" }]}
        >
          <Select placeholder={"Select a type"} options={listType} />
        </Form.Item>

        <Form.Item label="Assigners" name="listUserAsign">
          <Select
            placeholder={"Choose assignees..."}
            mode="multiple"
            options={listUser}
          />
        </Form.Item>

        <Form.Item
          label="Total estimate"
          name="originalEstimate"
          rules={[
            { required: true, message: "Total estimated hours is required" },
          ]}
        >
          <Input
            type="number"
            onChange={handleChangeTotalEstimate}
            min={0}
            style={{ width: "120px" }}
            suffix={"m"}
          />
        </Form.Item>

        <p>Time Tracking</p>
        <div className="flex justify-between">
          <Form.Item
            label="Time spent"
            name="timeTrackingSpent"
            rules={[{ required: true, message: "Time spent is required" }]}
          >
            <Input
              type="number"
              onChange={handleChangeTimeSpent}
              min={0}
              max={valueTotalEstimate}
              style={{ width: "120px" }}
            />
          </Form.Item>

          <Form.Item label="Time remaining" name="timeTrackingRemaining">
            <Input type="number" style={{ width: "120px" }} disabled />
          </Form.Item>
        </div>
        <Slider min={0} value={valueTimeSpent} max={valueTotalEstimate} />

        <Form.Item label="Descriptions" name="description">
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Drawer>
  );
}
