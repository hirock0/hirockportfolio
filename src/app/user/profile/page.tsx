"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
export default function Profile() {
  const router = useRouter();
  const [profileData, setProfileData] = useState<any>({});
  const [updatedata, setUpdatedata] = useState({ image: "", userId: "" });
  const [updatepopup, setUpdatepopup] = useState(false);
  const [logoutpopup, setLogoutpopup] = useState(false);
  const [descriptions, setDescriptions] = useState({
    desCriptions: "",
    userId: "",
  });
  const [descriptionpopup, setDescriptionpopup] = useState(false);
  const onProfile = async () => {
    try {
      const FetchData = await axios.get("/pages/api/signup");
      const user = FetchData.data.loggedUser;
      setProfileData(user);
      setUpdatedata({ ...updatedata, userId: user._id });
      setDescriptions({ ...descriptions, userId: user._id });
    } catch (error: any) {
      console.log("Something went wrong");
    }
  };
  const onLogout = async () => {
    const logOut = await axios.get("/pages/api/logout");
    if (logOut.data.success) {
      toast.success("Log out");
      router.push("/");
    } else {
      console.log("Something went wrong");
    }
  };

  const base64 = (e: any) => {
    const reader: any = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setUpdatedata({ ...updatedata, image: reader.result });
    };

    reader.onerror = () => {
      toast.success("something went wrong");
    };
  };

  const onUpdate = async () => {
    try {
      const sendUpdate = await axios.post(
        "/pages/api/profile/update_profile_image",
        updatedata
      );
      if (sendUpdate.data.success) {
        setUpdatepopup(() => !updatepopup);
        toast.success("Update Successful");
        router.refresh();
      }
    } catch (error: any) {
      toast.success("something went wrong");
    }
  };
  const onDescriptions = async (e: any) => {
    e.preventDefault();
    const sendDescription = await axios.post(
      "/pages/api/profile/update_profile_description",
      descriptions
    );
    if (!sendDescription.data.success) {
      toast.success("Please maximum 250 characters");
    } else {
      setDescriptionpopup(() => !descriptionpopup);
      toast.success("Description is created!");
    }
  };

  useEffect(() => {
    onProfile();
  }, []);
  return (
    <main className=" h-screen bg-slate-800 text-white">
      <div className=" relative flex items-center justify-center pt-5 ">
        <div className="w-fit relative ">
          <Image
            src={profileData?.image || ""}
            alt="profile"
            width={130}
            height={130}
            className=" rounded-full"
          />
          <div
            onClick={() => setUpdatepopup(!updatepopup)}
            className=" absolute bottom-2 right-0 bg-black p-1 rounded-full cursor-pointer "
          >
            <Image
              src={"/all_svg/image-fill.svg"}
              alt="update"
              width={25}
              height={25}
            />
          </div>
        </div>

        {/*update_popup_start */}
        <div
          onClick={() => setUpdatepopup(!updatepopup)}
          className={`${
            !updatepopup ? "invisible" : "visible"
          } flex items-center justify-center fixed bg-slate-800/80 h-screen top-0 left-0 w-full`}
        >
          <div
            onClick={(e: any) => e.stopPropagation()}
            className={` bg-slate-100 rounded-md w-2/5 ${
              updatedata.image == "" ? "h-1/5" : "h-2/5"
            } max-sm:w-4/5 flex flex-col items-center justify-center max-sm:text-xs`}
          >
            <div className=" w-full flex flex-col items-center">
              <input
                type="file"
                onChange={base64}
                accept="**/image"
                className=" hidden"
                id="updateInp"
              />
              <div className=" bg-green-200 w-1/2">
                <label htmlFor="updateInp" className="">
                  <h1
                    className={`border w-full bg-red-600 h-8 flex items-center justify-center rounded-md max-sm:text-xs `}
                  >
                    {updatedata.image == "" ? "Choose Image" : "It's selected"}
                  </h1>
                </label>
              </div>

              <div
                className={`${
                  updatedata.image == "" ? "hidden" : "block"
                } flex items-end justify-center pt-5`}
              >
                <Image
                  src={updatedata.image}
                  alt="updateImage"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div className=" w-full flex items-center justify-center mt-5 ">
              <button
                onClick={onUpdate}
                className="w-1/5 h-8 max-sm:w-2/5 rounded-md max-sm:h-7 bg-green-700 hover:bg-green-800 active:bg-green-900 sm:text-xs md:text-sm lg:text-base "
              >
                update
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*update_popup_end */}

      <div className=" mt-5">
        <h1 className=" text-center underline underline-offset-4">Bio_Data</h1>
        <div className=" flex justify-center mt-2 max-sm:text-xs">
          <div className=" border w-2/5 max-sm:w-4/5 p-2 rounded-md">
            <h1 className=" text-center">{profileData.name}</h1>
            <h1 className=" text-center">{profileData.emailOrnumber}</h1>
            <div className=" underline underline-offset-4 flex items-center justify-around mt-5 text-base">
              <h1>Descriptions:</h1>
              <Image
                onClick={() => setDescriptionpopup(!descriptionpopup)}
                src={"/all_svg/edit-fill.svg"}
                alt="edit"
                width={25}
                height={25}
                className=" cursor-pointer "
              />
            </div>
            {/* descriptions_start */}
            <div
              onClick={() => setDescriptionpopup(!descriptionpopup)}
              className={` ${
                !descriptionpopup ? "invisible" : "visible"
              } fixed h-screen top-0 left-0 bottom-0 w-full bg-slate-800/80 flex items-center justify-center`}
            >
              <div
                onClick={(e: any) => e.stopPropagation()}
                className="  rounded-md bg-cyan-900 p-5 w-2/5 max-sm:w-4/5  h-2/5"
              >
                <form className=" w-full h-full">
                  <textarea
                    maxLength={250}
                    value={descriptions.desCriptions}
                    onChange={(e: any) =>
                      setDescriptions({
                        ...descriptions,
                        desCriptions: e.target.value,
                      })
                    }
                    placeholder="Description: maximum 250 characters"
                    className=" pl-2 h-full w-full rounded-md text-black"
                  />
                  <div className=" flex items-center justify-center mt-5">
                    <button
                      onClick={onDescriptions}
                      className="w-1/2 h-8 rounded-md max-sm:h-7 bg-green-700 hover:bg-green-800 active:bg-green-900"
                    >
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* descriptions_end */}
            <div className=" mt-2 text-xs">{profileData.descriptions}</div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setLogoutpopup(!logoutpopup)}
        className=" flex items-center justify-center mt-10"
      >
        <button className=" w-1/5 max-sm:w-2/5 max-sm:text-xs h-8 max-sm:h-7 rounded-md bg-red-700 hover:bg-red-800  active:bg-red-900">
          logout
        </button>
      </div>

      {/* logout_popup_start */}
      <div
        onClick={() => setLogoutpopup(!logoutpopup)}
        className={` bg-slate-800/80 flex items-center justify-center fixed top-0 bottom-0 w-full ${
          !logoutpopup ? " invisible" : "visible"
        }`}
      >
        <div
          onClick={(e: any) => e.stopPropagation()}
          className=" bg-slate-100 rounded-md w-2/5 h-1/5 max-sm:w-4/5 flex flex-col items-center justify-around max-sm:text-xs"
        >
          <div className=" text-center max-sm:text-xs">
            <h1 className=" text-red-500 underline underline-offset-4 font-semibold text-xl">
              Do you want to logout?
            </h1>
          </div>
          <div className=" flex justify-around items-center w-full pr-10 pl-10 max-sm:pr-5 max-sm:pl-5 gap-5">
            <button
              onClick={() => setLogoutpopup(!logoutpopup)}
              className=" w-1/2 h-8 rounded-md max-sm:h-7 bg-red-700 hover:bg-red-800 active:bg-red-900"
            >
              cancel
            </button>
            <button
              onClick={onLogout}
              className=" w-1/2 h-8 rounded-md max-sm:h-7 bg-green-700 hover:bg-green-800 active:bg-green-900"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      {/* logout_popup_end */}
    </main>
  );
}
