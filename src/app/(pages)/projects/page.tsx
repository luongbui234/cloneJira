"use client";

import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";
import Link from "next/link";
import ProjectsTableComponent from "@/app/Components/ProjectsTable";
import {
  deleteProjectService,
  getProjectService,
} from "@/app/services/projectService";
import { setListProject } from "@/redux/projectSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import _ from "lodash";
const { Search } = Input;

export default function ProjectsPage() {
  const [textSearch, setTextSearch] = useState("");

  const dispatch = useDispatch();

  const getProjectKeyword = async (keyword: string | number | undefined) => {
    const action = await getProjectService(keyword);
    return dispatch(setListProject(action.content));
  };

  const handleDeleteProject = async (id: number) => {
    const action = await deleteProjectService(id);
    if (action.statusCode === 200) {
      getProjectKeyword(textSearch);
      toast.success("Delete project successfully");
    } else {
      toast.error(action.message);
    }
  };

  useEffect(() => {
    (async () => {
      await getProjectKeyword(undefined);
    })();
  }, []);

  const renderListProject = _.debounce(async (keyword: string) => {
    await getProjectKeyword(keyword);
  }, 500);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputSearch = e.target.value;
    renderListProject(inputSearch);
    setTextSearch(inputSearch);
  };

  return (
    <div className="m-5 space-y-5">
      <div className="flex justify-between">
        <p className="text-2xl font-bold">Projects</p>
        <Button type="primary">
          <Link href={"/projects/createProject"}>Create Project</Link>
        </Button>
      </div>
      <Search
        onChange={handleSearch}
        allowClear
        enterButton
        size="middle"
        className="w-auto"
      />
      <ProjectsTableComponent handleDeleteProject={handleDeleteProject} />
    </div>
  );
}
