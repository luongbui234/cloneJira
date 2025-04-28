"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import MenuSideBarComponent from "./MenuSidebar";
import CreateTaskSidebarComponent from "./CreateTaskSidebar";
import AvatarProfileComponent from "./AvatarProfile";
import MenuIconComponent from "./MenuIcon";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { Button } from "antd";

export default function HeaderComponents() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);

  const pathName = usePathname();

  const router = useRouter();

  const [isClient, setIsClient] = useState(false);

  const { me } = useSelector((state: RootState) => {
    return state.me;
  });

  useEffect(() => {
    setIsClient(true); // Đánh dấu là client-side sau khi component mount
  }, []);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleCreateTaskOpen = () => {
    setIsCreateTaskOpen(true);
  };

  const handleCreateTaskClose = () => {
    setIsCreateTaskOpen(false);
  };

  const handleSignout = () => {
    router.push("/signin");
    window.location.href = "/signin";
    localStorage.removeItem("ME");
  };

  return isClient && me ? (
    <nav className="p-3 bg-orange-300 flex justify-between">
      <Button type="text" href="/projects">
        <img src="/Jira_Logo.svg.png" className="h-8" alt="Jira Logo" />
      </Button>
      <MenuIconComponent handleMenuOpen={handleMenuOpen} />
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
          <li
            onClick={handleCreateTaskOpen}
            className="text-white cursor-pointer"
          >
            Create Task
          </li>
          <li>
            <AvatarProfileComponent me={me} handleSignout={handleSignout} />
          </li>
        </ul>
      </div>
      <MenuSideBarComponent
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
        handleCreateTaskOpen={handleCreateTaskOpen}
        handleSignout={handleSignout}
      />
      <CreateTaskSidebarComponent
        isCreateTaskOpen={isCreateTaskOpen}
        handleCreateTaskClose={handleCreateTaskClose}
      />
    </nav>
  ) : null;
}
