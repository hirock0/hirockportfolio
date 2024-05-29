"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
const seeMoreBox: any = {
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};
export default function ProjectCarts(props: any) {
  const allProjects = props.item;
  const [seeMore, setSeemore] = useState(false);
  const [seemoreBtn, setSeeMoreBtn] = useState(false);
  const ref: any = useRef(null);
  const onSeeBtn = () => {
    if (ref.current) {
      setSeeMoreBtn(ref.current.scrollHeight !== ref.current.clientHeight);
    }
  };

  useEffect(() => {
    onSeeBtn();
  }, []);
  return (
    <div className=" border p-5 backdrop:filter backdrop-blur-3xl mt-5 rounded-md max-sm:text-xs sm:text-sm md:text-base">
      <div className=" flex items-center">
        <h1>{allProjects.field}</h1>
        <Image
          src={allProjects.fieldImage}
          alt="img"
          width={70}
          height={70}
          className=" max-sm:w-10 max-sm:h-10"
        />
      </div>

      <div ref={ref} style={!seeMore ? seeMoreBox : null}>
        <p>
          {allProjects.fieldDescriptions}
          <span className=" text-green-500">{allProjects.fieldEmail}</span>
        </p>
        <div className=" mt-5 flex items-center justify-center">
          <Link href={allProjects.fieldLink}>
            <button className="p-2 rounded-md bg-green-600 hover:bg-green-700 active:bg-green-800 active:text-yellow-200">
              Let's Start
            </button>
          </Link>
        </div>
      </div>

      <button onClick={() => setSeemore(!seeMore)} className=" text-red-500">
        {seemoreBtn && (!seeMore ? "see more..." : "read less")}
      </button>
    </div>
  );
}
