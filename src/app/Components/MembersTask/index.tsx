"use client";

import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import React from "react";

export default function MembersTaskComponent() {
  return (
    <div>
      <p>Members: </p>
      <Avatar.Group
        max={{
          count: 2,
          style: { color: "#f56a00", backgroundColor: "#fde3cf" },
        }}
      >
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
        <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
        <Tooltip title="Ant User" placement="top">
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
          />
        </Tooltip>
        <Avatar
          style={{ backgroundColor: "#1677ff" }}
          icon={<AntDesignOutlined />}
        />
      </Avatar.Group>
    </div>
  );
}
