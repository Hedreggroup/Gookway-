import React from "react";
import Breadcrumbs from "./Bread";
import Image from "next/image";
import Phonzy1 from "../public/assets/phonzy1.png";
import Tv1 from "../public/assets/tv1.png";
import Tv2 from "../public/assets/tv2.png";
import Tv3 from "../public/assets/tv3.png";
import Tv4 from "../public/assets/tv4.png";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BiMinus } from "react-icons/bi";
import Link from "next/link";
import Footer from "./Footer";
const Cart = () => {
  const scrumbs = {
    Home: "Home",
    Cart: "Cart",
  };

  return (
    <div>
      <div className="w-[90%] m-auto">
        <Breadcrumbs items={scrumbs} />
        <h1 className="text-[44px] text-[#191919] font-black">My Cart</h1>
        <div className="pTitle w-full bg-[#F6F6F6] flex justify-between items-center p-5">
          <div className="left w-[50%]">
            <p className="text-[20px] text-[##191919] font-black">PRODUCT</p>
          </div>
          <div className="right w-[43%] flex justify-between items-center gap-5">
            <p className="text-[20px] text-[##191919] font-black">PRICE</p>
            <p className="text-[20px] text-[##191919] font-black">QTY</p>
            <p className="text-[20px] text-[##191919] font-black">TOTAL</p>
          </div>
        </div>
        <div className="cartItems w-full mt-3 grid grid-cols-1 gap-10">
          <div className="cartItem w-full flex justify-between items-center">
            <Image src={Phonzy1} alt="cart item image" />
            <div className="title">
              <p className="text-lg text-[#BFBFBF]">PHONE</p>
              <div className="w-64">
                <span className="block text-xl text-[#191919] overflow-hidden whitespace-nowrap overflow-ellipsis">
                  XIAOMI Redmi A2+ 6.5 4G LTE 128 + 6GB AMOLED Screen and more
                  details...
                </span>
              </div>
            </div>
            <p className="text-lg font-black">₦99,000</p>
            <div className="quantity flex justify-center items-center gap-3 border border-gray-300 p-2">
              <BiMinus size={20} className="cursor-pointer" />
              <p className="text-lg font-bold">1</p>
              <HiOutlinePlusSm size={20} className="cursor-pointer" />
            </div>
            <div className="total">
              <p className="text-lg font-black">₦99,000</p>
            </div>
          </div>
          <div className="cartItem w-full flex justify-between items-center">
            <Image src={Tv1} alt="cart item image" />
            <div className="title">
              <p className="text-lg text-[#BFBFBF]">ELECTRONICS</p>
              <div className="w-64">
                <span className="block text-xl text-[#191919] overflow-hidden whitespace-nowrap overflow-ellipsis">
                  itel 32 Inches LED TV (A3250) + 1 year Warranty
                </span>
              </div>
            </div>
            <p className="text-lg font-black">₦80,000</p>
            <div className="quantity flex justify-center items-center gap-3 border border-gray-300 p-2">
              <BiMinus size={20} className="cursor-pointer" />
              <p className="text-lg font-bold">1</p>
              <HiOutlinePlusSm size={20} className="cursor-pointer" />
            </div>
            <div className="total">
              <p className="text-lg font-black">₦80,000</p>
            </div>
          </div>
          <div className="cartItem w-full flex justify-between items-center">
            <Image src={Tv2} alt="cart item image" />
            <div className="title">
              <p className="text-lg text-[#BFBFBF]">SPORTS & ENTERTAINMENT</p>
              <div className="w-64">
                <span className="block text-xl text-[#191919] overflow-hidden whitespace-nowrap overflow-ellipsis">
                  Sony Red Dead Redemption 2 PS4
                </span>
              </div>
            </div>
            <p className="text-lg font-black">₦34,000</p>
            <div className="quantity flex justify-center items-center gap-3 border border-gray-300 p-2">
              <BiMinus size={20} className="cursor-pointer" />
              <p className="text-lg font-bold">1</p>
              <HiOutlinePlusSm size={20} className="cursor-pointer" />
            </div>
            <div className="total">
              <p className="text-lg font-black">₦34,000</p>
            </div>
          </div>
          <div className="cartItem w-full flex justify-between items-center">
            <Image src={Tv3} alt="cart item image" />
            <div className="title">
              <p className="text-lg text-[#BFBFBF]">LAPTOP</p>
              <div className="w-64">
                <span className="block text-xl text-[#191919] overflow-hidden whitespace-nowrap overflow-ellipsis">
                  Apple MacBook Pro 16.2" - 32GB - 1TB - 10 Cores - M1 Max -
                  Silver
                </span>
              </div>
            </div>
            <p className="text-lg font-black">₦699,000</p>
            <div className="quantity flex justify-center items-center gap-3 border border-gray-300 p-2">
              <BiMinus size={20} className="cursor-pointer" />
              <p className="text-lg font-bold">1</p>
              <HiOutlinePlusSm size={20} className="cursor-pointer" />
            </div>
            <div className="total">
              <p className="text-lg font-black">₦699,000</p>
            </div>
          </div>
          <div className="cartItem w-full flex justify-between items-center">
            <Image src={Tv4} alt="cart item image" />
            <div className="title">
              <p className="text-lg text-[#BFBFBF]">FASHION</p>
              <div className="w-64">
                <span className="block text-xl text-[#191919] overflow-hidden whitespace-nowrap overflow-ellipsis">
                  Male Formal Glossy Tassel Brogue Leather Shoes Loafers
                </span>
              </div>
            </div>
            <p className="text-lg font-black">₦23,000</p>
            <div className="quantity flex justify-center items-center gap-3 border border-gray-300 p-2">
              <BiMinus size={20} className="cursor-pointer" />
              <p className="text-lg font-bold">1</p>
              <HiOutlinePlusSm size={20} className="cursor-pointer" />
            </div>
            <div className="total">
              <p className="text-lg font-black">₦23,000</p>
            </div>
          </div>
        </div>
        <div className="promo w-full flex justify-between items-center gap-10 my-10">
          <div className="first w-[50%] border border-[#BFBFBF] flex justify-center items-center gap-10 p-3">
            <input
              type="text"
              placeholder="Enter Coupon Code (e.g BYSDC)"
              className="text-[#BFBFBF] w-[70%] outline-none"
            />
            <p className="text-[#191919] text-lg font-bold">Apply Code</p>
          </div>
          <div className="second w-[50%] border border-[#BFBFBF] flex justify-center items-center gap-20 p-3">
            <p>SUB TOTAL</p>
            <p className="text-[#FF4D4D]">
              ₦1,929,00,000{" "}
              <span className="text-[#BFBFBF] mx-3">Excl, Shipping Fee</span>
            </p>
          </div>
        </div>
        <div className="lastPromo w-[50%] ml-auto flex justify-end items-center gap-5 my-10">
          <p className="w-[50%] text-center border border-[#9C9898] p-3 rounded-md cursor-pointer">
            Continue Shopping
          </p>
          <p className="bg-[#FF4D4D] text-lg text-white w-[50%] text-center p-3 rounded-md cursor-pointer">
            <Link href={"/cart/checkout"}>Next</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
