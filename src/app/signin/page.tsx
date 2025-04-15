"use client";

import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";

export default function SigninPage() {
  return (
    <div className="flex justify-between w-full h-screen">
      <div className="hidden desktop:block w-1/2 content-center">
        <img src="/signin.png" alt="" />
      </div>
      <div className="w-full desktop:w-1/2 flex flex-col justify-center items-center">
        <form className="flex flex-col gap-4">
          <div className="text-center">
            <Label color="#fff" className="text-2xl">
              SIGN IN
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
          <Button type="submit">Sign in</Button>
          <Label color="#fff">Don't have an account yet? Register now</Label>
        </form>
        <button className="m-2">
          <FaFacebook className="text-3xl text-blue-500" />
        </button>
      </div>
    </div>
  );
}
