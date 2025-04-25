import {
  FileAddOutlined,
  FolderOutlined,
  LogoutOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Divider, Drawer } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  isMenuOpen: boolean;
  handleMenuClose: () => void;
  handleCreateTaskOpen: () => void;
  handleSignout: () => void;
}

export default function MenuSideBarComponent({
  isMenuOpen,
  handleMenuClose,
  handleCreateTaskOpen,
  handleSignout,
}: Props) {
  const pathName = usePathname();

  return (
    <Drawer title={"Menu"} open={isMenuOpen} onClose={handleMenuClose} footer>
      <div className="space-y-3">
        <Link
          href={"/projects"}
          className={`text-xl block p-2 rounded-lg hover:bg-[#fdba8c] ${
            pathName.includes("/projects")
              ? "text-white bg-[#fdba8c]"
              : "text-black"
          }`}
        >
          <FolderOutlined />
          <span> Projects</span>
        </Link>
        <Link
          href={"/users"}
          className={`text-xl block p-2 rounded-lg hover:bg-[#fdba8c]  ${
            pathName === "/users" ? "text-white bg-[#fdba8c]" : "text-black"
          }`}
        >
          <UserOutlined />
          <span> Users</span>
        </Link>
        <Button
          block
          icon={<FileAddOutlined />}
          type="text"
          className="text-xl block rounded-lg hover:bg-[#fdba8c] text-black"
          onClick={handleCreateTaskOpen}
        >
          <span> Create Task</span>
        </Button>
        <Divider />
        <Link
          href={"/profile"}
          className={`text-xl block p-2 rounded-lg hover:bg-[#fdba8c]  ${
            pathName === "/profile" ? "text-white bg-[#fdba8c]" : "text-black"
          }`}
        >
          <ProfileOutlined />
          <span> Profile</span>
        </Link>
        <Divider />
        <Button
          block
          icon={<LogoutOutlined />}
          type="text"
          className="text-xl rounded-lg hover:[#fdba8c] text-black"
          onClick={handleSignout}
        >
          <span> Sign out</span>
        </Button>
      </div>
    </Drawer>
  );
}
