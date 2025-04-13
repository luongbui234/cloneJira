"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function HeaderComponents() {
  const pathName = usePathname();
  console.log("pathName: ", pathName);

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              JIRA
            </span>
          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className={`text-white ${
                    pathName === "/projects" && "text-red-600"
                  }`}
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  href="/users"
                  className={`text-white ${
                    pathName === "/about" && "text-red-600"
                  }`}
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className={`text-white ${
                    pathName === "/news" && "text-red-600"
                  }`}
                >
                  Create Task
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
