"use client";
import Style from "./projects.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
export default function Projects() {
  const [projectData, setProjectData] = useState<any>({
    projectName: "",
    projectImage: "",
    projectLink: "",
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
      setProjectData({ ...projectData, projectImage: reader.result });
    };
    reader.onerror = () => {
      toast.success("something went wrong");
    };
  };

  const onProjectUpload = async (e: any) => {
    e.preventDefault();
    if (
      projectData.projectName == "" ||
      projectData.projectImage == "" ||
      projectData.projectLink == ""
    ) {
      toast.success("Fill all fields");
    } else {
      const sendProject = await axios.post(
        "/pages/api/projectdata",
        projectData
      );
      if (!sendProject.data.success) {
        toast.success("Something went wrong");
      } else {
        toast.success("Data is sent");
        setProjectData({
          ...projectData,
          projectName: "",
          projectImage: "",
          projectLink: "",
        });
      }
    }
  };

  useEffect(() => {
    recentdate();
  }, []);

  return (
    <main
      id={Style.main}
      className=" pt-16 flex flex-col justify-between pb-10 h-screen bg-slate-500"
    >
      <div>
        <h1 className=" text-center underline underline-offset-4 text-xl">
          This is a admin pannel
        </h1>
        <div className=" mt-5">
          <h1 className=" text-center underline underline-offset-4">
            projects
          </h1>
          <form>
            <div className=" mt-5 w-full flex flex-col gap-2 items-center max-sm:text-xs">
              <div className=" w-1/2 border p-2 backdrop:filter backdrop-blur-3xl rounded-md">
                <h1>Project Name:</h1>
                <input
                  value={projectData.projectName}
                  onChange={(e: any) =>
                    setProjectData({
                      ...projectData,
                      projectName: e.target.value,
                    })
                  }
                  placeholder="Project Name"
                  type="text"
                  name="name"
                  className=" h-8 pl-2 rounded-sm w-full"
                />
              </div>
              <div className=" w-1/2 border p-2 backdrop:filter backdrop-blur-3xl rounded-md">
                <h1>Project Link:</h1>
                <input
                  value={projectData.projectLink}
                  onChange={(e: any) =>
                    setProjectData({
                      ...projectData,
                      projectLink: e.target.value,
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
              {!projectData.projectImage ? null : (
                <div>
                  <Image
                    src={projectData.projectImage}
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
