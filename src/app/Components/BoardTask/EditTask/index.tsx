"use client";

import {
  BugOutlined,
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  FileOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Input, List, Modal, Select } from "antd";
import React from "react";
import DetailFormComponent from "./DetailForm";
import DeleteTaskComponent from "./DeleteTask";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
const { TextArea } = Input;

interface Props {
  isEditTaskOpen: boolean;
  handleEditTaskClose: () => void;
  handleUpdateType: (typeId: number) => void;
  isRemoveOpen: boolean;
  handleRemoveTaskOpen: () => void;
  handleRemoveTaskClose: () => void;
  handleRemoveTask: (taskID: number) => void;
  isNameTaskOpen: boolean;
  handleNameTaskOpen: () => void;
  handleNameTaskClose: () => void;
  handleChangeNameTask: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateNameTask: () => void;
  isDescTaskOpen: boolean;
  handleDescTaskOpen: () => void;
  handleDescTaskClose: () => void;
  handleChangeDesc: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleUpdateDescription: () => void;
  valueComment: string;
  handleChangeComment: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInsertComment: () => void;
  handleEditCommentOpen: (idComment: number, commentContent: string) => void;
  handleEditCommentClose: () => void;
  valueIdComment: number;
  handleChangeEditComment: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleUpdateComment: () => void;
  handleDeleteComment: (idComment: number) => void;
  handleUpdateStatus: (statusId: string) => void;
  handleAssignUserTask: (userId: number) => void;
  handleRemoveUserTask: (userId: number) => void;
  handleUpdatePriority: (priorityId: number) => void;
  isEstimateOpen: boolean;
  handleEstimateOpen: () => void;
  handleEstimateClose: () => void;
  valueEstimate: number | string;
  handleChangeEstimate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateEstimate: () => void;
  valueTimeSpent: number | string;
  handleChangeTimeSpent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateTimeSpent: () => void;
}

export default function EditTaskComponent({
  isEditTaskOpen,
  handleEditTaskClose,
  handleUpdateType,
  isRemoveOpen,
  handleRemoveTaskOpen,
  handleRemoveTaskClose,
  handleRemoveTask,
  isNameTaskOpen,
  handleNameTaskOpen,
  handleNameTaskClose,
  handleChangeNameTask,
  handleUpdateNameTask,
  isDescTaskOpen,
  handleDescTaskOpen,
  handleDescTaskClose,
  handleChangeDesc,
  handleUpdateDescription,
  valueComment,
  handleChangeComment,
  handleInsertComment,
  handleEditCommentOpen,
  handleEditCommentClose,
  valueIdComment,
  handleChangeEditComment,
  handleUpdateComment,
  handleDeleteComment,
  handleUpdateStatus,
  handleAssignUserTask,
  handleRemoveUserTask,
  handleUpdatePriority,
  isEstimateOpen,
  handleEstimateOpen,
  handleEstimateClose,
  valueEstimate,
  handleChangeEstimate,
  handleUpdateEstimate,
  valueTimeSpent,
  handleChangeTimeSpent,
  handleUpdateTimeSpent,
}: Props) {
  const { me } = useSelector((state: RootState) => {
    return state.me;
  });

  const { typeTask, statusTask, detailTask } = useSelector(
    (state: RootState) => {
      return state.task;
    }
  );

  const dataComment = () => {
    const comments = detailTask.lstComment.map((comment, index) => {
      return {
        key: index,
        id: comment.id,
        title: comment.name,
        avatar: comment.avatar,
        commentContent: comment.commentContent,
      };
    });
    return comments.reverse();
  };
  return (
    <Modal
      title={
        <div className="flex justify-between">
          <Select
            onChange={handleUpdateType}
            className="w-32"
            value={detailTask.typeId}
            options={typeTask.map((type, index) => {
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
            })}
          />
          <div className="space-x-2">
            <DeleteTaskComponent
              isRemoveOpen={isRemoveOpen}
              handleRemoveTaskOpen={handleRemoveTaskOpen}
              handleRemoveTaskClose={handleRemoveTaskClose}
              handleRemoveTask={handleRemoveTask}
              taskId={detailTask.taskId}
            />
            <CloseOutlined
              onClick={handleEditTaskClose}
              className="text-3xl cursor-pointer"
            />
          </div>
        </div>
      }
      closable={false}
      footer
      centered
      width={1000}
      open={isEditTaskOpen}
      onCancel={handleEditTaskClose}
    >
      <div className="flex gap-3 flex-wrap ipad:flex-nowrap">
        <div className="w-full space-y-3">
          {isNameTaskOpen ? (
            <div className="flex flex-wrap justify-end gap-1 border p-1">
              <Input
                onChange={handleChangeNameTask}
                autoFocus={isNameTaskOpen}
                defaultValue={detailTask.taskName}
              />
              <Button
                onClick={handleUpdateNameTask}
                icon={<CheckOutlined />}
                type="primary"
              />
              <Button onClick={handleNameTaskClose} icon={<CloseOutlined />} />
            </div>
          ) : (
            <p
              onClick={handleNameTaskOpen}
              className="hover:bg-gray-300 text-2xl font-semibold"
            >
              {detailTask.taskName}
            </p>
          )}

          <div className="space-y-2">
            <p className="font-bold">Description</p>
            {isDescTaskOpen ? (
              <div className="flex flex-wrap justify-end gap-1 border p-1">
                <TextArea
                  onChange={handleChangeDesc}
                  autoFocus={isDescTaskOpen}
                  defaultValue={detailTask.description}
                  placeholder="Add a descriptions..."
                />
                <Button
                  onClick={handleUpdateDescription}
                  icon={<CheckOutlined />}
                  type="primary"
                />
                <Button
                  onClick={handleDescTaskClose}
                  icon={<CloseOutlined />}
                />
              </div>
            ) : (
              <p onClick={handleDescTaskOpen} className="hover:bg-gray-300">
                {detailTask.description || "Add a descriptions..."}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <p>Comments</p>
            <div className="flex gap-2">
              <Avatar src={me.avatar} />
              <Input
                onChange={handleChangeComment}
                value={valueComment}
                placeholder="Add a comment..."
              />
              <Button type="dashed" onClick={handleInsertComment}>
                <SendOutlined />
              </Button>
            </div>
            <List
              className="h-96 overflow-auto border px-2"
              dataSource={dataComment()}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    valueIdComment === item.id ? (
                      <Button type="primary" onClick={handleUpdateComment}>
                        <CheckOutlined />
                      </Button>
                    ) : (
                      <Button
                        type="primary"
                        onClick={() =>
                          handleEditCommentOpen(item.id, item.commentContent)
                        }
                      >
                        <EditOutlined />
                      </Button>
                    ),
                    valueIdComment === item.id ? (
                      <Button danger onClick={handleEditCommentClose}>
                        <CloseOutlined />
                      </Button>
                    ) : (
                      <Button
                        danger
                        onClick={() => handleDeleteComment(item.id)}
                      >
                        <DeleteOutlined />
                      </Button>
                    ),
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<p className="font-bold">{item.title}</p>}
                    description={
                      valueIdComment === item.id ? (
                        <TextArea
                          onChange={handleChangeEditComment}
                          defaultValue={item.commentContent}
                        />
                      ) : (
                        item.commentContent
                      )
                    }
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
        <div className="w-full space-y-3">
          <Select
            onChange={handleUpdateStatus}
            className="w-60"
            value={detailTask.statusId}
            options={statusTask.map((status, index) => {
              return {
                key: index,
                label: status.statusName,
                value: status.statusId,
              };
            })}
          />
          <DetailFormComponent
            handleAssignUserTask={handleAssignUserTask}
            handleRemoveUserTask={handleRemoveUserTask}
            handleUpdatePriority={handleUpdatePriority}
            isEstimateOpen={isEstimateOpen}
            handleEstimateOpen={handleEstimateOpen}
            handleEstimateClose={handleEstimateClose}
            valueEstimate={valueEstimate}
            handleChangeEstimate={handleChangeEstimate}
            handleUpdateEstimate={handleUpdateEstimate}
            valueTimeSpent={valueTimeSpent}
            handleChangeTimeSpent={handleChangeTimeSpent}
            handleUpdateTimeSpent={handleUpdateTimeSpent}
          />
        </div>
      </div>
    </Modal>
  );
}
