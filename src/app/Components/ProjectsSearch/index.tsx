"use client";

import { Input } from "antd";
import React from "react";
const { Search } = Input;

export default function ProjectsSearchComponent() {
  const onSearch = (value: string) => {
    return console.log(value);
  };

  return (
    <Search
      onSearch={onSearch}
      allowClear
      enterButton
      size="middle"
      className="w-auto"
    />
  );
}
