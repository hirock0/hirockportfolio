"use client";
import Image from "next/image";
import Style from './sample.module.css'
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
const descriptionBox:any = {
  WebkitLineClamp: "5",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

export default function Samples(props: any) {
  const alladata = props.item;
  const [isOpen, setisOpen] = useState<any>(false);
  const ref: any = useRef(null);
  const [showmore, setShowmore] = useState(false);
  const showBtn = () => {
    if (ref.current) {
      setShowmore(ref.current.scrollHeight !== ref.current.clientHeight);
    }
  };
  useEffect(() => {
    showBtn();
  }, []);
  return (
    <div className=" mt-4">
      <div className=" flex max-sm:text-xs sm:text-xs md:text-sm">
        <div  className=" w-4/5 pr-5 max-sm:pr-1">
            <p style={isOpen ? null :descriptionBox} ref={ref}>
              {alladata.sampleDescription}
            </p>
            {showmore && (
            <button onClick={() => setisOpen(!isOpen)} style={{ color: "red" }}>
              {isOpen ? "Read less" : "Read more..."}
            </button>
      )}
        </div>
        <div className="  w-2/5 ">
          <Link href={alladata.sampleLink}><Image src={alladata.sampleImage} alt="img" width={200} height={200} className=" hover:scale-110"/></Link>
        </div>
      </div>

    </div>
  );
}
