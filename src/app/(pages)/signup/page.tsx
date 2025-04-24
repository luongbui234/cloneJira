"use client";

import { Signin } from "@/app/types/signin";
import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa6";

export default function SignupPage() {
  const handleSignup = (value: Signin) => {
    console.log(value);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Form name="signup" onFinish={handleSignup} autoComplete="off">
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
