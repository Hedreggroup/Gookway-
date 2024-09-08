"use client";
import React, { useEffect, useState } from "react";
import Cart from "@/components/Cart";
import Nav from "@/components/Nav";
import Link from "next/link";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Bread";
import Image from "next/image";
import { BiMinus } from "react-icons/bi";
import { HiOutlinePlusSm } from "react-icons/hi";
import Phonzy1 from "../../public/assets/phonzy1.png";
import Tv1 from "../../public/assets/tv1.png";
import Tv2 from "../../public/assets/tv2.png";
import Tv3 from "../../public/assets/tv3.png";
import Tv4 from "../../public/assets/tv4.png";
import axios from "axios";
import { useGlobalStore } from "@/components/store/userStore";
import Toast from "@/components/utils/Toastify/Toast";
const page = () => {
  const scrumbs = {
    Home: "Home",
    Cart: "Cart",
  };
  const [cart, setCart] = useState<any>();
  const token = localStorage.getItem("catcha%$#%");
  // const { emptyCart } = useGlobalStore();
  const emptyCart = useGlobalStore((state) => state.emptyCart);

  const [show_toast, setShowToast] = useState(false);
  const [toast_message, setToastMessage] = useState<string>();
  const [toast_type, setToastType] = useState<
    "success" | "error" | "info" | "warning"
  >("success");
  const [loading, setLoading] = useState<boolean>(false);
  const handleFetchCarts = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASEURL}/cart`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );
    setCart(response?.data.data);
    return response?.data.data.products;
  };

  const handleEmptyCart = async () => {
    setLoading(true);
    const response = await axios
      .delete(
        `${process.env.NEXT_PUBLIC_BASEURL}/cart`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add the Bearer token here
          },
          withCredentials: true,
        }
      )
      .catch((error: any) => {
        console.log(error)
        setToastMessage(error?.response?.data?.msg);
        setShowToast(true);
        setToastType("error");
        setLoading(false);
      });

    if (response) {
      handleFetchCarts()
      emptyCart()
      setToastMessage("Cart cleared");
      setShowToast(true);
      setToastType("success");
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchCarts();
  }, []);
  return (
    <>
      <Nav />
      <div className="mt-60 lg:mt-40">
        {/* <Cart /> */}
        <div>
          <div className="w-[90%] m-auto">
            <Breadcrumbs items={scrumbs} />
<<<<<<< HEAD
            <h1 className="text-2xl text-[#191919] font-black">My Cart</h1>
            <div className="pTitle w-full bg-[#F6F6F6] flex justify-between items-center p-5">
              <div className="left w-[50%]">
                <p className="text-[16px] text-[##191919] font-black">
=======
            <div className="w-full flex justify-between items-center">
              <h1 className="text-[44px] text-[#191919] font-black">My Cart</h1>
              <p className="bg-[#FF4D4D] text-lg text-white w-[20%] text-center p-3 rounded-md cursor-pointer" onClick={handleEmptyCart}>
                Empty Cart
              </p>
            </div>
            <div className="pTitle w-full bg-[#F6F6F6] flex justify-between items-center p-5">
              <div className="left w-[50%]">
                <p className="text-[20px] text-[##191919] font-black">
>>>>>>> dev
                  PRODUCT
                </p>
              </div>
              <div className="right w-[43%] flex justify-between items-center gap-5">
<<<<<<< HEAD
                <p className="text-[16px] text-[##191919] font-black">PRICE</p>
                <p className="text-[16px] text-[##191919] font-black">QTY</p>
                <p className="text-[16px] text-[##191919] font-black">TOTAL</p>
              </div>
            </div>
            <div className="cartItems w-full mt-3 grid grid-cols-1 gap-10">
              <div className="cartItem w-full flex justify-between items-center">
                <Image src={Phonzy1} alt="cart item image" />
                <div className="title">
                  <p className="text-md text-[#BFBFBF]">PHONE</p>
                  <div className="w-64">
                    <span className="block text-xl text-[#191919] overflow-hidden whitespace-nowrap overflow-ellipsis">
                      XIAOMI Redmi A2+ 6.5 4G LTE 128 + 6GB AMOLED Screen and
                      more details...
                    </span>
                  </div>
                </div>
                <p className="text-md font-black">₦99,000</p>
                <div className="quantity flex justify-center items-center gap-3 border border-gray-300 p-2">
                  <BiMinus size={20} className="cursor-pointer" />
                  <p className="text-md font-bold">1</p>
                  <HiOutlinePlusSm size={20} className="cursor-pointer" />
                </div>
                <div className="total">
                  <p className="text-md font-black">₦99,000</p>
                </div>
              </div>
              <div className="cartItem w-full flex justify-between items-center">
                <Image src={Tv1} alt="cart item image" />
                <div className="title">
                  <p className="text-md text-[#BFBFBF]">ELECTRONICS</p>
                  <div className="w-64">
                    <span className="block text-xl text-[#191919] overflow-hidden whitespace-nowrap overflow-ellipsis">
                      itel 32 Inches LED TV (A3250) + 1 year Warranty
                    </span>
                  </div>
                </div>
                <p className="text-md font-black">₦80,000</p>
                <div className="quantity flex justify-center items-center gap-3 border border-gray-300 p-2">
                  <BiMinus size={20} className="cursor-pointer" />
                  <p className="text-md font-bold">1</p>
                  <HiOutlinePlusSm size={20} className="cursor-pointer" />
                </div>
                <div className="total">
                  <p className="text-md font-black">₦80,000</p>
                </div>
              </div>
              <div className="cartItem w-full flex justify-between items-center">
                <Image src={Tv2} alt="cart item image" />
                <div className="title">
                  <p className="text-md text-[#BFBFBF]">
                    SPORTS & ENTERTAINMENT
                  </p>
                  <div className="w-64">
                    <span className="block text-xl text-[#191919] overflow-hidden whitespace-nowrap overflow-ellipsis">
                      Sony Red Dead Redemption 2 PS4
                    </span>
                  </div>
                </div>
                <p className="text-md font-black">₦34,000</p>
                <div className="quantity flex justify-center items-center gap-3 border border-gray-300 p-2">
                  <BiMinus size={20} className="cursor-pointer" />
                  <p className="text-md font-bold">1</p>
                  <HiOutlinePlusSm size={20} className="cursor-pointer" />
                </div>
                <div className="total">
                  <p className="text-md font-black">₦34,000</p>
                </div>
              </div>
              <div className="cartItem w-full flex justify-between items-center">
                <Image src={Tv3} alt="cart item image" />
                <div className="title">
                  <p className="text-md text-[#BFBFBF]">LAPTOP</p>
                  <div className="w-64">
                    <span className="block text-xl text-[#191919] overflow-hidden whitespace-nowrap overflow-ellipsis">
                      Apple MacBook Pro 16.2" - 32GB - 1TB - 10 Cores - M1 Max -
                      Silver
                    </span>
                  </div>
                </div>
                <p className="text-md font-black">₦699,000</p>
                <div className="quantity flex justify-center items-center gap-3 border border-gray-300 p-2">
                  <BiMinus size={20} className="cursor-pointer" />
                  <p className="text-md font-bold">1</p>
                  <HiOutlinePlusSm size={20} className="cursor-pointer" />
                </div>
                <div className="total">
                  <p className="text-md font-black">₦699,000</p>
                </div>
              </div>
              <div className="cartItem w-full flex justify-between items-center">
                <Image src={Tv4} alt="cart item image" />
                <div className="title">
                  <p className="text-md text-[#BFBFBF]">FASHION</p>
                  <div className="w-64">
                    <span className="block text-xl text-[#191919] overflow-hidden whitespace-nowrap overflow-ellipsis">
                      Male Formal Glossy Tassel Brogue Leather Shoes Loafers
                    </span>
                  </div>
                </div>
                <p className="text-md font-black">₦23,000</p>
                <div className="quantity flex justify-center items-center gap-3 border border-gray-300 p-2">
                  <BiMinus size={20} className="cursor-pointer" />
                  <p className="text-md font-bold">1</p>
                  <HiOutlinePlusSm size={20} className="cursor-pointer" />
                </div>
                <div className="total">
                  <p className="text-md font-black">₦23,000</p>
                </div>
              </div>
=======
                <p className="text-[20px] text-[##191919] font-black">PRICE</p>
                <p className="text-[20px] text-[##191919] font-black">QTY</p>
                <p className="text-[20px] text-[##191919] font-black">TOTAL</p>
              </div>
            </div>
            <div className="cartItems w-full mt-3 grid grid-cols-1 gap-10">
              {cart && cart?.items ?  (
                cart?.items?.map((item: any) => (
                  <div
                    className="cartItem w-full flex justify-between items-center"
                    key={item._id}
                  >
                    <Image src={Phonzy1} alt="cart item image" />
                    <div className="title">
                      <p className="text-lg text-[#BFBFBF]">{item?.vendor}</p>
                      <div className="w-64">
                        <span className="block text-xl text-[#191919] overflow-hidden whitespace-nowrap overflow-ellipsis">
                          {item?.product_name}
                        </span>
                      </div>
                    </div>
                    <p className="text-lg font-black">₦{item?.product_price}</p>
                    <div className="quantity flex justify-center items-center gap-3 p-2">
                      {/* <BiMinus size={20} className="cursor-pointer" /> */}
                      <p className="text-lg font-bold">{item?.quantity}</p>
                      {/* <HiOutlinePlusSm size={20} className="cursor-pointer" /> */}
                    </div>
                    <div className="total">
                      <p className="text-lg font-black">
                        ₦{item?.total_item_price}
                      </p>
                    </div>
                  </div>
                ))
              ): (
                <h1 className="text-xl font-bold text-center text-black">Cart is empty</h1>
              )}
>>>>>>> dev
            </div>
            <div className="promo w-full flex justify-between items-center gap-10 my-10">
              <div className="first w-[50%] border border-[#BFBFBF] flex justify-center items-center gap-10 p-3">
                <input
                  type="text"
                  placeholder="Enter Coupon Code (e.g BYSDC)"
                  className="text-[#BFBFBF] w-[70%] outline-none"
                />
<<<<<<< HEAD
                <p className="text-[#191919] text-md font-bold">Apply Code</p>
=======
                <p className="text-[#191919] text-lg font-bold">Apply Code</p>
>>>>>>> dev
              </div>
              <div className="second w-[50%] border border-[#BFBFBF] flex justify-center items-center gap-20 p-3">
                <p>SUB TOTAL</p>
                <p className="text-[#FF4D4D]">
<<<<<<< HEAD
                  ₦1,929,00,000{" "}
=======
                  ₦{Math.floor(cart?.total_price) ?? 0}
>>>>>>> dev
                  <span className="text-[#BFBFBF] mx-3">
                    Excl, Shipping Fee
                  </span>
                </p>
              </div>
            </div>
            <div className="lastPromo w-[50%] ml-auto flex justify-end items-center gap-5 my-10">
<<<<<<< HEAD
              <p className="w-[50%] text-center border border-[#9C9898] p-3 rounded-md cursor-pointer">
                Continue Shopping
              </p>
              <p className="bg-[#FF4D4D] text-md text-white w-[50%] text-center p-3 rounded-md cursor-pointer">
                <Link href={"/cart/checkout"}>Next</Link>
              </p>
=======
              <Link href={"/"} className="w-[50%] text-center border border-[#9C9898] p-3 rounded-md cursor-pointer">
              <p >
                Continue Shopping
              </p></Link>
              <Link href={"/cart/checkout"} className="bg-[#FF4D4D] text-lg text-white w-[50%] text-center p-3 rounded-md cursor-pointer">
              <p >
               Next
              </p>
              </Link>
>>>>>>> dev
            </div>
          </div>
          <Footer />
        </div>
      </div>
<<<<<<< HEAD
=======
      {show_toast && <Toast message={toast_message} type={toast_type} />}
>>>>>>> dev
    </>
  );
};

export default page;
