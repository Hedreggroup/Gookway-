"use client";
import React, { useEffect } from "react";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import {
  FaRegUser,
  FaShoppingCart,
  FaUser,
  FaUserCheck,
  FaUserCircle,
} from "react-icons/fa";
import whiteLogo from "@/app/assets/white-logo.png";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useGlobalStore } from "./store/userStore";
import axios from "axios";
import { IoLogOutOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Toast from "./utils/Toastify/Toast";
import Image from "next/image";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useCart } from "@/hooks/useCart";
const Nav = () => {
  // const { cart } = useGlobalStore();
  const { cart, addToCart, isLoading: ldnToCart, error } = useCart();

  const router = useRouter();
  const [mobileNav, setMobileNav] = useState<string>("hidden");
  const [profile, setProfile] = useState<any>();
  const [token, setToken] = useLocalStorage<any>("token", "");

  const [show_toast, setShowToast] = useState(false);
  const [toast_message, setToastMessage] = useState<string>();
  const [toast_type, setToastType] = useState<
    "success" | "error" | "info" | "warning"
  >("success");

  console.log("Cart form navi", typeof cart, cart);

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

  const fetchProfile = async () => {
    if (!token) {
      console.log("No token provided");
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/users`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Ensure the content type is correct if needed
        },
        credentials: "include", // Use if your API requires credentials
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error: ${response.status} ${errorData.message}`);
      }

      const data = await response.json();
      setProfile(data?.data);
      // console.log("Profile fetched successfully:", data.data);
    } catch (error: any) {
      console.error("Error fetching profile:", error.message);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [token]);
  // console.log(profile);
  return (
    <>
      <div
        className=" fixed top-0 w-full  h-[max] bg-[#ff0000] bg-opacity-80 flex justify-between flex-col items-center gap-5 p-5"
        style={{ zIndex: "1000" }}
      >
        <div className="w-full flex flex-col-reverse  lg:flex-row justify-center items-center">
          <div className="left w-full flex flex-col justify-start items-center gap-0 lg:gap-10 lg:w-[70%] lg:flex-row">
            <h1 className="text-xl text-white font-bold lg:text-2xl">
              <Link
                href={"/"}
                className="flex items-center justify-center gap-0"
              >
                <Image
                  src={whiteLogo} // Path to your logo
                  alt="Center Image"
                  className="-mr-2 inset-0 m-auto animate-zoom"
                  width={50} // Specify the width of the logo
                  height={50} // Specify the height of the logo
                />
                Gookway.
              </Link>
            </h1>
            <div className="w-full flex items-center gap-2">
              <div className={`lg:hidden  flex justify-start items-center`}>
                <p
                  className="text-xl cursor-pointer text-white"
                  onClick={() => {
                    if (mobileNav === "hidden") {
                      setMobileNav("flex");
                    } else {
                      setMobileNav("hidden");
                    }
                  }}
                >
                  <GiHamburgerMenu size={34} />
                </p>
              </div>
              <div className="search w-full flex justify-center items-center gap-3 my-3 lg:my-0">
                <input
                  type="text"
                  placeholder="Search products, brands, categories"
                  className="w-full py-3 outline-none px-2 text-gray-600 text-sm"
                />
                <CiSearch size={34} color="white" />
              </div>
            </div>
          </div>
          <div className="rigth w-full lg:w-[30%] flex justify-end lg:justify-center items-center gap-2 text-white relative">
            {profile ? (
              <div className="flex justify-start items-center gap-4">
                <div className="flex flex-col justify-center items-center gap-1">
                  <h1>{`${profile?.user?.full_name}`.toLocaleUpperCase()}</h1>
                  {/* <p className="p-0 m-0">{profile?.user?.role}</p> */}
                </div>
                <IoLogOutOutline
                  size={30}
                  className="cursor-pointer"
                  onClick={handleLogout}
                />
                <Link href={"/user/profile"}>
                  <FaUserCircle size={30} className="cursor-pointer" />
                </Link>
              </div>
            ) : (
              <Link href={"/user/login"}>
                <FaRegUser size={30} color={"white"} />
              </Link>
            )}
            <Link href={"/cart"}>
              <div className="relative">
                <HiOutlineShoppingCart size={30} color="white" />

                <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {cart?.length || 0}
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div
          className={`bottomNav ${mobileNav}  w-full lg:flex gap-5 flex-col lg:flex-row justify-start items-start text-white`}
        >
          <div className="navs">
            <p className="text-lg lg:text-sm cursor-pointer">All Categories</p>
          </div>
          <div className="navs">
            <p className="text-sm cursor-pointer">Phone & Tablets</p>
          </div>
          <div className="navs">
            <p className="text-sm cursor-pointer">Consumer Electronics</p>
          </div>
          <div className="navs">
            <p className="text-sm cursor-pointer">Clothing</p>
          </div>
          <div className="navs">
            <p className="text-sm cursor-pointer">Home Furnishings</p>
          </div>
          <div className="navs">
            <p className="text-sm cursor-pointer">Beauty Health</p>
          </div>
          <div className="navs">
            <p className="text-sm cursor-pointer">Sport & Entertainment</p>
          </div>
          <div className="navs">
            <p className="text-sm cursor-pointer">More</p>
          </div>
        </div>
      </div>
      {show_toast && <Toast message={toast_message} type={toast_type} />}
    </>
  );
};

export default Nav;
