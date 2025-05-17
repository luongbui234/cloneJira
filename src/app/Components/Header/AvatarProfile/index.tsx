import { Me } from "@/app/types/me";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps } from "antd";
import Link from "next/link";
import React from "react";

interface Props {
  me: Me;
  handleSignout: () => void;
}

export default function AvatarProfileComponent({ me, handleSignout }: Props) {
  const items: MenuProps["items"] = [
    {
      key: 1,
      label: me.name,
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: 2,
      icon: <UserOutlined />,
      label: <Link href={"/profile"}>Profile</Link>,
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
    <Dropdown
      menu={{ items, selectable: true }}
      placement="bottomRight"
      className="cursor-pointer"
    >
      <Avatar src={me.avatar} />
    </Dropdown>
  );
}
