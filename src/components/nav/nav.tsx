"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Style from "./nav.module.css";
import Menuline from "../../../public/all_svg/menu-line.svg";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function Nav() {
  const router = useRouter();
  const [menuFlag, setMenuFlag] = useState(false);
  const onMenuLine = () => {
    const menuLine = document.querySelector(".side_menu") as HTMLElement;
    if (!menuFlag) {
      menuLine.style.transform = `translateX(${0}%)`;
      menuLine.style.padding = "20px";
      menuLine.style.opacity = "1";
      setMenuFlag((prev) => !prev);
    } else {
      menuLine.style.transform = `translateX(${-100}%)`;
      menuLine.style.padding = "0px";
      menuLine.style.opacity = "0";
      setMenuFlag((prev) => !prev);
    }
  };

  // window_part
  const onWindow = () => {
    const menuLine = document.querySelector(".side_menu") as HTMLElement;
    const menuBtn = document.querySelector(".menuBtn") as HTMLElement;
    document.addEventListener("click", (e: any) => {
      if (!menuBtn.contains(e.target) && !menuLine.contains(e.target)) {
        menuLine.style.transform = `translateX(${-100}%)`;
        menuLine.style.padding = "0px";
        menuLine.style.opacity = "0";
        setMenuFlag(false);
      }
    });
  };

  const [loggedUser, setLoggedUser] = useState<any>({});
  const LoggedUserData = async () => {
    try {
      const FetchData = await axios.get("/pages/api/signup");
      const user = FetchData.data.loggedUser;
      setLoggedUser(user);
      router.refresh();
    } catch (error: any) {
      console.log("Something went wrong");
    }
  };

  useEffect(() => {
    onWindow();
    LoggedUserData();
  }, []);

  const pathName = usePathname();
  return (
    <nav
      className={`${
        pathName == "/user/signup" ||
        pathName == "/user/profile" ||
        pathName == "/admin/home_page_projects" ||
        pathName == "/admin" ||
        pathName == "/admin/about_page_samples" ||
        pathName == "/admin/admin_signup"
          ? "invisible"
          : " visible"
      } z-50 fixed top-0 right-0 left-0 h-24 flex items-center justify-between pr-10 pl-10 max-sm:pr-5 max-sm:pl-5 backdrop:filter backdrop-blur-3xl bg-zinc-800/80 text-white`}
    >
      {/* nav_left_section_start */}
      <div>
        <div onClick={onMenuLine} className=" menuBtn cursor-pointer md:hidden">
          <Image
            src={Menuline}
            alt="img"
            width={25}
            height={25}
            className=" max-sm:w-5 max-sm:h-5"
          />
        </div>
        <div className=" flex items-center hidden md:block ">
          <h1 className=" md:text-2xl">
            My Portfolio<span className=" text-yellow-500 text-3xl">.</span>
          </h1>
        </div>
      </div>
      {/* nav_left_section_end */}

      {/* nav_middle_section_start */}
      <div className=" flex items-center md:hidden">
        <h1 className=" lg:text-xl">
          My Portfolio<span className=" text-yellow-500 text-2xl">.</span>
        </h1>
      </div>
      <div className="hidden md:block  items-center">
        <ul id={Style.navUl} className=" flex gap-5">
          <Link href={"/"}>
            <li className={`${pathName == "/" ? "text-yellow-200" : null}`}>
              Home
            </li>
          </Link>
          <Link href={"/informations/about"}>
            <li
              className={`${
                pathName == "/informations/about" ? "text-yellow-200" : null
              }`}
            >
              About
            </li>
          </Link>
          <Link href={"/informations/services"}>
            <li
              className={`${
                pathName == "/informations/services" ? "text-yellow-200" : null
              }`}
            >
              Services
            </li>
          </Link>
          <Link href={"/informations/work_places"}>
            <li
              className={`${
                pathName == "/informations/work_places"
                  ? "text-yellow-200"
                  : null
              }`}
            >
              Work places
            </li>
          </Link>
        </ul>
      </div>
      {/* nav_middle_section_end */}

      {/* nav_right_section_start */}
      <div className=" flex gap-5 items-center justify-center">
        <button
          id={Style.subsCribeBtn}
          className=" active:text-yellow-200 max-sm:text-sm "
        >
          {loggedUser ? (
            <div>
              <Link href={`/user/profile`}>
                <Image
                  src={loggedUser.image}
                  alt="user"
                  width={40}
                  height={40}
                  className=" rounded-full"
                />
              </Link>
            </div>
          ) : (
            <Link href={"/user/login"}>
              <h1>Login</h1>
            </Link>
          )}
        </button>
      </div>

      {/* nav_right_section_end */}
    </nav>
  );
}
