"use client";

import AddMemberToProjectComponent from "@/app/Components/AddMemberToProject";
import BoardTaskComponent from "@/app/Components/BoardTask";
import MembersTaskComponent from "@/app/Components/MembersTask";
import React, { useState } from "react";

export default function BoardProjectPage() {
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);

  const handleAddMemberOpen = () => {
    setIsAddMemberOpen(true);
  };

  const handleAddMemberClose = () => {
    setIsAddMemberOpen(false);
  };

  return (
    <div className="m-5 space-y-5">
      <div>
        <p className="text-xl font-bold">Board Project</p>
        <MembersTaskComponent handleAddMemberOpen={handleAddMemberOpen} />
        <AddMemberToProjectComponent
          isAddMemberOpen={isAddMemberOpen}
          handleAddMemberClose={handleAddMemberClose}
        />
      </div>
      <BoardTaskComponent />
    </div>
  );
}
