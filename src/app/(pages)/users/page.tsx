"use client";

import UsersTableComponent from "@/app/Components/UsersTable";
import React, { useState } from "react";

export default function UsersPage() {
  const [isEditUserOpen, setIsEditUserOpen] = useState(false);

  const handleEditUserOpen = () => {
    setIsEditUserOpen(true);
  };

  const handleEditUserClose = () => {
    setIsEditUserOpen(false);
  };

  return (
    <div className="m-5 space-y-5">
      <p className="text-2xl font-bold">Users</p>
      <UsersTableComponent
        isEditUserOpen={isEditUserOpen}
        handleEditUserOpen={handleEditUserOpen}
        handleEditUserClose={handleEditUserClose}
      />
    </div>
  );
}
