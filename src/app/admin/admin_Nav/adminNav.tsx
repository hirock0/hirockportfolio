"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const AdminNav = () => {
  const ref: any = useRef();
  const pathName = usePathname();
  const router = useRouter();
  const [menuline, setMenuLine] = useState(false);
  const [logoutToggle, setLogoutToggle] = useState(false);
  const [loggedadmin, setLoggedadmin] = useState<any>({});
  const onAdminLogout = async () => {
    const logout = await axios.get("/pages/api/admin/logout");
    if (logout.data.success) {
      toast.success("Logout successfull");
      router.push("/admin/admin_login");
      setLogoutToggle(true)
      router.refresh();
    } else {
      toast.success("Something went wrong!");
    }
  };
  const onMenuBtn = useCallback(() => {
    const menulineDiv = document.querySelector(".MenuLineDiv") as HTMLElement;
    if (!menuline) {
      menulineDiv.style.transform = `translateX(${0}%)`;
      setMenuLine(() => !menuline);
    } else {
      menulineDiv.style.transform = `translateX(${-100}%)`;
      setMenuLine(() => !menuline);
    }
  }, [menuline]);

  const WindowEvent = () => {
    const menulineDiv = document.querySelector(".MenuLineDiv") as HTMLElement;
    const MenuBtn = document.querySelector("#menuBtn") as HTMLElement;
    document.addEventListener("click", (e: any) => {
      if (!menulineDiv.contains(e.target) && !MenuBtn.contains(e.target)) {
        menulineDiv.style.transform = `translateX(${-100}%)`;
        setMenuLine(false);
      }
    });
  };

  const onAdminUser = async () => {
    try {
      const adminloggedUser = await axios.get("/pages/api/admin/signup");
      const loggeduser = adminloggedUser.data.AdminloggedUser;
      setLoggedadmin(loggeduser);
    } catch (error: any) {
      console.log("something went wrong");
    }
  };

  useEffect(() => {
    WindowEvent();
    onAdminUser();
  }, []);

  return (
    <nav
      id="admin_nav"
      ref={ref}
      className={` leading-tight items-center max-sm:text-xs sm:text-sm lg:text-base h-24 backdrop:filter backdrop-blur-3xl bg-zinc-800/80 opacity-100  flex items-cente`}
    >
      <ul className=" flex items-center justify-between w-full pr-10 pl-10 max-sm:pl-5 max-sm:pr-5">
        <li className=" md:hidden flex items-center justify-center">
          <button onClick={onMenuBtn} id="menuBtn">
            <Image
              src={"/all_svg/menu-line.svg"}
              alt="menuline"
              width={25}
              height={25}
            />
          </button>
        </li>

        <div className="  gap-5 hidden md:inline-block md:flex ">
          {pathName == "/admin" ? (
            <Link href={"/"}>
              <li className=" hover:underline hover:underline-offset-4">
                Home
              </li>
            </Link>
          ) : (
            <Link href={"/admin"}>
              <li className=" hover:underline hover:underline-offset-4">
                Admin Home
              </li>
            </Link>
          )}

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

        <li className=" flex items-center">
          <h1 className=" max-sm:w-32">
            Do you want create new account?
            <Link href={"/admin/admin_signup"}>
              <button className=" text-green-600 font-semibold text-base pl-2">
                Click
              </button>
            </Link>
          </h1>
        </li>

        {loggedadmin !== undefined ? (
          <li className=" flex items-center justify-center mt-4">
            <button
              onClick={() => setLogoutToggle(!logoutToggle)}
              className="  h-8 pr rounded-sm w-full "
            >
              <Image
                src={loggedadmin.image}
                alt="admin"
                width={40}
                height={40}
                className=" rounded-full"
              />
            </button>
          </li>
        ) : null}
      </ul>
      {/* logoutpopup_start */}
      <div
        onClick={() => setLogoutToggle(!logoutToggle)}
        className={` h-screen max-sm:p-3 flex items-center justify-center  fixed z-50 top-0 bottom-0   w-full bg-slate-800/80  ${
          !logoutToggle ? " hidden" : "block"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className=" w-3/5 md:w-96 max-sm:w-full p-10 rounded-md backdrop:filter backdrop-blur-3xl "
          style={{ boxShadow: "0 0 5px white" }}
        >
          <h1 className=" text-center text-xl max-sm:text-base">
            Do you want to admin logout?
          </h1>
          <div className=" flex items-center justify-center gap-6 mt-5">
            <button
              className={` w-full sm:w-2/5 h-8 rounded-md bg-green-600 hover:bg-green-700 active:bg-green-900`}
              onClick={() => setLogoutToggle(!logoutToggle)}
            >
              cancel
            </button>
            <button
              onClick={onAdminLogout}
              className="  w-full sm:w-2/5 h-8 rounded-md bg-red-600 hover:bg-red-700 active:bg-red-900"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* logoutpopop_end */}
    </nav>
  );
};
