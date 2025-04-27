import { Signin } from "@/app/types/user";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa6";

interface Props {
  onFinish: (data: Signin) => void;
}

export default function SigninFormComponent({ onFinish }: Props) {
  return (
    <>
      <Form name="signin" onFinish={onFinish} autoComplete="off">
        <p className="text-2xl text-center m-4">SIGN IN</p>
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

        <Form.Item label={null}>
          <Button block type="primary" htmlType="submit">
            Signin
          </Button>
        </Form.Item>
        <p>
          Don&apos;t have an account yet?{" "}
          <Link href={"/signup"} className="text-blue-500">
            Register now
          </Link>
        </p>
      </Form>
      <button className="m-2">
        <FaFacebook className="text-3xl text-blue-500" />
      </button>
    </>
  );
}
