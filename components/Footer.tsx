import React from "react";
import Image from "next/image";
import mastercard from "../public/assets/mastercard.png";
import visa from "../public/assets/visa.png";
import paypal from "../public/assets/paypal.png";
const Footer = () => {
  return (
    <>
      <div className="h-[600px] w-full bg-[#dcdcdc] mt-10 flex justify-center items-start pt-20">
        <div className="left w-[50%] flex justify-center items-center gap-10 ">
          <div className="flex flex-col justify-start items-start gap-1">
            <p className="text-2xl font-bold">SHOP</p>
            <li className="text-xl list-none text-gray-500">Annoucement</li>
            <li className="text-xl list-none text-gray-500">All Collections</li>
            <li className="text-xl list-none text-gray-500">Flash Sales</li>
            <li className="text-xl list-none text-gray-500">Official Stores</li>
          </div>
          <div className="flex flex-col justify-start items-start gap-1">
            <p className="text-2xl font-bold">COMPANY</p>
            <li className="text-xl list-none text-gray-500">About Us</li>
            <li className="text-xl list-none text-gray-500">Contact Gook</li>
            <li className="text-xl list-none text-gray-500">Affiliates</li>
            <li className="text-xl list-none text-gray-500">Policies </li>
          </div>
          <div className="flex flex-col justify-start items-start gap-1">
            <p className="text-2xl font-bold">SUPPORT</p>
            <li className="text-xl list-none text-gray-500">FAQS</li>
            <li className="text-xl list-none text-gray-500">Cookie Policy</li>
            <li className="text-xl list-none text-gray-500">Terms Of Use</li>
            <li className="text-xl list-none text-gray-500">Security Center</li>
          </div>
        </div>
        <div className="right w-[50%]">
          <div className="logo flex justify-start items-end gap-1 mb-4">
            <h1 className="text-5xl font-black">Gookway</h1>
            <span className="h-[10px] w-[10px] bg-[#ff0000] rounded-full"></span>
          </div>
          <p className="text-xl text-gray-500 mb-4">
            Gook is the leading retail company for affordable and durable mobile
            phones, computers, accessories, and various types of Electronics. We
            consider it necessary to fill up this need in the global information
            technology sector with emphasis on Africa market
          </p>
          <div className="w-[60%]">
            <p className="text-xl mb-3" style={{ fontWeight: "900" }}>
              Sign Up For Newsletter
            </p>
            <p className="text-xl text-gray-500">
              Get the latest and greatest offers from us by subscribing to our
              newsletter. Join{" "}
              <span className="text-xl font-black text-[#ff0000]">
                1,000,000+
              </span>{" "}
              Subscribers.
            </p>
          </div>
          <div className="w-full mt-10 pr-5">
            <input
              type="text"
              className="w-[70%] py-4 px-3 outline-none"
              placeholder="Your email address"
            />
            <button
              type="button"
              className="w-[30%] bg-[#ff0000] text-white py-4"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="copyRight h-[200px] bg-black w-full flex justify-between items-center p-5">
        <p className="text-2xl text-white w-[50%]">
          Copyright © gook.ng 2024 All Rights Reserved
        </p>
        <div className="w-[50%] flex justify-center items-center gap-10">
          <Image src={mastercard} alt="mastercard" />
          <Image src={visa} alt="visa" />
          <Image src={paypal} alt="paypal" />
        </div>
      </div>
    </>
  );
};

export default Footer;
