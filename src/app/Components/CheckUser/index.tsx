"use client";

import { RootState } from "@/app/store/store";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";

export default function CheckUserComponent({
  children,
}: {
  children: ReactNode;
}) {
  const { me } = useSelector((state: RootState) => {
    return state.me;
  });

  const urlPages: string[] = ["/projects", "users", "profile"];

  const pathName = usePathname();

  const router = useRouter();

  useEffect(() => {
    if (!me) {
      urlPages.map((url) => {
        if (pathName.includes(url)) {
          return router.push("/signin");
        }
      });
    }
  }, [me]);

  return <>{children}</>;
}
