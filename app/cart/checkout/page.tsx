"use client"
import React, { useState } from "react";
import Breadcrumbs from "@/components/Bread";
import Modal from "@/components/Modal";
import { FaBullseye } from "react-icons/fa";

const page = () => {
  const scrumbs = {
    Home: "Home",
    Cart: "Cart",
    Checkout: "Checkout",
  };
const [information, setInformation] = useState<boolean>(true)
const [payment, setPayment] = useState<boolean>(false)
const [modal, setModal] = useState<boolean>(false)
  return (
    <>
      <div className="w-[90%] m-auto pt-32">
        <Breadcrumbs items={scrumbs} />
        <h1 className="w-full flex justify-center items-center font-black text-4xl">
          Checkout
        </h1>
        <div className="submenu w-full flex justify-center items-center gap-10 pt-5">
          <p className="text-lg font-bold border-b-2 border-[#FF4D4D] cursor-pointer" onClick={()=>{
            setPayment(false)
            setInformation(true)
          }}>
            Information
          </p>
          <p className="text-lg font-bold text-[#9C9898] cursor-pointer">Shipping</p>
          <p className="text-lg font-bold text-[#9C9898] cursor-pointer" onClick={()=>{
            setInformation(false)
            setPayment(true)
          }}>Payment</p>
        </div>
        <h1 className="text-4xl font-black text-[#191919]">Billing Details</h1>
        <div className="mains w-full grid grid-cols-2 gap-10">
         {information &&  <div className="left w-[100%]">
            <form
              action=""
              className="w-full mt-5 flex flex-col justify-start items-start gap-5"
            >
              <div className="group1 w-full flex justify-between items-start gap-5">
                <div className="formgroup w-[50%]">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="text"
                    className="w-full border border-black py-3 rounded-md px-2"
                  />
                </div>
                <div className="formgroup w-[50%]">
                  <label htmlFor="firstname">Last Name</label>
                  <input
                    type="text"
                    className="w-full border border-black py-3 rounded-md px-2"
                  />
                </div>
              </div>
              <div className="group2 w-full flex justify-between items-start gap-5 ">
                <div className="formgroup w-[50%]">
                  <label htmlFor="firstname">Phone</label>
                  <input
                    type="text"
                    className="w-full border border-black py-3 rounded-md px-2"
                  />
                </div>
                <div className="formgroup w-[50%]">
                  <label htmlFor="firstname">Email</label>
                  <input
                    type="email"
                    className="w-full border border-black py-3 rounded-md px-2"
                  />
                </div>
              </div>
              <div className="formgroup w-full">
                <label htmlFor="firstname">Address</label>
                <input
                  type="text"
                  className="w-full border border-black py-3 rounded-md px-2"
                />
              </div>
              <div className="group3 flex w-full justify-start items-center gap-5">
                <div className="formgroup w-[50%]">
                  <label htmlFor="firstname">Country</label>
                  <input
                    type="text"
                    className="w-full border border-black py-3 rounded-md px-2"
                  />
                </div>
                <div className="formgroup w-[50%]">
                  <label htmlFor="firstname">State</label>
                  <input
                    type="text"
                    className="w-full border border-black py-3 rounded-md px-2"
                  />
                </div>
              </div>
              <div className="group4 w-full flex justify-start items-center gap-5">
                <div className="formgroup w-[50%]">
                  <label htmlFor="firstname">City</label>
                  <input
                    type="text"
                    className="w-full border border-black py-3 px-2 rounded-md"
                  />
                </div>
                <div className="formgroup w-[50%]">
                  <label htmlFor="firstname">Postal Code</label>
                  <input
                    type="text"
                    className="w-full border border-black py-3 px-2 rounded-md"
                  />
                </div>
              </div>
            </form>
          </div>}
          {payment && <form
              action=""
              className="w-full mt-5 flex flex-col justify-start items-start gap-5"
            >
              <div className="group1 w-full flex justify-between items-start gap-5">
                <div className="formgroup w-[50%]">
                  <label htmlFor="firstname">Card vNumber</label>
                  <input
                    type="text"
                    className="w-full border border-black py-3 rounded-md px-2"
                    placeholder="1234 5678 9101 1213"
                  />
                </div>
                <div className="formgroup w-[50%]">
                  <label htmlFor="firstname">Expiry Date</label>
                  <input
                    type="text"
                    className="w-full border border-black py-3 rounded-md px-2"
                    placeholder="MM/YY"
                  />
                </div>
              </div>
              <div className="group2 w-full flex justify-between items-start gap-5 ">
                <div className="formgroup w-[50%]">
                  <label htmlFor="firstname">CVV</label>
                  <input
                    type="text"
                    className="w-full border border-black py-3 rounded-md px-2"
                    placeholder="123"
                  />
                </div>
                <div className="formgroup w-[50%]">
                  <label htmlFor="firstname">Card Pin</label>
                  <input
                    type="email"
                    className="w-full border border-black py-3 rounded-md px-2"
                    placeholder="Enter Pin"
                  />
                </div>
              </div>
            </form>}
          <div className="right w-[100%] min-h-[424px] bg-[#F9F9F9] p-5">
            <h1 className="text-xl font-black text-[#191919]">Order Summary</h1>
            <div className="orders w-full mt-5 flex flex-col justify-start items-center gap-5">
              <div className="order w-full flex justify-between items-center border border-[#BFBFBF] p-2">
                <p className="text-sm text-[#191919] w-[60%]">
                  XIAOMI Redmi A2+ 6.5 4G LTE 128 + 6GB AMOLED Screen...
                </p>
                <p className="text-sm text-[#191919]">1</p>
                <p className="text-sm text-[#191919]">₦99,000</p>
              </div>
              <div className="order w-full flex justify-between items-center border border-[#BFBFBF] p-2">
                <p className="text-sm text-[#191919] w-[60%]">
                  XIAOMI Redmi A2+ 6.5 4G LTE 128 + 6GB AMOLED Screen...
                </p>
                <p className="text-sm text-[#191919]">1</p>
                <p className="text-sm text-[#191919]">₦99,000</p>
              </div>
              <div className="order w-full flex justify-between items-center border border-[#BFBFBF] p-2">
                <p className="text-sm text-[#191919] w-[60%]">
                  XIAOMI Redmi A2+ 6.5 4G LTE 128 + 6GB AMOLED Screen...
                </p>
                <p className="text-sm text-[#191919]">1</p>
                <p className="text-sm text-[#191919]">₦99,000</p>
              </div>
              <div className="order w-full flex justify-between items-center border border-[#BFBFBF] p-2">
                <p className="text-sm text-[#191919] w-[60%]">
                  XIAOMI Redmi A2+ 6.5 4G LTE 128 + 6GB AMOLED Screen...
                </p>
                <p className="text-sm text-[#191919]">1</p>
                <p className="text-sm text-[#191919]">₦99,000</p>
              </div>
              <div className="order w-full flex justify-between items-center border border-[#BFBFBF] p-2">
                <p className="text-sm text-[#191919] w-[60%]">
                  XIAOMI Redmi A2+ 6.5 4G LTE 128 + 6GB AMOLED Screen...
                </p>
                <p className="text-sm text-[#191919]">1</p>
                <p className="text-sm text-[#191919]">₦99,000</p>
              </div>
              <div className="order w-full flex justify-between items-center border border-[#BFBFBF] p-2">
                <p className="text-sm text-[#191919] w-[60%]">
                  XIAOMI Redmi A2+ 6.5 4G LTE 128 + 6GB AMOLED Screen...
                </p>
                <p className="text-sm text-[#191919]">1</p>
                <p className="text-sm text-[#191919]">₦99,000</p>
              </div>
            </div>
            <div className="button w-full flex justify-end items-center mt-5">
              <button
                type="button"
                className="bg-[#FF4D4D] text-white w-[40%] rounded-md py-3"
              >
                Check out
              </button>
            </div>
          </div>
        </div>
        <div className="section w-full h-[200px] my-10 bg-[#F6F6F6]"></div>
      </div>
    { modal &&  <Modal/>}
    </>
  );
};

export default page;
