import BoardTaskComponent from "@/app/Components/BoardTask";
import MembersTaskComponent from "@/app/Components/MembersTask";
import React from "react";

export default function BoardProjectPage() {
  return (
    <div className="m-5 space-y-5">
      <div>
        <p className="text-xl font-bold">Board Project</p>
        <MembersTaskComponent />
      </div>
      <BoardTaskComponent />
    </div>
  );
}
