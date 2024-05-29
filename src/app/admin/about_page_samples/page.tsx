"use client";

import Image from "next/image";
import Style from "./about.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AboutPageSampleData() {
  const [projectData, setProjectData] = useState<any>({
    sampleImage: "",
    sampleDescription: "",
    sampleLink: "",
    recentDate: "",
  });

  const recentdate = () => {
    const dateFuntion = new Date();
    const recentdate = dateFuntion.toLocaleDateString();
    setProjectData({ ...projectData, recentDate: recentdate });
  };

  const base64 = (e: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setProjectData({ ...projectData, sampleImage: reader.result });
    };
    reader.onerror = () => {
      console.log("something went wrong");
    };
  };

  const onProjectUpload = async (e: any) => {
    e.preventDefault();
    if (
      projectData.sampleDescription == "" ||
      projectData.sampleImage == "" ||
      projectData.sampleLink == ""
    ) {
      toast.success("Fill all fields");
    } else {
      const sendProject = await axios.post(
        "/pages/api/about_page_samples",
        projectData
      );
      if (!sendProject.data.success) {
        toast.success("Something went wrong");
      } else {
        toast.success("Data is sent");
        setProjectData({
          ...projectData,
          sampleDescription: "",
          sampleImage: "",
          sampleLink: "",
        });
      }
    }
  };

  useEffect(() => {
    recentdate();
  }, []);

  return (
    <main id={Style.main} className=" h-screen pt-16">
      <div>
        <h1 className=" text-center underline underline-offset-4 text-xl">
          This is About page pannel
        </h1>
        <div className=" mt-5">
          <h1 className=" text-center underline underline-offset-4">
            projects
          </h1>
          <form>
            <div className=" mt-5 w-full flex flex-col gap-2 items-center max-sm:text-xs">
              <div className=" w-1/2 border p-2 backdrop:filter backdrop-blur-3xl rounded-md">
                <h1>Project Descriptions:</h1>
                <textarea
                  value={projectData.sampleDescription}
                  onChange={(e: any) =>
                    setProjectData({
                      ...projectData,
                      sampleDescription: e.target.value,
                    })
                  }
                  placeholder="Descriptions"
                  name="name"
                  className=" h-32 pl-2 rounded-sm w-full text-black"
                ></textarea>
              </div>
              <div className=" w-1/2 border p-2 backdrop:filter backdrop-blur-3xl rounded-md">
                <h1>Project Link:</h1>
                <input
                  value={projectData.sampleLink}
                  onChange={(e: any) =>
                    setProjectData({
                      ...projectData,
                      sampleLink: e.target.value,
                    })
                  }
                  placeholder="Project Name"
                  type="text"
                  name="name"
                  className=" h-8 pl-2 rounded-sm w-full"
                />
              </div>
              <div className=" w-1/2 border p-2 backdrop:filter backdrop-blur-3xl rounded-md">
                <h1>Project Image:</h1>
                <input
                  onChange={base64}
                  id="imgInput"
                  type="file"
                  accept="**/image"
                  name="imgInput"
                  className=" h-8 pl-2 rounded-sm w-full hidden"
                />
                <div className=" h-8 bg-white text-black w-full flex items-center pl-2">
                  <label htmlFor="imgInput">Choose your image</label>
                </div>
              </div>
              {!projectData.sampleImage ? null : (
                <div>
                  <Image
                    src={projectData.sampleImage}
                    alt="img"
                    width={100}
                    height={100}
                  />
                </div>
              )}
            </div>
            <div className=" flex items-center justify-center mt-5">
              <button
                onClick={onProjectUpload}
                className=" border w-52 h-8 rounded-md"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
