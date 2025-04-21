import {
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
} from "flowbite-react";
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiLogout } from "react-icons/hi";

interface Props {
  pathName: string;
}

export default function AvatarProfileComponent({ pathName }: Props) {
  return (
    <>
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
        <DropdownHeader>
          <p className="text-gray-400">Bui Van Luong</p>
        </DropdownHeader>
        <DropdownItem
          icon={FaRegCircleUser}
          href="/profile"
          style={{
            color: pathName === "/profile" ? "#3f83f8" : "#ffffff",
            backgroundColor: pathName === "/profile" ? "#fdba8c" : "",
          }}
        >
          Profile
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem icon={HiLogout}>Sign out</DropdownItem>
      </Dropdown>
    </>
  );
}
