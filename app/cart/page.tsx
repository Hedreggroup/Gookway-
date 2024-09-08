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
            <div className="w-full flex justify-between items-center">
              <h1 className="text-[44px] text-[#191919] font-black">My Cart</h1>
              <p className="bg-[#FF4D4D] text-lg text-white w-[20%] text-center p-3 rounded-md cursor-pointer" onClick={handleEmptyCart}>
                Empty Cart
              </p>
            </div>
            <div className="pTitle w-full bg-[#F6F6F6] flex justify-between items-center p-5">
              <div className="left w-[50%]">
                <p className="text-[20px] text-[##191919] font-black">
                  PRODUCT
                </p>
              </div>
              <div className="right w-[43%] flex justify-between items-center gap-5">
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
                  ₦{Math.floor(cart?.total_price) ?? 0}
                  <span className="text-[#BFBFBF] mx-3">
                    Excl, Shipping Fee
                  </span>
                </p>
              </div>
            </div>
            <div className="lastPromo w-[50%] ml-auto flex justify-end items-center gap-5 my-10">
              <Link href={"/"} className="w-[50%] text-center border border-[#9C9898] p-3 rounded-md cursor-pointer">
              <p >
                Continue Shopping
              </p></Link>
              <Link href={"/cart/checkout"} className="bg-[#FF4D4D] text-lg text-white w-[50%] text-center p-3 rounded-md cursor-pointer">
              <p >
               Next
              </p>
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      {show_toast && <Toast message={toast_message} type={toast_type} />}
    </>
  );
};

export default page;
