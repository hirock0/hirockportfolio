"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function AdminHomePage() {
  const router = useRouter();
  const [homepageProjects, setHomepageprojects] = useState<any>([]);
  const [aboutPageProjects, setAboutPageProjects] = useState<any>([]);
  const onHomePageProjects = async () => {
    try {
      const allHomePageProjectsData = await axios.get("/pages/api/projectdata");
      const data = allHomePageProjectsData.data.allProjects;
      setHomepageprojects(data);
    } catch (error: any) {
      console.log("Data not found");
    }
  };
  const onAboutPageProjects = async () => {
    try {
      const allAboutPageProjectsData = await axios.get(
        "/pages/api/about_page_samples"
      );
      const data = allAboutPageProjectsData.data.allAboutPageSamples;
      setAboutPageProjects(data);
    } catch (error: any) {
      console.log("Data not found");
    }
  };

  const onProjectsDelete = async (e: any) => {
    const deleteData = await axios.get(`/pages/api/admin/projectDelete/${e}`);
    if (deleteData.data.success) {
      toast.success("Project delete successful");
      router.refresh();
    } else {
      toast.success("Something went wrong");
      router.refresh();
    }
  };

  useEffect(() => {
    onHomePageProjects();
    onAboutPageProjects();
  }, [homepageProjects, aboutPageProjects]);
  return (
    <main className=" bg-slate-800/80 text-white text-black p-5 max-sm:text-xs ">
      <div>
        <table className=" w-full border">
          <caption className="">
            <h1 className=" font-bold pb-4 text-base">Home page projects:</h1>
          </caption>
          <thead className="  ">
            <tr>
              <th className=" border text-center">Project Name:</th>
              <th className=" border text-center">Project Image</th>
              <th className=" border text-center">Delete</th>
            </tr>
          </thead>
          <tbody className="">
            {homepageProjects.length !== 0 ? (
              homepageProjects.map((item: any) => (
                <tr key={item._id}>
                  <td className=" border text-center">{item.projectName}</td>
                  <td className=" border text-center flex items-center justify-center p-4">
                    <Image
                      src={item.projectImage}
                      alt="img"
                      width={100}
                      height={100}
                    />
                  </td>
                  <td className=" border text-center">
                    <button
                      onClick={() => onProjectsDelete(item._id)}
                      className="  bg-red-600 hover:bg-red-700 active:bg-red-900 rounded-md p-1"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr key={1}>
                <td className="border text-center">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* all_about_projects */}

      <div className=" mt-5">
        <table className=" w-full border">
          <caption>
            <h1 className=" font-bold pb-4 text-base">About page projects:</h1>
          </caption>
          <thead className=" ">
            <tr>
              <th className=" border text-center">Project Date:</th>
              <th className=" border text-center">Project Image</th>
              <th className=" border text-center">Delete</th>
            </tr>
          </thead>
          <tbody className="">
            {aboutPageProjects.length !== 0 ? (
              aboutPageProjects.map((item: any) => (
                <tr key={item._id}>
                  <td className=" border text-center">{item.recentDate}</td>
                  <td className=" border text-center flex items-center justify-center p-4">
                    <Image
                      src={item.sampleImage}
                      alt="img"
                      width={100}
                      height={100}
                    />
                  </td>
                  <td className=" border text-center">
                    <button
                      onClick={() => onProjectsDelete(item._id)}
                      className=" bg-red-600 hover:bg-red-700 active:bg-red-900 rounded-md p-1"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr key={2}>
                <td className="border text-center">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className=" mt-5">
        <h1 className=" text-center text-xl underline underline-offset-4">
          Success
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          obcaecati expedita ratione. Illum repudiandae quibusdam laboriosam
          veniam voluptates qui. Blanditiis saepe libero deleniti culpa
          molestiae non asperiores similique esse fuga. Earum corporis accusamus
          assumenda, accusantium laudantium sint nulla recusandae aspernatur
          aliquam voluptatem optio incidunt. Mollitia, libero corporis! At
          aliquam unde, in minus accusantium quo, dolore repellat, quasi facere
          odit atque. Quisquam reiciendis pariatur incidunt in maiores sequi
          nostrum aperiam nobis possimus eaque ab temporibus ipsa maxime
          asperiores optio cupiditate, soluta sit quam, suscipit officia enim
          veniam id! Ducimus, corporis quisquam? Accusamus reiciendis est
          quidem, dignissimos error architecto ratione, fugiat tenetur sapiente
          doloribus minima optio! Mollitia tempore explicabo odit natus laborum
          quaerat, a asperiores atque! Nihil similique voluptates numquam
          officia quibusdam. Ratione itaque dicta laudantium sapiente blanditiis
          temporibus vitae sed animi eligendi voluptates maiores delectus
          accusantium rem expedita, eaque officia amet rerum sit veritatis
          provident ab ullam! Animi non delectus quibusdam.
        </p>
      </div>
    </main>
  );
}
