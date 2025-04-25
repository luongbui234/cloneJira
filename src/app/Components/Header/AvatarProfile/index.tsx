import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps } from "antd";
import React from "react";

interface Props {
  handleSignout: () => void;
}

export default function AvatarProfileComponent({ handleSignout }: Props) {
  const items: MenuProps["items"] = [
    {
      key: 1,
      label: "Bui Van Luong",
    },
    {
      type: "divider",
    },
    {
      key: 2,
      icon: <UserOutlined />,
      label: "Profile",
    },
    {
      type: "divider",
    },
    {
      key: 3,
      icon: <LogoutOutlined />,
      label: <span onClick={handleSignout}>Sign out</span>,
    },
  ];

  return (
    <Dropdown menu={{ items, selectable: true }} placement="bottomRight">
      <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
    </Dropdown>
  );
}
