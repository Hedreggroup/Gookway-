"use client";
import Login from "@/components/Login";
import { IRegisterUser } from "@/components/signup/inex";
import Spinner from "@/components/utils/Spinner";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import axios from "axios";
import Routes from "@/components/utils/Routes";
import Toast from "@/components/utils/Toastify/Toast";
import { useRouter } from "next/navigation";

const page = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isRegister, setIsRegister] = useState<boolean>(true);
  const [show_password, setShowPassword] = useState<boolean>(true);
  const [progress_color, setProgressColor] = useState("bg-red-500");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [show_toast, setShowToast] = useState(false);
  const [toast_message, setToastMessage] = useState<string>()
  const router = useRouter()
  const [toast_type, setToastType] = useState<'success' | 'error' | 'info' | 'warning'>('success')
  const [user, setUserDto] = useState<IRegisterUser>({
    full_name: "",
    email: "",
    password: "",
    role:"vendor"
  });
  const [criteria, setCriteria] = useState({
    length5: false,
    length8: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });
  const calculatePasswordStrength = (password: any) => {
    let strength = 0;
    const newCriteria = {
      length5: password.length > 5,
      length8: password.length > 8,
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[^A-Za-z0-9]/.test(password),
    };

    if (newCriteria.length5) strength += 20;
    if (newCriteria.length8) strength += 20;
    if (newCriteria.uppercase) strength += 20;
    if (newCriteria.number) strength += 20;
    if (newCriteria.specialChar) strength += 20;

    setCriteria(newCriteria);
    return strength;
  };

  const handlePasswordChange = (e: any) => {
    const password = e.target.value;
    setUserDto((prev) => ({ ...prev, password: e.target.value }));
    const strength = calculatePasswordStrength(password);
    setProgress(strength);

    if (strength >= 80) {
      setProgressColor("bg-green-500");
    } else if (strength >= 50) {
      setProgressColor("bg-orange-500");
    } else {
      setProgressColor("bg-red-500");
    }
  };
  const handleSignup = async() => {   
    try {
        setLoading(true);
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASEURL}/users/register`, user);
        setToastMessage(response?.data?.message);
        setShowToast(true);
        setToastType("success");
        router.push("/verify")
        setLoading(false);
    } catch (error:any) {
      if(error?.response?.data.statusCode === 401){
        setToastMessage(error?.response?.data?.msg);
      }else{
        setToastMessage(error?.response?.data?.data[0]?.message)
      }
      setShowToast(true);
      setToastType("error");
      setLoading(false);
    }
  };
  
  return (
    <>
      {isRegister && (
        <div className="mt-52 w-[90%] m-auto flex flex-col justify-center items-center gap-5">
          <h1 className="text-4xl font-black">Register</h1>
          <div className="card w-[50%] h-auto bg-[#F6F6F6] p-5 my-5">
            <form
              action=""
              className="w-full flex flex-col justify-start items-start gap-5"
            >
              <div className="formgroup w-full">
                <label htmlFor="firstname" className="text-xl font-black">
                  Full Name
                </label>
                <input
                  type="text"
                  value={user.full_name}
                  placeholder="enter full name"
                  className="w-full py-3 px-2 outline-none mt-2"
                  onChange={(e) =>
                    setUserDto((prev) => ({
                      ...prev,
                      full_name: e.target.value,
                    }))
                  }
                />
              </div>
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
                    setUserDto((prev) => ({ ...prev, email: e.target.value }))
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
              <div className="relative w-full mt-2">
                <div className="h-2 w-full bg-gray-300 rounded-full">
                  <div
                    className={`h-2 rounded-full ${progress_color}`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="mt-4 text-gray-600">
                <p className="text-lg">Password Strength Criteria:</p>
                <ul className="list-disc list-inside">
                  <li
                    className={
                      criteria.length5
                        ? "text-green-600 text-sm"
                        : "text-[#EF3009] text-sm"
                    }
                  >
                    Length greater than 5 characters
                  </li>
                  <li
                    className={
                      criteria.length8
                        ? "text-green-600 text-sm"
                        : "text-[#EF3009] text-sm"
                    }
                  >
                    Length greater than 8 characters
                  </li>
                  <li
                    className={
                      criteria.uppercase
                        ? "text-green-600 text-sm"
                        : "text-[#EF3009] text-sm"
                    }
                  >
                    Contains uppercase letter (A-Z)
                  </li>
                  <li
                    className={
                      criteria.number
                        ? "text-green-600 text-sm"
                        : "text-[#EF3009] text-sm"
                    }
                  >
                    Contains number (0-9)
                  </li>
                  <li
                    className={
                      criteria.specialChar
                        ? "text-green-600 text-sm"
                        : "text-[#EF3009] text-sm"
                    }
                  >
                    Contains special characters
                  </li>
                </ul>
              </div>
              <div className="formgroup w-full flex justify-start items-center gap-3">
                <input
                  type="checkbox"
                  style={{ height: "1.5rem", width: "1.5rem" }}
                />
                <div className="w-full flex flex-col">
                  <label htmlFor="letter">Subscribe to Newsletter</label>
                  <span className="text-sm text-[#75757A]">
                    Get monthly updates via email
                  </span>
                </div>
              </div>
              <div className="formgroup w-full flex justify-start items-center gap-3">
                <input
                  type="checkbox"
                  style={{ height: "1.5rem", width: "1.5rem" }}
                />
                <div className="w-full flex flex-col">
                  <label htmlFor="letter">Receive Notificationr</label>
                  <span className="text-sm text-[#75757A]">
                    Get daily notification for promo & new product
                  </span>
                </div>
              </div>
              <div className="w-full flex justify-center items-center">
                <button
                  type="button"
                  className="bg-[#FF4D4D] w-[90%] text-white py-3"
                  onClick={handleSignup}
                >
                  {loading ? (
                    <Spinner size={25} color="#000000" />
                  ) : (
                    "Create an Account"
                  )}
                </button>
              </div>
              <div className="w-full flex justify-center items-center">
                <p className="text-[#191919]">
                  Already have an account?{" "}
                  <Link
                    href={"/user/login"}
                    className="font-black cursor-pointer text-red-600"
                    // onClick={() => {
                    //   setIsRegister(false);
                    //   setIsAuth(true);
                    // }}
                  >
                    Login
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
      {isAuth && <Login setIsAuth={setIsAuth} setIsRegister={setIsRegister} />}
    </>
  );
};

export default page;
