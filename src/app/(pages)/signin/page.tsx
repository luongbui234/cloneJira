"use client";

import SigninFormComponent from "@/app/Components/SigninForm";
import { signinService } from "@/app/services/userService";
import { Signin } from "@/app/types/signin";
import { setMe } from "@/redux/meSlice";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

export default function SigninPage() {
  const dispatch = useDispatch();

  const router = useRouter();

  const handleSignin = async (data: Signin) => {
    const action = await signinService(data);
    dispatch(setMe(action.content));
    const meJson = JSON.stringify(action.content);
    localStorage.setItem("ME", meJson);
    router.push("/projects");
  };

  return (
    <div className="flex justify-between w-full h-screen">
      <div className="hidden desktop:block w-1/2 content-center">
        <img src="/signin.png" alt="" />
      </div>
      <div className="w-full desktop:w-1/2 flex flex-col justify-center items-center">
        <SigninFormComponent handleSignin={handleSignin} />
      </div>
    </div>
  );
}
