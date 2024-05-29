"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Style from "./sidemenu.module.css";
export default function Side_Nav() {
  const pathName = usePathname();
  return (
    <main
      id={Style.sideMenu}
      className=" max-sm:w-36 max-sm:text-xs z-50 side_menu  lg:hidden h-96 w-52 fixed top-24 left-0 right-0 -translate-x-full backdrop:filter backdrop-blur-3xl"
    >
      <h1 className=" bg-green-700 p-1 rounded-md text-center">
        This can help you
      </h1>
      <ul id={Style.sideUl} className=" mt-5 flex flex-col gap-4 ">
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
              pathName == "/informations/work_places" ? "text-yellow-200" : null
            }`}
          >
            Work places
          </li>
        </Link>
      </ul>
    </main>
  );
}
