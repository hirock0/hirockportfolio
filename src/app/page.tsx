import Websites from "@/components/myWebsites/website";
import Image from "next/image";
import Link from "next/link";
import IndiCator from "../../public/Images/indicator.png";
import ManIndicator from "../../public/Images/logo1.png";
export default function Home() {
  return (
    <main className=" pt-24 ">
      <div className=" relative bg-red-300"></div>
      <div
        id="page1"
        className=" p-2 flex flex-col items-center justify-center pr-10 pl-10 max-sm:pl-5 max-sm:pr-5"
      >
        {/* inside_page1_div_start */}
        <div
          id="insidemain"
          className=" pb-10 relative rounded-md h-4/5 w-4/5 max-sm:w-full backdrop:filter overflow-hidden backdrop-blur-3xl opacity-90 "
        >
          <Image
            id="indicatorImg"
            src={IndiCator}
            alt="img"
            width={300}
            height={300}
            className=" absolute right-0 max-lg:w-52 max-lg:mt-32  "
          />
          <div className=" flex items-center justify-center mt-5">
            <Image
              id="starImage"
              src={ManIndicator}
              alt="image"
              width={100}
              height={100}
              className=" rounded-full max-sm:w-16 sm:w-20 md:w-28"
            />
          </div>

          <div className="">
            <div className=" w-full ">
              <div className="max-sm:p-2 sm:p-2 md:p-3 lg:p-5">
                <h1
                  id="text_shadow"
                  className=" text-center text-yellow-400 max-md:text-cyan-950 text-5xl max-sm:text-4xl font-semibold"
                >
                  Make your website
                </h1>
                <h1
                  id="text_shadow"
                  className=" text-center text-yellow-400 max-md:text-cyan-950 text-3xl max-sm:text-2xl font-semibold"
                >
                  More functional and
                </h1>
                <h1
                  id="text_shadow_3"
                  className=" text-center text-green-600 text-4xl max-sm:text-3xl font-semibold"
                >
                  Beautiful
                </h1>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <Image
              id="downarrow"
              src={"../..//all_svg/arrow-down-fill.svg"}
              alt="downarrow"
              width={50}
              height={50}
              className=" max-sm:w-8"
            />
          </div>
          <div className="  flex items-center justify-center mt-5">
            <div className=" z-30 absolute active:text-yellow-400 cursor-pointer">
              <Link href={"https://www.fiverr.com/hirock06?up_rollout=true"}>
                <button
                  id="startBtn"
                  className="  w-52 h-10 max-sm:w-40 max-sm:h-8 rounded-md"
                >
                  Let's start
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* inside_page1_div_end */}

        <div className=" w-full mt-5 pb-10">
          <div className=" w-full flex items-center justify-center">
            <h1 className=" text-center pb-2 underline underline-offset-4 text-xl backdrop:filter md:backdrop-blur-3xl  w-4/5  ">
              Here you can see my projects
            </h1>
          </div>
          <Websites />
        </div>
      </div>
    </main>
  );
}
