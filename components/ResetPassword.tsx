"use client";
import React, { useState } from "react";
import Spinner from "./utils/Spinner";
import axios from "axios";
import Toast from "./utils/Toastify/Toast";
import { useRouter } from "next/navigation";
const ResetPassword = ({emails}: {emails:any}) => {
  const [show_toast, setShowToast] = useState(false);
  const [toast_message, setToastMessage] = useState<string>();
  const [toast_type, setToastType] = useState<
    "success" | "error" | "info" | "warning"
  >("success");
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter()
  let token: any;
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleResetPassword = async () => {
    try {
      if (email === "") return;
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASEURL}/users/reset-password`,
        {
          otp: otp,
          password: password,
          email: emails,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      if (response) {
        // setShowRestPassword(true);
      }
      // console.log(response); // stopped here add the token to storage and use for subsequent calls
      setToastMessage(response?.data?.data.message);
      router.push("/user/login")
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
        <div className="w-screen h-screen fixed top-0 z-50 bg-black bg-opacity-50">
          <div className="mt-[15rem] w-[90%] m-auto flex flex-col justify-center items-center gap-5">
            <div className="card w-[50%] h-auto bg-[#F6F6F6] p-5 my-5">
              <h1 className="text-4xl font-black text-center mb-5">
                Reset Password
              </h1>
              <form
                action=""
                className="w-full flex flex-col justify-start items-start gap-5"
              >
                <div className="formgroup w-full">
                  <label htmlFor="firstname" className="text-xl font-black">
                    Otp
                  </label>
                  <input
                    type="text"
                    placeholder="enter otp code"
                    value={otp}
                    onChange={handleOtpChange}
                    className="w-full py-3 px-2 outline-none mt-2"
                  />
                </div>
                <div className="formgroup w-full">
                  <label htmlFor="firstname" className="text-xl font-black">
                    Password
                  </label>
                  <input
                    type="email"
                    placeholder="enter password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full py-3 px-2 outline-none mt-2"
                  />
                </div>
                {/* <div className="formgroup w-full">
                  <label htmlFor="firstname" className="text-xl font-black">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="enter email"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full py-3 px-2 outline-none mt-2"
                  />
                </div> */}
                <div className="w-full flex justify-center items-center mt-5">
                  <button
                    type="button"
                    className="bg-[#FF4D4D] w-[90%] text-white py-3"
                    onClick={handleResetPassword}
                  >
                    {loading ? <Spinner size={25} color="#000000" /> : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {show_toast && <Toast message={toast_message} type={toast_type} />}
    </>
  );
};

export default ResetPassword;
