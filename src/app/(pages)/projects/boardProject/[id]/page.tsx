"use client";

import BoardTaskComponent from "@/app/Components/BoardTask";
import MembersTaskComponent from "@/app/Components/MembersTask";
import React, { useState } from "react";

export default function BoardProjectPage() {
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);

  const [isEditTaskOpen, setIsEditTaskOpen] = useState(false);

  const handleAddMemberOpen = () => {
    setIsAddMemberOpen(true);
  };

  const handleAddMemberClose = () => {
    setIsAddMemberOpen(false);
  };

  const handleEditTaskOpen = () => {
    setIsEditTaskOpen(true);
  };

  const handleEditTaskClose = () => {
    setIsEditTaskOpen(false);
  };

  return (
    <div className="m-5 space-y-5">
      <div>
        <p className="text-xl font-bold">Board Project</p>
        <MembersTaskComponent
          isAddMemberOpen={isAddMemberOpen}
          handleAddMemberOpen={handleAddMemberOpen}
          handleAddMemberClose={handleAddMemberClose}
        />
      </div>
      <BoardTaskComponent
        isEditTaskOpen={isEditTaskOpen}
        handleEditTaskOpen={handleEditTaskOpen}
        handleEditTaskClose={handleEditTaskClose}
      />
    </div>
  );
}
