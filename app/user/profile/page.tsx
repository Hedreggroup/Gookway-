"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import profile from "../../../public/assets/profile.png";
import { TbDetails, TbTruckDelivery } from "react-icons/tb";
import { FaCartPlus } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BiLogOutCircle } from "react-icons/bi";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import Toast from "@/components/utils/Toastify/Toast";

const Page = () => {
  const [profiles, setProfile] = useState<any>(null);
  const router = useRouter();
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [show_toast, setShowToast] = useState(false);
  const [toast_message, setToastMessage] = useState<string>();
  const [headers, setHeader] = useState<string>("Profile Details");
  const [showProfile, setShowProfile] = useState<boolean>(true);
  const [toast_type, setToastType] = useState<
    "success" | "error" | "info" | "warning"
  >("success");
  let token: any;
  // Fetch token from localStorage after component mounts
  useEffect(() => {
    token = localStorage.getItem("catcha%$#%");
    if (token) {
      fetchProfile(token);
    }
  }, []);

  const fetchProfile = async (token: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/users`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error: ${response.status} ${errorData.message}`);
      }

      const data = await response.json();
      setProfile(data?.data);
    } catch (error: any) {
      console.error("Error fetching profile:", error.message);
    }
  };

  // Update state when profile data changes
  useEffect(() => {
    if (profiles?.user) {
      setFullName(profiles.user.full_name || "");
      setEmail(profiles.user.email || "");
    }
  }, [profiles]);

  // Separate onChange handlers for different inputs
  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleLogout = async () => {
    if (!token) {
      return;
    }
    localStorage.clear();
    setToastMessage("logout successfully");
    router.push("/");
    setShowToast(true);
    setToastType("success");
    window.location.reload();
  };

  console.log(profiles);

  return (
    <>
      <div>
        <div className="mt-40 w-[90%] m-auto">
          <section className="w-full grid grid-cols-2">
            <div className="left p-5 w-[70%] m-auto border border-[#BFBFBF] rounded-md flex flex-col justify-center items-center">
              <div className="image h-[180px] w-[180px] rounded-full">
                <Image src={profile} alt="profile image" />
              </div>
              <p className="text-3xl font-black">{profiles?.user.full_name}</p>
              <span className="text-[#BFBFBF] border-b-2 border-b-[#BFBFBF] mb-4">
                {profiles?.user.email ?? "please wait.."}
              </span>
              <span className="text-[black] text-lg font-bold  mb-4">
                Balance: ₦{profiles?.user.balance ?? 0}
              </span>
              <div className="deliveries w-[60%] m-auto flex justify-center items-center gap-3 flex-col">
                <div className="w-full flex justify-start items-start gap-4">
                  <TbTruckDelivery size={34} />
                  <p
                    className="text-lg font-black"
                    onClick={() => {
                      setHeader("Orders");
                      setShowProfile(false)
                    }}
                  >
                    Orders
                  </p>
                </div>
                <div className="w-full flex justify-start items-start gap-4">
                  <FaCartPlus size={34} />
                  <p
                    className="text-lg font-black"
                    onClick={() => {
                      setHeader("Cart");
                    }}
                  >
                    Cart
                  </p>
                </div>
                <div className="w-full flex justify-start items-start gap-4">
                  <IoLocationOutline size={34} />
                  <p
                    className="text-lg font-black"
                    onClick={() => {
                      setHeader("Address");
                    }}
                  >
                    Address
                  </p>
                </div>
                <div className="w-full flex justify-start items-start gap-4">
                  <TbDetails size={34} />
                  <p
                    className="text-lg font-black"
                    onClick={() => {
                      setHeader("Account Details");
                    }}
                  >
                    Account Details
                  </p>
                </div>
                <div
                  className="w-full flex justify-start items-start gap-4 cursor-pointer"
                  onClick={handleLogout}
                >
                  <BiLogOutCircle size={34} />
                  <p className="text-lg font-black">Logout</p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="top w-full bg-[#F6F6F6] h-60"></div>
              <h1 className="text-3xl font-black border-b-2 border-b-[#FF4D4D] w-[35%] mt-5">
                {headers}
              </h1>
              {showProfile && (
                <form
                  action=""
                  className="w-full flex flex-col justify-start item-center gap-5"
                >
                  <div className="group w-full flex justify-start items-center gap-5 mt-5">
                    <div className="formgroup w-full">
                      <label htmlFor="firstname" className="text-xl font-bold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={handleFullNameChange}
                        className="w-full outline-none p-2 rounded-md border border-[#BFBFBF]"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  <div className="group w-full flex justify-start items-center gap-5">
                    <div className="formgroup w-full">
                      <label htmlFor="email" className="text-xl font-bold">
                        Email Address
                      </label>
                      <input
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full outline-none p-2 rounded-md border border-[#BFBFBF]"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="formgroup w-full">
                      <label htmlFor="picture" className="text-xl font-bold">
                        Picture
                      </label>
                      <input
                        type="file"
                        className="w-full outline-none p-2 rounded-md border border-[#BFBFBF]"
                        placeholder="Upload your picture"
                      />
                    </div>
                  </div>
                  <div className="group">
                    <button
                      type="button"
                      className="bg-[#FF4D4D] text-white text-xl w-[30%] py-2"
                    >
                      Edit Profile
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>
        </div>
        <Footer />
      </div>
      {show_toast && <Toast message={toast_message} type={toast_type} />}
    </>
  );
};

export default Page;
