"use client";
import React from "react";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { FaRegUser, FaShoppingCart, FaUser } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
const Nav = () => {
  const [mobileNav, setMobileNav] = useState<string>("hidden");
  return (
    <div
      className=" fixed top-0 w-full  h-[max] bg-[#ff0000] bg-opacity-80 flex justify-between flex-col items-center gap-5 p-5"
      style={{ zIndex: "1000" }}
    >
      <div className="w-full flex flex-col-reverse  lg:flex-row justify-center items-center">
        <div className="left w-full flex flex-col justify-start items-center gap-0 lg:gap-10 lg:w-[70%] lg:flex-row">
          <h1 className="text-3xl text-white font-bold lg:text-5xl">
            <Link href={"/"}> Gookway.</Link>
          </h1>
          <div className="search w-full flex justify-center items-center gap-3 my-3 lg:my-0">
            <input
              type="text"
              placeholder="Search products, brands, categories"
              className="w-full py-3 outline-none px-2 text-gray-600 text-sm"
            />
            <CiSearch size={34} color="white" />
          </div>
        </div>
        <div className="rigth w-full lg:w-[30%] flex justify-end lg:justify-center items-center gap-2 text-white">
          <FaRegUser size={30} color={"white"} />
          <HiOutlineShoppingCart size={30} color="white" />
        </div>
      </div>
      <div className={`lg:hidden w-full flex justify-start items-center`}>
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

      <div
        className={`bottomNav ${mobileNav}  w-full lg:flex gap-5 flex-col lg:flex-row justify-start items-start text-white`}
      >
        <div className="navs">
          <p className="text-lg lg:text-xl cursor-pointer">All Categories</p>
        </div>
        <div className="navs">
          <p className="text-xl cursor-pointer">Phone & Tablets</p>
        </div>
        <div className="navs">
          <p className="text-xl cursor-pointer">Consumer Electronics</p>
        </div>
        <div className="navs">
          <p className="text-xl cursor-pointer">Clothing</p>
        </div>
        <div className="navs">
          <p className="text-xl cursor-pointer">Home Furnishings</p>
        </div>
        <div className="navs">
          <p className="text-xl cursor-pointer">Beauty Health</p>
        </div>
        <div className="navs">
          <p className="text-xl cursor-pointer">Sport & Entertainment</p>
        </div>
        <div className="navs">
          <p className="text-xl cursor-pointer">More</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
