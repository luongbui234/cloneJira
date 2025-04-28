"use client";

import UsersTableComponent from "@/app/Components/UsersTable";
import {
  deleteUserService,
  getUserService,
  updateUserService,
} from "@/app/services/userService";
import { setEditUser, setListUser } from "@/redux/userSlice";
import { Input } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import _ from "lodash";
import { User } from "@/app/types/user";
import toast from "react-hot-toast";
const { Search } = Input;

export default function UsersPage() {
  const [isEditUserOpen, setIsEditUserOpen] = useState(false);

  const [textSearch, setTextSearch] = useState("");

  const dispatch = useDispatch();

  const getUserKeyword = async (keyword: string | number | undefined) => {
    const action = await getUserService(keyword);
    return dispatch(setListUser(action.content));
  };

  const handleEditUserOpen = async (id: number) => {
    const action = await getUserService(id);
    dispatch(setEditUser(action.content[0]));
    setIsEditUserOpen(true);
  };

  const handleEditUserClose = () => {
    setIsEditUserOpen(false);
  };

  const handleUpdateUser = async (data: User) => {
    const action = await updateUserService(data);
    if (action.statusCode === 200) {
      getUserKeyword(textSearch);
      setIsEditUserOpen(false);
      toast.success("Update user successfully");
    } else {
      toast.error(action.message);
    }
  };

  const handleDeleteUser = async (id: number) => {
    const action = await deleteUserService(id);
    if (action.statusCode === 200) {
      getUserKeyword(textSearch);
      toast.success("Delete user successfully");
    } else {
      toast.error(action.message);
    }
  };

  useEffect(() => {
    (async () => {
      getUserKeyword(undefined);
    })();
  }, []);

  const renderListUser = _.debounce(async (keyword: string) => {
    getUserKeyword(keyword);
  }, 500);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputSearch = e.target.value;
    renderListUser(inputSearch);
    setTextSearch(inputSearch);
  };

  return (
    <div className="m-5 space-y-5">
      <p className="text-2xl font-bold">Users</p>

      <Search
        onChange={handleSearch}
        allowClear
        enterButton
        size="middle"
        className="w-auto"
      />
      <UsersTableComponent
        isEditUserOpen={isEditUserOpen}
        handleEditUserOpen={handleEditUserOpen}
        handleEditUserClose={handleEditUserClose}
        handleUpdateUser={handleUpdateUser}
        handleDeleteUser={handleDeleteUser}
      />
    </div>
  );
}
