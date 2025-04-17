"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  Drawer,
  DrawerHeader,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import {
  FaBars,
  FaFileMedical,
  FaFolder,
  FaRegCircleUser,
  FaUsers,
} from "react-icons/fa6";
import { HiLogout } from "react-icons/hi";
import {
  Drawer as AntdDrawer,
  Button as AntdButton,
  Form,
  Input,
  Select,
  Slider,
} from "antd";
const { TextArea } = Input;

export default function HeaderComponents() {
  const [isOpen, setIsOpen] = useState(false);

  const [open, setOpen] = useState(false);

  const pathName = usePathname();

  const onFinish = (values: string) => {
    console.log("Success:", values);
  };

  return (
    <nav className="p-3 bg-orange-300 flex justify-between">
      <div className="flex items-center gap-2">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8"
          alt="Flowbite Logo"
        />
        <span>JIRA</span>
      </div>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        type="button"
        className="block desktop:hidden px-2 rounded-md bg-green-500"
      >
        <FaBars />
      </button>
      <div className="content-center hidden desktop:block">
        <ul className="flex gap-5 items-center">
          <li>
            <Link
              href="/projects"
              className={`${
                pathName.includes("/projects") ? "text-blue-500" : "text-white"
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/users"
              className={`${
                pathName === "/users" ? "text-blue-500" : "text-white"
              }`}
            >
              Users
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="text-white"
            >
              Create Task
            </button>
          </li>
          <li>
            <Dropdown
              trigger="hover"
              arrowIcon={false}
              renderTrigger={() => (
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://flowbite.com/docs/images/logo.svg"
                  alt="Rounded avatar"
                />
              )}
            >
              <DropdownHeader>Bui Van Luong</DropdownHeader>
              <DropdownItem icon={FaRegCircleUser}>Profile</DropdownItem>
              <DropdownDivider />
              <DropdownItem icon={HiLogout}>Sign out</DropdownItem>
            </Dropdown>
          </li>
        </ul>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        position="right"
        className="fixed top-0 right-0 h-screen desktop:hidden"
      >
        <DrawerHeader title="Bui Van Luong" titleIcon={FaBars} />
        <Sidebar>
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem
                icon={FaFolder}
                href="/projects"
                style={{
                  color: pathName === "/projects" ? "#3f83f8" : "#ffffff",
                  backgroundColor: pathName === "/projects" ? "#fdba8c" : "",
                }}
              >
                Projects
              </SidebarItem>
              <SidebarItem
                icon={FaUsers}
                href="/users"
                style={{
                  color: pathName === "/users" ? "#3f83f8" : "#ffffff",
                  backgroundColor: pathName === "/users" ? "#fdba8c" : "",
                }}
              >
                Users
              </SidebarItem>
              <SidebarItem icon={FaFileMedical}>
                <button
                  onClick={() => {
                    setOpen(true);
                  }}
                  className="text-white"
                >
                  Create Task
                </button>
              </SidebarItem>
            </SidebarItemGroup>
            <SidebarItemGroup>
              <SidebarItem icon={FaRegCircleUser}>Profile</SidebarItem>
            </SidebarItemGroup>
            <SidebarItemGroup>
              <SidebarItem icon={HiLogout}>Sign out</SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </Drawer>
      <AntdDrawer
        title={
          <div className="flex items-center space-x-3">
            <FaFileMedical className="text-xl" />
            <span className="text-xl">Create Task</span>
          </div>
        }
        onClose={() => setOpen(false)}
        open={open}
        placement="left"
        closable={false}
        footer={
          <div className="flex justify-end space-x-3">
            <AntdButton onClick={() => setOpen(false)}>Cancel</AntdButton>
            <AntdButton onClick={() => setOpen(false)} type="primary">
              Create
            </AntdButton>
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
            label="Priority"
            name="priority"
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
            label="Task type"
            name="taskType"
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
            label="Assigners"
            name="assigners"
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

          <Form.Item label={null}>
            <AntdButton
              onClick={() => setOpen(false)}
              type="default"
              className="bg-gray-300"
            >
              Cancel
            </AntdButton>
            <AntdButton
              onClick={() => setOpen(false)}
              type="primary"
              htmlType="submit"
              className="mx-3"
            >
              Create
            </AntdButton>
          </Form.Item>
        </Form>
      </AntdDrawer>
    </nav>
  );
}
