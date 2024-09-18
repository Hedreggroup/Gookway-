import Breadcrumbs from "@/components/Bread";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Link from "next/link";
import React from "react";
import { BiMinus } from "react-icons/bi";
import { HiOutlinePlusSm } from "react-icons/hi";
import Image from "next/image";
import Phonzy1 from "../../public/assets/phonzy1.png";
import Tv1 from "../../public/assets/tv1.png";
import Tv2 from "../../public/assets/tv2.png";
import Tv3 from "../../public/assets/tv3.png";
import Tv4 from "../../public/assets/tv4.png";
import mastercard from "../../public/assets/mastercard.png";
import wallet from "../../public/assets/wallet.png";
const page = () => {
  const scrumbs = {
    Home: "Home",
    Cart: "Checkout",
  };
  return (
    <>
      <Nav />
      <div>
        <div className="w-[90%] m-auto pt-[10%]">
          <Breadcrumbs items={scrumbs} />
          <h1 className="text-[44px] text-[#191919] font-black">Summary</h1>
          <div className="w-full address flex justify-between items-start my-4">
            <div className="left  w-[666px] flex flex-col justify-center items-center gap-5">
              <div className="top h-[228px] w-full rounded-[8px] p-5 shadow-md flex justify-center items-center">
                <div className="w-full ">
                  <h1 className="text-[20px] text-[#191919]">
                    Shipping Address
                  </h1>
                  <div className="details">
                    <p className="font-bold text-[18px] text-[#191919]">
                      Ojo Emmanuel
                    </p>
                    <p className="text-[18px] text-[#BFBFBF]">
                      +234 8141980326
                    </p>
                    <span className="text-[18px] text-[#BFBFBF]">
                      24.Oke-Pata,Erin-ile, Kwara State
                    </span>
                    <p className="text-[18px] text-[#BFBFBF]">
                      49 Erin-ile, Kwara State
                    </p>
                  </div>
                </div>
                <p className="text-[17px] text-[#2B7CFF] cursor-pointer">
                  Change
                </p>
              </div>
              <div className="bottom w-full h-[228px] rounded-[8px] p-5 shadow-md">
                <h1>Payment Method</h1>
                <div className="cards w-full flex flex-col justify-start items-center mt-5 gap-5">
                  <div className="card w-full flex justify-start items-center gap-5">
                    <input
                      type="radio"
                      style={{ width: "23.62px", height: "23.62px" }}
                    />
                    <Image
                      src={mastercard}
                      width={40}
                      height={40}
                      className=""
                      alt="master card"
                    />
                    <p className="text-[20px]">5099 79****** 4098</p>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <div className="card w-[80%] flex justify-start items-center gap-5">
                      <input
                        type="radio"
                        style={{ width: "23.62px", height: "23.62px" }}
                      />
                      <Image
                        src={wallet}
                        width={40}
                        height={40}
                        className=""
                        alt="master card"
                      />
                      <p className="text-[20px]">Add a new card</p>
                    </div>
                    <p className="text-[#2B7CFF] text-[18px] cursor-pointer">
                      View more
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right h-[355px] w-[495px] bg-[#FFFFFF] drop-shadow-md p-5">
              <h1 className="font-extrabold text-[20px]">Order Summary</h1>
              <div className="orders w-full flex flex-col justify-normal items-start gap-5">
                <div className="order w-full flex justify-between items-center">
                  <p className="font-extrabold">Subtotal</p>
                  <p className="text-[18px]">₦369,900</p>
                </div>
                <div className="order w-full flex justify-between items-center">
                  <p>Shipping Fee</p>
                  <p>₦10,000</p>
                </div>
                <div className="order w-full flex justify-between items-center">
                  <h4 className="font-bold">Total</h4>
                  <h4>₦1,929,900</h4>
                </div>
                <div className="w-full flex flex-col justify-center items-center mt-5 gap-5">
                  <button
                    type="button"
                    className="text-white bg-[#FF4D4D] rounded-[8px] w-[426px] h-[54px]"
                  >
                    Continue to Payment
                  </button>
                  <p className="text-[10px] text-[#BFBFBF]">
                    By proceeding, you are automatically accepting the{" "}
                    <span className="text-[#FF4D4D]">Terms & Conditions</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pTitle w-full bg-[#F6F6F6] flex justify-between items-center p-5">
            <div className="left w-[50%]">
              <p className="text-[20px] text-[##191919] font-black">PRODUCT</p>
            </div>
            <div className="right w-[50%] flex justify-end items-center gap-5">
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
    </>
  );
};

export default page;
