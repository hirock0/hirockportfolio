"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Websites() {
  const [allproject, setAllproject] = useState<any>([]);
  const onProjects = async () => {
    try {
      const fetchProjects = await axios.get("/pages/api/projectdata");
      const allprojectArray = fetchProjects.data.allProjects;
      setAllproject(allprojectArray);
    } catch (error: any) {
      setAllproject([]);
    }
  };
  useEffect(() => {
    onProjects();
  }, []);

  return (
    <div>
      <Swiper
        pagination={true}
        spaceBetween={20}
        autoplay={{ delay: 5000 }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {allproject.length == 0 ? (
          <div className="">
            <h1 className=" text-center">Please wait...</h1>
          </div>
        ) : (
          allproject.map((item: any, index: any) => (
            <SwiperSlide key={item._id}>
              <div className=" w-full flex items-center justify-center">
                <div className=" h-4/5 w-4/5 max-sm:w-full  flex items-center justify-center p-5 backdrop:filter backdrop-blur-3xl opacity-100 rounded-md">
                  <div className=" max-sm:h-52 relative rounded-md overflow-hidden">
                    <Image
                      src={item.projectImage}
                      alt="img"
                      height={400}
                      width={400}
                      className=""
                    />
                    <div className=" absolute bottom-0 left-0 right-0 backdrop:filter backdrop-blur-3xl h-2/5 opacity-90">
                      <h1 className=" text-center mt-2 underline underline-offset-4">
                        {item.projectName}
                      </h1>
                      <div className=" flex items-center justify-center mt-2">
                        <Link href={item.projectLink}>
                          <button className=" border w-40 rounded-md h-7 hover:bg-green-700 active:bg-green-900">
                            See It
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
}
