"use client";
import React, { useState } from "react";
import Image from "next/image";
import mastercard from "../public/assets/mastercard.png";
import visa from "../public/assets/visa.png";
import paypal from "../public/assets/paypal.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { IoLogoApple } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";
import Link from "next/link";
import DownloadAppComponent from "./DownloadAppComponent";

const Footer = () => {
  // const [modal, showModal] = useState(false);

  return (
    <div>
      <div
        className="h-full md:h-[600px] w-full bg-[#dcdcdc] mt-10 flex flex-col sm:flex-row justify-start items-start pt-20"
        id="footer"
      >
        <div className="left  p-8 sm:p-4 px-2 sm:px-16 ">
          <div className=" w-full flex flex-wrap  justify-start sm:items-center gap-10 ">
            <div className="flex flex-col justify-start items-start gap-1">
              <p className="text-xl font-bold">SHOP</p>
              <li className="text-sm list-none text-gray-500">
                All Collections
              </li>
              <li className="text-sm list-none text-gray-500">Flash Sales</li>
              <li className="text-sm list-none text-gray-500">
                Official Stores
              </li>
            </div>
            <div className="flex flex-col justify-end items-start gap-1">
              <p className="text-xl font-bold">COMPANY</p>
              <Link href={"/about"}>
                <li className="text-sm list-none text-gray-500">About Us</li>
              </Link>
              <Link href={"/contact"}>
                <li className="text-sm list-none text-gray-500">Contact Us</li>
              </Link>
              <Link href={"/become-vendor"}>
                <li className="text-sm list-none text-gray-500">
                  Become a Vendor
                </li>
              </Link>
              <Link href={"/affiliates"}>
                <li className="text-sm list-none text-gray-500">Affiliates</li>
              </Link>
              <Link href={"/terms-of-use"}>
                <li className="text-sm list-none text-gray-500">Policies </li>
              </Link>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <p className="text-xl font-bold">SUPPORT</p>
              <Link href={"/faqs"}>
                <li className="text-sm list-none text-gray-500">FAQS</li>
              </Link>

              <Link href={"/return-policy"}>
                <li className="text-sm list-none text-gray-500">
                  Return Policy
                </li>
              </Link>
              <Link href={"/terms-of-use"}>
                <li className="text-sm list-none text-gray-500">
                  Terms Of Use
                </li>
              </Link>
            </div>
          </div>
          <DownloadAppComponent />
        </div>
        <div className="right w-[100%] md:w-[50%] p-8 sm:p-0">
          <div className="logo flex justify-start items-end gap-1 mb-4">
            <h1 className="text-2xl font-black">Gookway</h1>
            <span className="h-[10px] w-[10px] bg-[#ff0000] rounded-full"></span>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Gookway is the leading retail company for affordable and durable
            mobile phones, computers, accessories, and various types of
            Electronics. We consider it necessary to fill up this need in the
            global information technology sector with emphasis on Africa market
          </p>
          <div className="w-[60%]">
            <p className="text-sm mb-3" style={{ fontWeight: "900" }}>
              Sign Up For Newsletter
            </p>
            <p className="text-sm text-gray-500">
              Get the latest and greatest offers from us by subscribing to our
              newsletter. Join{" "}
              <span className="text-sm font-black text-[#ff0000]">
                1,000,000+
              </span>{" "}
              Subscribers.
            </p>
          </div>
          <div className="w-[60%] mt-4">
            <p className="text-sm mb-3" style={{ fontWeight: "900" }}>
              Reach out to us
            </p>
            <p className="text-sm text-gray-500">
              08092226085
              <br />
              <a className="text-sm font-black text-[#ff0000]">
                help@gookway.com
              </a>
            </p>
          </div>
          {/* 
          <div className="w-full mt-10 pr-5">
            <input
              type="text"
              className="w-[70%] py-4 px-3 outline-none"
              placeholder="Your email address"
            />
            <button
              type="button"
              className="w-[30%] text-sm lg:text-lg xl:text-xl  bg-[#ff0000] text-white py-4"
            >
              Subscribe
            </button>
          </div> */}
        </div>
      </div>
      <div className="h-auto  bg-black w-full flex flex-col sm:flex-row justify-between items-center p-5">
        <p className="text-sm text-white sm:w-[50%]">
          Copyright © gookway.com 2024 All Rights Reserved
          <p className="text-white w-[50%]" style={{ fontSize: "12px" }}>
            A subsidiary of Hedreg Group Ltd
          </p>
        </p>
        <div className="w-[50%] flex justify-center items-center gap-10">
          <Image src={mastercard} className="w-12 h-12" alt="mastercard" />
          <Image src={visa} alt="visa" className="w-12 h-12" />
          <Image src={paypal} alt="paypal" className="w-12 h-12" />
        </div>
      </div>
      <div className="bg-black text-center w-full">
        <p className="text-xm text-white " style={{ fontSize: "9px" }}>
          Developed by Achills Technologies
        </p>
      </div>
    </div>
  );
};

export default Footer;
