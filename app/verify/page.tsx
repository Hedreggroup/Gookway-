"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Toast from "@/components/utils/Toastify/Toast";
import Spinner from "@/components/utils/Spinner";

// interface Iemail {
//   email: string;
// }

const ReactPin = (email:any) => {
  const { push } = useRouter();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [otpCode, setOtpCode] = useState<string>("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [show_toast, setShowToast] = useState(false);
  const [toast_message, setToastMessage] = useState<string>();
  const [toast_type, setToastType] = useState<
    "success" | "error" | "info" | "warning"
  >("success");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    const newOtpCode = newOtp.join("");

    setOtp(newOtp);
    setOtpCode(newOtpCode);
    // Focus next input field if current field is not the last
    if (element.nextSibling && element.value !== "") {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const value = e.clipboardData.getData("text");

    if (isNaN(Number(value))) {
      e.preventDefault();
    }
    const updatedOtpValue = value.toString().split("").slice(0, otp.length);
    setOtp(updatedOtpValue);
    const target = e.target as HTMLInputElement;
    const parent = target.parentElement; // Use parentElement instead of parentNode
    if (parent) {
      const lastInput = parent.querySelector(
        "input[type='password']:nth-last-child(1)"
      ) as HTMLInputElement | null;
      if (lastInput) {
        lastInput.focus();
      }
    }
  };

  const handleBackspace = (element: HTMLInputElement, index: number) => {
    if (element.value === "" && element.previousSibling) {
      (element.previousSibling as HTMLInputElement).focus();
    }
  };

  const handleSubmitOtp = async () => {
    if (email === "") return;
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASEURL}/users/verify-account`,
        {
          email: email,
          otpCode: otpCode,
        }
      );
      setToastMessage(response?.data?.message);
      setShowToast(true);
      setToastType("success");
    } catch (error: any) {
      if (error?.response?.data.statusCode === 401) {
        setToastMessage(error?.response?.data?.msg);
      } else {
        setToastMessage(error?.response?.data?.data[0]?.message);
      }
      setShowToast(true);
      setToastType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-angular-gradient h-screen w-full pt-[300px]">
        <div className="main w-[40%] m-auto py-10 rounded-md bg-white flex flex-col justify-center items-center gap-5">
          <h1 className="lg:text-4xl text-lg font-black mt-3 text-black">
            Enter OTP
          </h1>
          <p className="w-full lg:w-[80%] text-center text-sm lg:text-lg xl:text-xl font-outfit text-[black]">
            {`A code has been sent to ${email}, enter the code
                      below to verify your account`}
          </p>
          <div className="flex gap-7 mt-4">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="input w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] text-center lg:text-lg border border-[#CACACA] rounded"
                placeholder="-"
                onKeyUp={(e) =>
                  e.key === "Backspace"
                    ? handleBackspace(e.target as HTMLInputElement, index)
                    : null
                }
                value={otp[index]}
                onChange={(e) =>
                  handleChange(e.target as HTMLInputElement, index)
                }
                ref={(el:any) => (inputRefs.current[index] = el)}
                onPaste={handlePaste}
              />
            ))}
          </div>
          <button
            onClick={handleSubmitOtp}
            className="text-white border-2 lg:text-lg xl:text-xl border-[#FF4D4D] bg-[#FF4D4D] w-[70%] py-2 mt-5  text-sm rounded"
          >
            {loading ? <Spinner size={25} color="#000000" /> : "Verify"}
          </button>
        </div>
      </div>
      {show_toast && <Toast message={toast_message} type={toast_type} />}
    </>
  );
};

export default ReactPin;
