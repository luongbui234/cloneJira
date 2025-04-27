"use client";

import { updateUserService } from "@/app/services/userService";
import { RootState } from "@/app/store/store";
import { UpdateUser } from "@/app/types/user";
import { Avatar, Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export default function ProfilePage() {
  const { me } = useSelector((state: RootState) => {
    return state.me;
  });

  const router = useRouter();

  const handleUpdateUser = async (data: UpdateUser) => {
    const action = await updateUserService(data);
    if (action.statusCode === 200) {
      router.push("/signin");
      window.location.href = "/signin";
      localStorage.removeItem("ME");
      toast.success("Update successfully");
    } else {
      toast.error(action.message);
    }
  };

  return (
    <div className="flex flex-wrap ipad:flex-nowrap justify-center gap-10 mt-5">
      <div className="text-center">
        <Avatar className="size-40" src={me.avatar} />
        <p className="text-2xl font-bold">{me.name}</p>
      </div>
      <Form
        name="basic"
        layout="vertical"
        onFinish={handleUpdateUser}
        className="w-full ipad:w-2/5 border rounded-md p-2"
        initialValues={{
          id: me.id,
          email: me.email,
          name: me.name,
          phoneNumber: me.phoneNumber,
        }}
      >
        <Form.Item
          label="ID"
          name="id"
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
          <Input type="number" />
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
