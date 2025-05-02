"use client";

import { PlusOutlined } from "@ant-design/icons";
import { Avatar, Button, Tooltip } from "antd";
import React, { useEffect } from "react";
import AddMemberToProjectComponent from "../AddMemberToProject";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { getProjectDetailService } from "@/app/services/projectService";
import { setDetailProject, setListUserNotYetAdded } from "@/redux/projectSlice";
import { getUserService } from "@/app/services/userService";

interface Props {
  isAddMemberOpen: boolean;
  handleAddMemberOpen: () => void;
  handleAddMemberClose: () => void;
}

export default function MembersTaskComponent({
  isAddMemberOpen,
  handleAddMemberOpen,
  handleAddMemberClose,
}: Props) {
  const dispatch = useDispatch();

  const params = useParams();

  const { id } = params;

  const { membersProject } = useSelector((state: RootState) => {
    return state.project;
  });

  useEffect(() => {
    (async () => {
      const actionDetail = await getProjectDetailService(id);
      dispatch(setDetailProject(actionDetail.content));
      const actionUsers = await getUserService(undefined);
      dispatch(setListUserNotYetAdded(actionUsers.content));
    })();
  }, []);

  return (
    <div>
      <p>Members: </p>
      <div className="flex gap-1">
        <Avatar.Group
          max={{
            count: 2,
            style: { color: "#f56a00", backgroundColor: "#fde3cf" },
          }}
        >
          {membersProject.map((member, index) => {
            return (
              <Tooltip key={index} title={member.name} placement="top">
                <Avatar src={member.avatar} />
              </Tooltip>
            );
          })}
        </Avatar.Group>
        <Button shape="circle" onClick={handleAddMemberOpen}>
          <PlusOutlined />
        </Button>
      </div>
      <AddMemberToProjectComponent
        id={id}
        isAddMemberOpen={isAddMemberOpen}
        handleAddMemberClose={handleAddMemberClose}
      />
    </div>
  );
}
