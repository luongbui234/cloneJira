import { MenuOutlined } from "@ant-design/icons";
import React from "react";

interface Props {
  handleMenuOpen: () => void;
}

export default function MenuIconComponent({ handleMenuOpen }: Props) {
  return (
    <button
      onClick={handleMenuOpen}
      className="block desktop:hidden px-2 rounded-md bg-green-500 text-white"
    >
      <MenuOutlined />
    </button>
  );
}
