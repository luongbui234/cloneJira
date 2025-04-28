import { RootState } from "@/app/store/store";
import { User } from "@/app/types/user";
import { Form, Input, Modal } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

interface Props {
  isEditUserOpen: boolean;
  handleEditUserClose: () => void;
  handleUpdateUser: (data: User) => void;
}

export default function EditUserComponent({
  isEditUserOpen,
  handleEditUserClose,
  handleUpdateUser,
}: Props) {
  const [form] = Form.useForm();

  const { editUser } = useSelector((state: RootState) => {
    return state.user;
  });

  useEffect(() => {
    form.setFieldsValue({
      id: editUser.userId,
      email: editUser.email,
      passWord: "",
      passwordConfirmation: "",
      name: editUser.name,
      phoneNumber: editUser.phoneNumber,
    });
  }, [form, editUser]);

  return (
    <Modal
      title={"Edit User"}
      centered
      open={isEditUserOpen}
      onOk={form.submit}
      onCancel={handleEditUserClose}
    >
      <Form
        form={form}
        name="basic"
        layout="vertical"
        onFinish={handleUpdateUser}
        className="w-full"
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
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="passWord"
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
      </Form>
    </Modal>
  );
}
