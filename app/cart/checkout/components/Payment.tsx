"use client";
import SlideAnimation from "@/components/Animations/SlideAnimation";
import PayWithWallet from "@/components/PaymentsComponent/PayWithWallet";
import SelectTab from "@/components/SelectTab";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { BsFillCreditCard2BackFill } from "react-icons/bs";

const Payment = () => {
  return (
    <div className="w-1/2 flex flex-col gap-4 items-center justify-center mt-3">
      <div className="bg-red-50 p-4 w-full min-h-28 rounded-xl ">
        <BsFillCreditCard2BackFill className="text-4xl text-red-500" />
        Card
      </div>
      <PayWithWallet />
    </div>
  );
};

export const SelectPaymentMethod = ({ paymentMethod }: any) => {
  const [payWith, setPayWith] = useState("Wallet");

  // console.log(wal)
  let paymentMethods = [
    {
      heading: "Wallet",
      icon: <Icon icon="solar:wallet-bold" />,
    },
    {
      heading: "Card",
      icon: <BsFillCreditCard2BackFill />,
    },
  ];
  return (
    <SlideAnimation slideIn={true}>
      <div className="centerClass flex-col">
        <SelectTab
          tabs={paymentMethods}
          currentValue={(val: any) => {
            paymentMethod(val);
            setPayWith(val);
          }}
        />

        <SlideAnimation>
          <div className="bg-gray-200 rounded p-4">
            {payWith === "Wallet" ? (
              <SlideAnimation>
                <span className="font-light">Wallet Balance</span>
                <p className="font-bold text-lg">
                  ₦123.33
                  {/* ₦{data?.users_data?.walletAmount} */}
                </p>
              </SlideAnimation>
            ) : (
              <SlideAnimation>
                <span className="font-bold text-purple-300">
                  Coming soon...
                </span>
                <p className="font-thin text-sm">
                  Unavailable Right Now,
                  <a
                    className="text-blue-500 pl-2"
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=app.buyenergyunits.com&hl=en&gl=US"
                  >
                    Please get our app
                  </a>
                </p>
              </SlideAnimation>
            )}
          </div>
        </SlideAnimation>
      </div>
    </SlideAnimation>
  );
};
export default Payment;
