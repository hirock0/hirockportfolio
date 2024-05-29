"use client";
import Image from "next/image";
import Style from "./adminLogin.module.css";
import loginPageImage from "../../../../public/Images/login_page_Image.jpg";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
export default function Login() {
  const router = useRouter();
  const [eye, setEye] = useState(false);
  const [logindata, setLogindata] = useState({
    emailOrnumber: "",
    password: "",
  });
  const [warning, setWarning] = useState({ emailOrnumber: "", password: "" });
  const onLogin = async (e: any) => {
    e.preventDefault();
    try {
      if (logindata.emailOrnumber == "") {
        setWarning({ ...warning, emailOrnumber: "Email or Number is empty!" });
      } else if (logindata.password == "") {
        setWarning({ ...warning, password: "Password is empty!" });
      } else {
        const sendData = await axios.post("/pages/api/admin/login", logindata);
        if (sendData.data.success) {
          toast.success("Login Successful");
          router.push("/admin");
        } else {
          toast.success("Email or Password is incorrect!");
        }
      }
    } catch (error: any) {
      toast.success("something went wrong");
    }
  };
  return (
    <main className=" bg-cyan-800 p-10 max-sm:p-5  ">
      <div className=" bg-emerald-800 rounded-md overflow-hidden flex max-sm:flex-col ">
        <div id={Style.loginpalateDiv} className=" w-full ">
          <div className=" max-sm:p-10 flex flex-col justify-center items-center w-full h-full  backdrop:filter backdrop-blur-sm">
            <h1 className=" text-center pb-5 underline underline-offset-8 text-xl">
              Admin login please!
            </h1>
            <div>
              <form>
                <div>
                  <h1>Email or Number</h1>
                  <input
                    value={logindata.emailOrnumber}
                    onChange={(e: any) =>
                      setLogindata({
                        ...logindata,
                        emailOrnumber: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Email or Number"
                    name="name"
                    className=" h-8 pl-2 rounded-sm"
                  />
                  {/* <h1 className=" text-center text-red-600 text-sm">Email is incorrect</h1> */}
                </div>
                <div className=" mt-3">
                  <h1>Password</h1>
                  <div className=" relative ">
                    <input
                      value={logindata.password}
                      onChange={(e: any) =>
                        setLogindata({ ...logindata, password: e.target.value })
                      }
                      type={!eye ? "password" : "text"}
                      placeholder="Password"
                      name="password"
                      className=" h-8 pl-2 rounded-sm"
                    />

                    <div
                      onClick={() => setEye(!eye)}
                      className=" absolute top-1.5 right-1.5 cursor-pointer "
                    >
                      <Image
                        id="eye_open"
                        src={"/all_svg/eye-fill.svg"}
                        alt="eye_open"
                        width={20}
                        height={20}
                        className={`${!eye ? " hidden" : " visible"}`}
                      />
                      <Image
                        id="eye_close_open"
                        src={"/all_svg/eye-off-fill.svg"}
                        alt="eye"
                        width={20}
                        height={20}
                        className={`${!eye ? " visible" : " hidden"}`}
                      />
                    </div>
                    {/* <h1 className=" text-center text-red-600 text-sm">Password is incorrect</h1> */}
                  </div>
                </div>
                <div className=" flex items-center justify-center mt-4">
                  <button
                    onClick={onLogin}
                    className=" border h-8 rounded-sm w-full hover:bg-emerald-800 hover:border-0"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div id={Style.leftImage} className=" relative  w-full">
          <Image
            src={loginPageImage}
            alt="img"
            width={1000}
            height={1000}
            className=" object-cover "
          />
          <p className=" max-sm:text-sm sm:text-sm lg:text-base p-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
            suscipit deleniti doloribus est sit pariatur cupiditate nostrum
            repellendus illo unde laudantium maxime omnis, recusandae corrupti
            eaque quod neque a sequi. Aliquid dicta tempore, nisi, modi, aliquam
            cupiditate libero nesciunt sit quam consectetur itaque sint
            recusandae voluptatibus impedit tenetur! Consequuntur nam, eligendi
            architecto corrupti quam dolor et atque ipsa ab quidem.
          </p>
        </div>
      </div>
    </main>
  );
}
