"use client";

import { RootState } from "@/app/store/store";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";

export default function CheckUser({ children }: { children: ReactNode }) {
  const { me } = useSelector((state: RootState) => {
    return state.me;
  });

  const pathName = usePathname();

  const router = useRouter();

  useEffect(() => {
    const urlPages: string[] = ["/projects", "users", "profile"];

    if (!me) {
      urlPages.map((url) => {
        if (pathName.includes(url)) {
          return router.push("/signin");
        }
      });
    }
  }, [me, pathName, router]);

  return <>{children}</>;
}
