import { DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React from "react";

interface Props {
  isRemoveOpen: boolean;
  handleRemoveTaskOpen: () => void;
  handleRemoveTaskClose: () => void;
  handleRemoveTask: (taskId: number) => void;
  taskId: number;
}

export default function DeleteTaskComponent({
  isRemoveOpen,
  handleRemoveTaskOpen,
  handleRemoveTaskClose,
  handleRemoveTask,
  taskId,
}: Props) {
  return (
    <>
      <DeleteOutlined
        onClick={handleRemoveTaskOpen}
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
        open={isRemoveOpen}
        onCancel={handleRemoveTaskClose}
        onOk={() => handleRemoveTask(taskId)}
        okType={"danger"}
      >
        You&apos;re about to permanently delete this issue, its comments and
        attachments, and all of its data. If you&apos;re not sure, you can
        resolve or close this issue instead.
      </Modal>
    </>
  );
}
