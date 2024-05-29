"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function Bottom() {
  const pathName = usePathname();
  return (
    <div id="btm" className=" ">
      {pathName == "/user/signup" ||
      pathName == "/chat" ||
      pathName == "/admin/admin_chats" ||
      pathName == "/admin/admin-login" ? null : (
        <footer
          className={` pb-20 text-white pr-10 pl-10 max-sm:pl-5 max-sm:pr-5 bg-slate-700 `}
        >
          <div className=" pt-5">
            {/* top_section_start */}
            <h1 className=" underline underline-offset-4 text-center text-xl max-sm:text-base">
              CONTACT
            </h1>
            <div className=" mt-5">
              <ul className=" flex justify-between items-center sm:justify-around">
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=100028605347325"
                  }
                >
                  <li className=" flex flex-col items-center active:text-yellow-300 hover:text-green-500 max-md:text-sm max-sm:text-xs">
                    <Image
                      src={"../../all_svg/facebook-fill.svg"}
                      alt="facebook"
                      width={25}
                      height={25}
                      className=" max-sm:w-5 max-sm:h-5"
                    />
                    <h1>facebook</h1>
                  </li>
                </Link>
                <Link
                  href={
                    "https://call.whatsapp.com/video/n0X99VTI9ez8Z0p8vnUOZO"
                  }
                >
                  <li className=" flex flex-col items-center active:text-yellow-300 hover:text-green-500 max-md:text-sm max-sm:text-xs">
                    <Image
                      src={"../../all_svg/whatsapp-fill.svg"}
                      alt="facebook"
                      width={25}
                      height={25}
                      className=" max-sm:w-5 max-sm:h-5"
                    />
                    <h1>whatsapp</h1>
                  </li>
                </Link>
                <Link href={"linkedin.com/in/hirock-dutta-196a7a267"}>
                  <li className=" flex flex-col items-center active:text-yellow-300 hover:text-green-500 max-md:text-sm max-sm:text-xs">
                    <Image
                      src={"../../all_svg/linkedin.svg"}
                      alt="facebook"
                      width={25}
                      height={25}
                      className=" max-sm:w-5 max-sm:h-5"
                    />
                    <h1>linkedin</h1>
                  </li>
                </Link>
                <Link href={""}>
                  <li className=" flex flex-col items-center active:text-yellow-300 hover:text-green-500 max-md:text-sm max-sm:text-xs">
                    <Image
                      src={"../../all_svg/instagram.svg"}
                      alt="facebook"
                      width={25}
                      height={25}
                      className=" max-sm:w-5 max-sm:h-5"
                    />
                    <h1>instagram</h1>
                  </li>
                </Link>
              </ul>
            </div>
            {/* top_section_end */}
            {/* -------------------------------------------- */}
            {/* bottom_bottom_section_start */}
            <div className="mt-4 flex  justify-center max-md:flex-col">
              <div className="  w-full flex ">
                <div className=" w-full">
                  <h1 className=" text-center underline underline-offset-4">
                    ABOUT
                  </h1>
                  <p className=" max-sm:text-xs mt-4">
                    A seasoned full-stack developer proficient in React,
                    Next.js, MongoDB, and Redux Toolkit, adept at crafting
                    dynamic and scalable web applications. With a keen eye for
                    detail, we seamlessly integrate front-end components using
                    React and Next.js while leveraging Redux Toolkit for state
                    management. Our expertise extends to designing robust
                    back-end solutions with MongoDB, ensuring efficient data
                    storage and retrieval. With a passion for clean code and
                    innovative problem-solving, We thrive in collaborative
                    environments, driving projects from conception to deployment
                    with precision and agility.
                  </p>
                </div>
              </div>

              <div className=" w-full flex mt-5">
                <div className=" w-full flex flex-col items-center">
                  <h1 className=" underline underline-offset-4">CATEGORIES</h1>
                  <ul className="max-sm:text-xs mt-4 max-sm:flex max-sm:flex-col max-sm:gap-2">
                    <li>HTML,CSS</li>
                    <li>Tailwind</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>MongoDB</li>
                    <li>Redux</li>
                  </ul>
                </div>
                <div className=" w-full flex flex-col items-center">
                  <h1 className=" underline underline-offset-4">QUICK LINKS</h1>
                  <ul
                    id="quicjLinksUl"
                    className="max-sm:text-xs mt-4 max-sm:flex max-sm:flex-col max-sm:gap-2"
                  >
                    <Link href={""}>
                      <li>About Us</li>
                    </Link>
                    <Link href={""}>
                      <li>Contact Us</li>
                    </Link>
                    <Link href={""}>
                      <li>Contributions</li>
                    </Link>
                    <Link href={""}>
                      <li>Privacy Policy</li>
                    </Link>
                    <Link href={""}>
                      <li>Shemap</li>
                    </Link>
                    <Link href={"/admin/admin_login"}>
                      <li>Admin Panel</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            {/* bottom_bottom_section_start */}
          </div>
        </footer>
      )}
    </div>
  );
}
