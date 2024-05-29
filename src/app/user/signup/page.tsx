"use client";

import { useEffect, useState } from "react";
import Style from "./signup.module.css";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function Signup() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [signupdata, setSignupdata] = useState({
    name: "",
    emailOrnumber: "",
    password: "",
    reTypepassword: "",
    contact: "",
    image: "",
    descriptions: "",
    recentDate: "",
  });
  const [warning, setWarning] = useState({
    name: "",
    emailOrnumber: "",
    password: "",
    reTypepassword: "",
    contact: "",
    image: "",
  });
  const base64 = (e: any) => {
    const reader: any = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setSignupdata({ ...signupdata, image: reader.result });
    };

    reader.onerror = () => {
      console.log("something went wrong");
    };
  };

  const onrecentDate = () => {
    const date: any = new Date();
    const recentdate = date.toLocaleDateString();
    setSignupdata({ ...signupdata, recentDate: recentdate });
  };

  const onSignup = async (e: any) => {
    e.preventDefault();
    try {
      if (signupdata.name == "") {
        setWarning({ ...warning, name: "name is empty!" });
      } else if (signupdata.emailOrnumber == "") {
        setWarning({ ...warning, emailOrnumber: "Email or Number is empty!" });
      } else if (signupdata.password == "") {
        setWarning({ ...warning, password: "Password is empty!" });
      } else if (signupdata.reTypepassword == "") {
        setWarning({
          ...warning,
          reTypepassword: "Re_Type password is empty!",
        });
      } else if (signupdata.password !== signupdata.reTypepassword) {
        toast.success("Password does not match!");
      } else if (signupdata.contact == "") {
        setWarning({ ...warning, contact: "Contact is empty!" });
      } else {
        const sendData = await axios.post("/pages/api/signup", signupdata);
        if (sendData.data.success) {
          toast.success("Sign Up Successfull");
          router.push("/");
        } else {
          toast.success("something went wrong");
        }
      }
    } catch (error: any) {
      console.log("problems found");
    }
  };

  useEffect(() => {
    onrecentDate();
  }, []);
  return (
    <main className=" h-screen relative text-black  ">
      <video
        src="/videos/signup_page_video_1.mp4"
        playsInline
        autoPlay
        muted
        loop
        className=" object-cover w-full h-full"
      ></video>
      <div
        id={Style.mainDiv}
        className=" overflow-y-scroll  absolute top-0 left-0 w-full h-full text-white"
      >
        <div className="  flex items-center justify-center sm:h-full max-sm:mt-10 ">
          <div
            id={Style.loginPalate}
            className=" p-5 rounded-md backdrop:filter backdrop-blur-3xl opacity-95 max-sm:text-xs"
          >
            <h1 className=" text-center pb-10 underline underline-offset-8 text-xl">
              Sign Up
            </h1>
            <div className=" ">
              <form className=" flex flex-col gap-4">
                <div>
                  <h1>Name</h1>
                  <input
                    value={signupdata.name}
                    onChange={(e: any) =>
                      setSignupdata({ ...signupdata, name: e.target.value })
                    }
                    type="text"
                    placeholder="Name"
                    name="name"
                    className=" h-8 pl-2 rounded-sm w-full"
                  />
                  <h1 className=" text-center text-green-600 font-semibold text-sm">
                    {signupdata.name.length !== 0 ? null : warning.name}
                  </h1>
                </div>
                <div>
                  <h1>Email or Number</h1>
                  <input
                    value={signupdata.emailOrnumber}
                    onChange={(e: any) =>
                      setSignupdata({
                        ...signupdata,
                        emailOrnumber: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Email or Number"
                    name="name"
                    className=" h-8 pl-2 rounded-sm w-full"
                  />
                  <h1 className=" text-center text-green-600 font-semibold text-sm">
                    {signupdata.emailOrnumber.length !== 0
                      ? null
                      : warning.emailOrnumber}
                  </h1>
                </div>
                <div>
                  <h1>Password</h1>
                  <input
                    value={signupdata.password}
                    onChange={(e: any) =>
                      setSignupdata({ ...signupdata, password: e.target.value })
                    }
                    type={`${!showPassword ? "password" : "text"}`}
                    placeholder="Password"
                    name="password"
                    className=" h-8 pl-2 rounded-sm w-full"
                  />
                  <h1 className=" text-center text-green-600 font-semibold text-sm">
                    {signupdata.password.length !== 0 ? null : warning.password}
                  </h1>
                </div>
                <div>
                  <div>
                    <h1>Re_Type Password</h1>
                    <input
                      value={signupdata.reTypepassword}
                      onChange={(e: any) =>
                        setSignupdata({
                          ...signupdata,
                          reTypepassword: e.target.value,
                        })
                      }
                      type={`${!showPassword ? "password" : "text"}`}
                      placeholder="Re_Type Password"
                      name="password"
                      className=" h-8 pl-2 rounded-sm w-full"
                    />
                    <h1 className=" text-center text-green-600 font-semibold text-sm">
                      {signupdata.reTypepassword.length !== 0
                        ? null
                        : warning.reTypepassword}
                    </h1>
                  </div>
                  <div className=" flex items-center gap-3">
                    <input
                      type="checkbox"
                      onClick={() => setShowPassword(!showPassword)}
                      className="  "
                    />
                    <h1>Show pasword</h1>
                  </div>
                </div>
                <div>
                  <h1>Contact</h1>
                  <input
                    value={signupdata.contact}
                    onChange={(e: any) =>
                      setSignupdata({ ...signupdata, contact: e.target.value })
                    }
                    type="text"
                    placeholder="Contact"
                    name="contact"
                    className=" h-8 pl-2 rounded-sm w-full"
                  />
                  <h1 className=" text-center text-green-600 font-semibold text-sm">
                    {signupdata.contact.length !== 0 ? null : warning.contact}
                  </h1>
                </div>
                <div>
                  <h1>Image</h1>
                  <input
                    id={Style.Fileinput}
                    type="file"
                    accept="**/image"
                    onChange={base64}
                    name="image"
                    className=" h-8 pl-2 rounded-sm text-white"
                  />
                </div>
                <div className=" flex items-center justify-center">
                  <Image
                    src={signupdata.image}
                    alt="img"
                    width={100}
                    height={100}
                  />
                </div>
                <div className=" flex items-center justify-center">
                  <button
                    onClick={onSignup}
                    className=" border w-52 h-8 rounded-md hover:bg-emerald-800 active:bg-emerald-900 hover:border-0"
                  >
                    {signupdata.name.length !== 0 &&
                    signupdata.emailOrnumber.length !== 0 &&
                    signupdata.password.length !== 0 &&
                    signupdata.reTypepassword.length !== 0 &&
                    signupdata.contact.length !== 0
                      ? "SignUp"
                      : "Fill Up"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
