"use client";

import { DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";

export default function DeleteTaskComponent() {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <>
      <DeleteOutlined
        onClick={() => setIsDeleteOpen(true)}
        className="text-3xl text-red-500 cursor-pointer"
      />
      <Modal
        title={
          <>
            <QuestionCircleOutlined className="text-red-500 mx-2" />
            Delete this task?
          </>
        }
        centered
        open={isDeleteOpen}
        onCancel={() => setIsDeleteOpen(false)}
        onOk={() => setIsDeleteOpen(false)}
        okType={"danger"}
      >
        You&apos;re about to permanently delete this issue, its comments and
        attachments, and all of its data.If you&apos;re not sure, you can
        resolve or close this issue instead.
      </Modal>
    </>
  );
}
