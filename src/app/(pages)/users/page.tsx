import UsersTableComponent from "@/app/Components/UsersTable";
import React from "react";

export default function UsersPage() {
  return (
    <div className="m-5 space-y-5">
      <p className="text-2xl font-bold">Users</p>
      <UsersTableComponent />
    </div>
  );
}
