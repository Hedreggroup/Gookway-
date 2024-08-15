import Image from "next/image";
import React from "react";
import profile from "../../../public/assets/profile.png";
import { TbDetails, TbTruckDelivery } from "react-icons/tb";
import { FaCartPlus } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BiLogOutCircle } from "react-icons/bi";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <div>
      <div className="mt-40 w-[90%] m-auto">
        <section className="w-full grid grid-cols-2">
          <div className="left p-5 w-[50%] m-auto border border-[#BFBFBF] rounded-md flex flex-col justify-center items-center">
            <div className="image h-[200px] w-[200px] rounded-full">
              <Image src={profile} alt="profile image" />
            </div>
            <p className="text-3xl font-black">Emmanuel Ojo</p>
            <span className="text-[#BFBFBF] border-b-2 border-b-[#BFBFBF] mb-4">
              emmanuelojo@gmail.com
            </span>
            <div className="deliveries w-[60%] m-auto flex justify-center items-center gap-3 flex-col">
              <div className="w-full flex justify-start items-start gap-4">
                <TbTruckDelivery size={34} />
                <p className="text-lg font-black">Orders</p>
              </div>
              <div className="w-full flex justify-start items-start gap-4">
                <FaCartPlus size={34} />
                <p className="text-lg font-black">Cart</p>
              </div>
              <div className="w-full flex justify-start items-start gap-4">
                <IoLocationOutline size={34} />
                <p className="text-lg font-black">Address</p>
              </div>
              <div className="w-full flex justify-start items-start gap-4">
                <TbDetails size={34} />
                <p className="text-lg font-black">Account Details</p>
              </div>
              <div className="w-full flex justify-start items-start gap-4">
                <BiLogOutCircle size={34} />
                <p className="text-lg font-black">Logout</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="top w-full bg-[#F6F6F6] h-60"></div>
            <h1 className="text-3xl font-black border-b-2 border-b-[#FF4D4D] w-[37%] mt-5">
              Account Details
            </h1>
            <form
              action=""
              className="w-full flex flex-col justify-start item-center gap-5"
            >
              <div className="group w-full flex justify-start items-center gap-5 mt-5">
                <div className="formgroup w-full">
                  <label htmlFor="firstname" className="text-xl font-bold">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full outline-none p-2 rounded-md border border-[#BFBFBF]"
                    placeholder="enter first name"
                  />
                </div>
                <div className="formgroup w-full">
                  <label htmlFor="firstname" className="text-xl font-bold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full outline-none p-2 rounded-md border border-[#BFBFBF]"
                    placeholder="enter first name"
                  />
                </div>
              </div>
              <div className="group w-full flex justify-start items-center gap-5">
                <div className="formgroup w-full">
                  <label htmlFor="firstname" className="text-xl font-bold">
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="w-full outline-none p-2 rounded-md border border-[#BFBFBF]"
                    placeholder="enter email"
                  />
                </div>
                <div className="formgroup w-full">
                  <label htmlFor="firstname" className="text-xl font-bold">
                    Password
                  </label>
                  <input
                    type="text"
                    className="w-full outline-none p-2 rounded-md border border-[#BFBFBF]"
                    placeholder="enter password"
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
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default page;
