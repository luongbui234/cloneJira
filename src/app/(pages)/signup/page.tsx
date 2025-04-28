"use client";

import { signupService } from "@/app/services/meService";
import { Signup } from "@/app/types/me";
import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { FaFacebook } from "react-icons/fa6";

export default function SignupPage() {
  const [form] = Form.useForm();
  const handleSignup = async (data: Signup) => {
    const action = await signupService(data);
    if (action.statusCode === 200) {
      toast.success("Signup successfully");
      form.resetFields();
    } else {
      toast.error(action.message);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Form form={form} name="signup" onFinish={handleSignup}>
        <p className="text-2xl text-center m-4">SIGN UP</p>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="email"
            size="large"
            type="email"
          />
        </Form.Item>

        <Form.Item
          name="passWord"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="password"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="name" size="large" />
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input
            type="number"
            prefix={<PhoneOutlined />}
            placeholder="phoneNumber"
            size="large"
          />
        </Form.Item>

        <Form.Item label={null}>
          <Button block type="primary" htmlType="submit">
            Signup
          </Button>
        </Form.Item>
        <p>
          Already have an account?{" "}
          <Link href={"/signin"} className="text-blue-500">
            Signin now
          </Link>
        </p>
      </Form>
      <button className="m-2">
        <FaFacebook className="text-3xl text-blue-500" />
      </button>
    </div>
  );
}
