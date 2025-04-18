import React from "react";
import { FaBars } from "react-icons/fa6";

interface Props {
  handleOpen: () => void;
}

export default function MenuIconComponent({ handleOpen }: Props) {
  return (
    <button
      onClick={handleOpen}
      className="block desktop:hidden px-2 rounded-md bg-green-500 text-white"
    >
      <FaBars />
    </button>
  );
}
