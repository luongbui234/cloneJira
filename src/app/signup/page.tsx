"use client";

import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { FaFacebook, FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";

export default function SignupPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <form className="flex flex-col gap-4">
        <div className="text-center">
          <Label color="#fff" className="text-2xl">
            SIGN UP
          </Label>
        </div>
        <div>
          <TextInput
            icon={HiOutlineMail}
            id="email1"
            type="email"
            placeholder="email"
            required
          />
        </div>
        <div>
          <TextInput
            icon={HiOutlineLockClosed}
            id="password1"
            type="password"
            placeholder="password"
            required
          />
        </div>
        <div>
          <TextInput
            icon={FaRegCircleUser}
            id="name"
            type="text"
            placeholder="name"
            required
          />
        </div>
        <div>
          <TextInput
            icon={AiOutlinePhone}
            id="phone"
            type="text"
            placeholder="phone number"
            required
          />
        </div>
        <Button type="submit">Sign up</Button>
        <Label color="#fff">Already have an account? Login now</Label>
      </form>
      <button className="m-2">
        <FaFacebook className="text-3xl text-blue-500" />
      </button>
    </div>
  );
}
