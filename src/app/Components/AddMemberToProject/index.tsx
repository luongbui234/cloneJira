import {
  assignUserProject,
  getProjectDetailService,
  removeUserProject,
} from "@/app/services/projectService";
import { getUserService } from "@/app/services/userService";
import { RootState } from "@/app/store/store";
import { UserProject } from "@/app/types/project";
import { setDetailProject, setListUserNotYetAdded } from "@/redux/projectSlice";
import { Avatar, Button, Input, List, Modal } from "antd";
import _ from "lodash";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
const { Search } = Input;

interface Props {
  id: string | string[] | undefined;
  isAddMemberOpen: boolean;
  handleAddMemberClose: () => void;
}

export default function AddMemberToProjectComponent({
  id,
  isAddMemberOpen,
  handleAddMemberClose,
}: Props) {
  const [textSearch, setTextSearch] = useState("");

  const dispatch = useDispatch();

  const {
    detailProject,
    listUserNotYetAdded: Users,
    membersProject: members,
  } = useSelector((state: RootState) => {
    return state.project;
  });

  const getUserProjectKeyword = async (
    keyword: string | number | undefined
  ) => {
    const actionDetail = await getProjectDetailService(id);
    dispatch(setDetailProject(actionDetail.content));
    const action = await getUserService(keyword);
    dispatch(setListUserNotYetAdded(action.content));
  };

  const renderUserSearch = _.debounce(async (keyword: string | number) => {
    await getUserProjectKeyword(keyword);
  }, 500);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputSearch = e.target.value;
    renderUserSearch(inputSearch);
    setTextSearch(inputSearch);
  };

  const handleAssignUserProject = async (userId: number) => {
    const data: UserProject = { projectId: id, userId: userId };
    const action = await assignUserProject(data);
    if (action.statusCode === 200) {
      await getUserProjectKeyword(textSearch);
      toast.success(action.message);
    } else {
      toast.error(action.message);
    }
  };

  const handleRemoveUserProject = async (userId: number) => {
    const data: UserProject = { projectId: id, userId: userId };
    const action = await removeUserProject(data);
    if (action.statusCode === 200) {
      await getUserProjectKeyword(textSearch);
      toast.success(action.message);
    } else {
      toast.error(action.message);
    }
  };

  const dataNotYetAdded = Users.map((user, index) => {
    return {
      key: index,
      id: user.userId,
      title: user.name,
      avatar: user.avatar,
    };
  });

  const dataAlreadyAdded = members.map((member, index) => {
    return {
      key: index,
      id: member.userId,
      title: member.name,
      avatar: member.avatar,
    };
  });

  return (
    <Modal
      title={
        <div className="">
          <span>ADD MEMBER TO PROJECT </span>
          <p className="text-blue-500 ipad:inline">
            {detailProject.projectName}
          </p>
        </div>
      }
      footer
      centered
      width={1000}
      open={isAddMemberOpen}
      onCancel={handleAddMemberClose}
    >
      <div className="flex justify-between items-center w-full ipad:w-1/2">
        <p>Search user:</p>
        <Search
          onChange={handleSearch}
          allowClear
          enterButton
          size="middle"
          className="w-auto"
        />
      </div>
      <div className="flex justify-between flex-wrap ipad:flex-nowrap gap-5">
        <div className="w-full space-y-2">
          <p className="text-xl">Not yet added</p>
          <List
            className="h-96 overflow-auto border px-2"
            dataSource={dataNotYetAdded}
            renderItem={(item) => (
              <List.Item
                extra={
                  <Button
                    type="primary"
                    onClick={() => handleAssignUserProject(item.id)}
                  >
                    Add
                  </Button>
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={item.title}
                  description={`User ID: ${item.id}`}
                />
              </List.Item>
            )}
          />
        </div>
        <div className="w-full space-y-2">
          <p className="text-xl">Already in project</p>
          <List
            className="h-96 overflow-auto border px-2"
            dataSource={dataAlreadyAdded}
            renderItem={(item) => (
              <List.Item
                extra={
                  <Button
                    danger
                    onClick={() => handleRemoveUserProject(item.id)}
                  >
                    Remove
                  </Button>
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={item.title}
                  description={`User ID: ${item.id}`}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </Modal>
  );
}
