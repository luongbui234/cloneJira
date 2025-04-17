"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  Drawer,
  DrawerHeader,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import {
  FaBars,
  FaFileMedical,
  FaFolder,
  FaRegCircleUser,
  FaUsers,
} from "react-icons/fa6";
import { HiLogout } from "react-icons/hi";

export default function HeaderComponents() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const pathName = usePathname();

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
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        type="button"
        className="block desktop:hidden px-2 rounded-md bg-green-500"
      >
        <FaBars />
      </button>
      <div className="content-center hidden desktop:block">
        <ul className="flex gap-5 items-center">
          <li>
            <Link
              href="/projects"
              className={`${
                pathName === "/projects"
                  ? "text-blue-500"
                  : pathName === "/projects/createProject"
                  ? "text-blue-500"
                  : "text-white"
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
          <li>
            <Link
              href="/createTask"
              className={`${
                pathName === "/createTask" ? "text-blue-500" : "text-white"
              }`}
            >
              Create Task
            </Link>
          </li>
          <li>
            <Dropdown
              trigger="hover"
              arrowIcon={false}
              renderTrigger={() => (
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://flowbite.com/docs/images/logo.svg"
                  alt="Rounded avatar"
                />
              )}
            >
              <DropdownHeader>Bui Van Luong</DropdownHeader>
              <DropdownItem icon={FaRegCircleUser}>Profile</DropdownItem>
              <DropdownDivider />
              <DropdownItem icon={HiLogout}>Sign out</DropdownItem>
            </Dropdown>
          </li>
        </ul>
      </div>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="right"
        className="fixed top-0 right-0 h-screen desktop:hidden"
      >
        <DrawerHeader title="Bui Van Luong" titleIcon={FaBars} />
        <Sidebar>
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem
                icon={FaFolder}
                href="/projects"
                style={{
                  color: pathName === "/projects" ? "#3f83f8" : "#ffffff",
                  backgroundColor: pathName === "/projects" ? "#fdba8c" : "",
                }}
              >
                Projects
              </SidebarItem>
              <SidebarItem
                icon={FaUsers}
                href="/users"
                style={{
                  color: pathName === "/users" ? "#3f83f8" : "#ffffff",
                  backgroundColor: pathName === "/users" ? "#fdba8c" : "",
                }}
              >
                Users
              </SidebarItem>
              <SidebarItem
                icon={FaFileMedical}
                href="/createTask"
                style={{
                  color: pathName === "/createTask" ? "#3f83f8" : "#ffffff",
                  backgroundColor: pathName === "/createTask" ? "#fdba8c" : "",
                }}
              >
                Create Task
              </SidebarItem>
            </SidebarItemGroup>
            <SidebarItemGroup>
              <SidebarItem icon={FaRegCircleUser}>Profile</SidebarItem>
            </SidebarItemGroup>
            <SidebarItemGroup>
              <SidebarItem icon={HiLogout}>Sign out</SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </Drawer>
    </nav>
  );
}
