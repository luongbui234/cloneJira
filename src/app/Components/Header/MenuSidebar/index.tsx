import {
  Drawer,
  DrawerHeader,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaBars,
  FaFileMedical,
  FaFolder,
  FaRegCircleUser,
  FaUsers,
} from "react-icons/fa6";
import { HiLogout } from "react-icons/hi";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  showDrawer: () => void;
}

export default function MenuSideBarComponent({
  isOpen,
  handleClose,
  showDrawer,
}: Props) {
  const pathName = usePathname();

  return (
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
            <SidebarItem icon={FaFileMedical}>
              <button onClick={showDrawer} className="text-white">
                Create Task
              </button>
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
  );
}
