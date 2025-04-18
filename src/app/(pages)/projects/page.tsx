import React from "react";
import { Button } from "antd";
import Link from "next/link";
import ProjectsTableComponent from "@/app/Components/ProjectsTable";
import ProjectsSearchComponent from "@/app/Components/ProjectsSearch";

export default function ProjectsPage() {
  return (
    <div className="m-5 space-y-5">
      <div className="flex justify-between">
        <p className="text-2xl font-bold">Projects</p>
        <Button type="primary">
          <Link href={"/projects/createProject"}>Create Project</Link>
        </Button>
      </div>
      <ProjectsSearchComponent />
      <ProjectsTableComponent />
    </div>
  );
}
