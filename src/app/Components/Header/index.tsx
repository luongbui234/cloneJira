"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import MenuSideBarComponent from "./MenuSidebar";
import CreateTaskSidebarComponent from "./CreateTaskSidebar";
import AvatarProfileComponent from "./AvatarProfile";
import MenuIconComponent from "./MenuIcon";

export default function HeaderComponents() {
  const [isOpen, setIsOpen] = useState(false);

  const [open, setOpen] = useState(false);

  const pathName = usePathname();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <nav className="p-3 bg-orange-300 flex justify-between">
      <div className="flex items-center gap-2">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8"
          alt="Flowbite Logo"
        />
        <span>JIRA</span>
      </div>
      <MenuIconComponent handleOpen={handleOpen} />
      <div className="content-center hidden desktop:block">
        <ul className="flex gap-5 items-center">
          <li>
            <Link
              href="/projects"
              className={`${
                pathName.includes("/projects") ? "text-blue-500" : "text-white"
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/users"
              className={`${
                pathName === "/users" ? "text-blue-500" : "text-white"
              }`}
            >
              Users
            </Link>
          </li>
          <li onClick={showDrawer} className="text-white cursor-pointer">
            Create Task
          </li>
          <li>
            <AvatarProfileComponent />
          </li>
        </ul>
      </div>
      <MenuSideBarComponent
        isOpen={isOpen}
        handleClose={handleClose}
        showDrawer={showDrawer}
      />
      <CreateTaskSidebarComponent open={open} onClose={onClose} />
    </nav>
  );
}
