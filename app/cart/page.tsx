"use client";
import Breadcrumbs from "@/components/Bread";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { useGlobalStore } from "@/components/store/userStore";
import Toast from "@/components/utils/Toastify/Toast";
import { useCart } from "@/hooks/useCart";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CartItem from "./components/CartItem";
import Button from "@/components/Button";

const page = () => {
  const scrumbs = {
    Home: "Home",
    Cart: "Cart",
  };
  const {
    cart,
    totalPrice,
    increaseItemQuantity,
    decreaseItemQuantity,
    isLoading: ldnToCart,
    error,
  } = useCart();
  const [token, setToken] = useLocalStorage<any>("user-token", "");

  // const { emptyCart } = useGlobalStore();
  const emptyCart = useGlobalStore((state) => state.emptyCart);

  const [show_toast, setShowToast] = useState(false);
  const [toast_message, setToastMessage] = useState<string>();
  const [toast_type, setToastType] = useState<
    "success" | "error" | "info" | "warning"
  >("success");
  const [loading, setLoading] = useState<boolean>(false);

  const handleEmptyCart = async () => {
    setLoading(true);
    const response = await axios
      .delete(`${process.env.NEXT_PUBLIC_BASEURL}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the Bearer token here
        },
        withCredentials: true,
      })
      .catch((error: any) => {
        console.log(error);
        setToastMessage(error?.response?.data?.msg);
        setShowToast(true);
        setToastType("error");
        setLoading(false);
      });

    if (response) {
      emptyCart();
      setToastMessage("Cart cleared");
      setShowToast(true);
      setToastType("success");
      setLoading(false);
    }
  };

  useEffect(() => {}, []);
  // console.log(cart);
  return (
    <>
      <div className="mt-60 lg:mt-40">
        {/* <Cart /> */}
        <div>
          <div className="w-[90%] m-auto">
            <Breadcrumbs items={scrumbs} />
            <div className="w-full flex justify-between items-center my-4">
              <h1 className="text-xl text-[#191919] font-bold">My Cart</h1>
              <Button onClick={handleEmptyCart}>Empty Cart</Button>
            </div>
            <div className="pTitle w-full bg-[#F6F6F6] flex justify-between items-center p-5">
              <div className="left w-[50%]">
                <p className="text-sm text-[##191919] font-black">PRODUCT</p>
              </div>
              <div className="right w-[43%] flex justify-between items-center gap-5">
                <p className="text-sm text-[##191919] font-black">PRICE</p>
                <p className="text-sm text-[##191919] font-black">QTY</p>
                <p className="text-sm text-[##191919] font-black">TOTAL</p>
              </div>
            </div>
            <div className="cartItems w-full mt-3 grid grid-cols-1 gap-10">
              {cart?.length > 0 ? (
                cart?.map((item: any) => <CartItem item={item} />)
              ) : (
                <h1 className="text-xl font-bold text-center text-black">
                  Cart is empty
                </h1>
              )}
            </div>
            <div className="promo w-full flex justify-end items-center gap-10 my-10">
              {/* <div className="first w-[50%] border border-[#BFBFBF] flex justify-center items-center gap-10 p-3">
                <input
                  type="text"
                  placeholder="Enter Coupon Code (e.g BYSDC)"
                  className="text-[#BFBFBF] w-[70%] outline-none"
                />
                <p className="text-[#191919] text-lg font-bold">Apply Code</p>
              </div> */}
              <div className="second w-full lg:w-[50%] border border-[#BFBFBF] flex justify-center items-center gap-20 p-3">
                <p>SUB TOTAL</p>
                <p className="text-[#FF4D4D]">
                  ₦{Math.floor(totalPrice) ?? 0}
                  <span className="text-[#BFBFBF] mx-3">
                    Excl, Shipping Fee
                  </span>
                </p>
              </div>
            </div>
            <div className="lastPromo w-full lg:w-[50%] ml-auto flex justify-end items-center gap-5 my-10">
              <Link
                href={"/"}
                className="w-full lg:w-[50%] text-center border border-[#9C9898] p-3 rounded-md cursor-pointer"
              >
                <p>Continue Shopping</p>
              </Link>
              <Link
                href={"/cart/checkout"}
                className="bg-[#FF4D4D] text-lg text-white w-full lg:w-[50%] text-center p-3 rounded-md cursor-pointer"
              >
                <p>Next</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {show_toast && <Toast message={toast_message} type={toast_type} />}
    </>
  );
};

export default page;
