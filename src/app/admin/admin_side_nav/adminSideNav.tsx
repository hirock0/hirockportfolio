"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const AdminSideNav = () => {
  const pathName = usePathname();
  const [scrollflag, setScrollflag] = useState(false);
  const windowScroll = () => {
    const mainNavdiv = document.querySelector(".mainBody") as HTMLElement;
    window.addEventListener("scroll", (e: any) => {
      const clientheight = mainNavdiv.getBoundingClientRect().top;
      if (clientheight < -100) {
        setScrollflag(true);
      } else {
        setScrollflag(false);
      }
    });
  };

  useEffect(() => {
    windowScroll();
  }, [scrollflag]);

  return (
    <div
      className={`MenuLineDiv z-50 h-full fixed top-0 w-52 mt-24 md:hidden -translate-x-full ${
        pathName == "/admin"
          ? "backdrop:filter backdrop-blur-3xl bg-zinc-800/80 opacity-100"
          : "backdrop:filter backdrop-blur-3xl opacity-100 "
      }`}
      style={{ transition: " .5s ease-in-out" }}
    >
      <ul className=" flex flex-col gap-5 p-5">
        {pathName == "/admin" ? (
          <Link href={"/"}>
            <li className=" hover:underline hover:underline-offset-4">Home</li>
          </Link>
        ) : (
          <Link href={"/admin"}>
            <li className=" hover:underline hover:underline-offset-4">
              Admin Home
            </li>
          </Link>
        )}
        <div className="flex flex-col gap-5 ">
          <Link href={"/admin/home_page_projects"}>
            <li className=" hover:underline hover:underline-offset-4">
              Add Home Projects
            </li>
          </Link>
          <Link href={"/admin/about_page_samples"}>
            <li className=" hover:underline hover:underline-offset-4">
              Add About Projects
            </li>
          </Link>
        </div>
      </ul>
    </div>
  );
};
