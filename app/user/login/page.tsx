"use client";
import Login from "@/components/Login";
import Nav from "@/components/Nav";
import { IRegisterUser } from "@/components/signup/inex";
import Spinner from "@/components/utils/Spinner";
import Toast from "@/components/utils/Toastify/Toast";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const page = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isRegister, setIsRegister] = useState<boolean>(true);
  const [show_password, setShowPassword] = useState<boolean>(true);
  const [progress_color, setProgressColor] = useState("bg-red-500");
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [show_toast, setShowToast] = useState(false);
  const [toast_message, setToastMessage] = useState<string>();
  const [toast_type, setToastType] = useState<
    "success" | "error" | "info" | "warning"
  >("success");
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUserDto] = useState<IRegisterUser>({
    email: "",
    password: "",
  });
  // console.log(user)
  const [criteria, setCriteria] = useState({
    length5: false,
    length8: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });

  const handlePasswordChange = (e: any) => {
    const password = e.target.value;
    setUserDto((prev: any) => ({ ...prev, password: e.target.value }));
  };

  const handleLogin = async () => {
    // console.log(userDetails, otpCode)
    try {
      if (user.email === "") return;
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASEURL}/users/login`,
        user,
        {
          withCredentials: true,
        }
      );
      if (response) {
        localStorage.setItem("catcha%$#%", response?.data?.data.token);
        setTimeout(() => {
          router.push("/");
        }, 1000);
      }
      console.log(response); // stopped here add the token to storage and use for subsequent calls
      setToastMessage(response?.data?.data.message);
      setShowToast(true);
      setToastType("success");
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      if (error?.response?.data.statusCode === 401) {
        setToastMessage(error?.response?.data?.msg);
      } else {
        setToastMessage(error?.response?.data?.data[0]?.message);
      }
      setShowToast(true);
      setToastType("error");
      setLoading(false);
    }
  };
  return (
    <>
      <Nav />
      {isRegister && (
        <div className="mt-52 w-[90%] m-auto flex flex-col justify-center items-center gap-5">
          <h1 className="text-4xl font-black">Login</h1>
          <div className="card w-[50%] h-auto bg-[#F6F6F6] p-5 my-5">
            <form
              action=""
              className="w-full flex flex-col justify-start items-start gap-5"
            >
              <div className="formgroup w-full">
                <label htmlFor="firstname" className="text-xl font-black">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="enter email"
                  value={user.email}
                  className="w-full py-3 px-2 outline-none mt-2"
                  required
                  onChange={(e) =>
                    setUserDto((prev: any) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="w-full">
                <label htmlFor="firstname" className="text-xl font-black">
                  Password
                </label>
                <div className="w-full flex justify-center items-center relative">
                  <input
                    type={show_password ? "password" : "text"}
                    className="w-full p-2 lg:p-3 border-2 border-gray-200  mt-2 text-gray-400 outline-none"
                    placeholder="password"
                    value={user.password}
                    onChange={handlePasswordChange}
                  />
                  <p
                    className="text-gray-400 absolute right-0 pr-5 cursor-pointer border-l border-l-gray-400 pl-2"
                    onClick={() => setShowPassword(!show_password)}
                  >
                    {show_password ? (
                      <FaRegEyeSlash size={20} />
                    ) : (
                      <FaRegEye size={20} />
                    )}
                  </p>
                </div>
              </div>
              {/* progress bar */}
              <div className="formgroup w-full flex justify-start items-center gap-3">
                <input
                  type="checkbox"
                  style={{ height: "1.5rem", width: "1.5rem", color: "red" }}
                />
                <div className="w-full flex flex-col">
                  <label htmlFor="letter" className="text-red-600 font-bold">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="w-full flex justify-center items-center">
                <button
                  type="button"
                  className="bg-[#FF4D4D] w-[90%] text-white py-3"
                  onClick={handleLogin}
                >
                  {loading ? <Spinner size={25} color="#000000" /> : "Login"}
                </button>
              </div>
              <div className="w-full flex justify-center flex-col gap-2 items-center">
                <p className="text-[#191919]">
                  Dont have an account?{" "}
                  <Link
                    href={"/user/register"}
                    className="font-black cursor-pointer text-red-600"
                    // onClick={() => {
                    //   setIsRegister(false);
                    //   setIsAuth(true);
                    // }}
                  >
                    Register
                  </Link>
                </p>
                <p className="text-[#191919]">
                  Forgot your password ?{" "}
                  <Link
                    href={"/user/forgotPassword"}
                    className="font-black cursor-pointer text-red-600"
                    // onClick={() => {
                    //   setIsRegister(false);
                    //   setIsAuth(true);
                    // }}
                  >
                    Reset Password
                  </Link>
                </p>
              </div>
              <div className="divide w-full flex justify-center items-center gap-2">
                <div className="w-[50%] border-2 border-b-[#CECECE]"></div>
                <p className="text-lg text-[#75757A]">OR</p>
                <div className="w-[50%] border-2 border-b-[#CECECE]"></div>
              </div>
              <div className="socials w-full grid grid-cols-3 gap-3">
                <div className="h-[100px] border border-[#CECECE]"></div>
                <div className="h-[100px] border border-[#CECECE]"></div>
                <div className="h-[100px] border border-[#CECECE]"></div>
              </div>
            </form>
          </div>
        </div>
      )}
      {show_toast && <Toast message={toast_message} type={toast_type} />}
      {/* {isAuth && <Login setIsAuth={setIsAuth} setIsRegister={setIsRegister} />} */}
    </>
  );
};

export default page;
