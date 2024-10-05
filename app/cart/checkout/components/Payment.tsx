"use client";
import SlideAnimation from "@/components/Animations/SlideAnimation";
import Button from "@/components/Button";
import PayWithWallet from "@/components/PaymentsComponent/PayWithWallet";
import SelectTab from "@/components/SelectTab";
import { usePost } from "@/hooks/usePosts";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import OrderSummaryItem from "./OrderSummaryItem";
import { useGlobalStore } from "@/components/store/userStore";
import { useGet } from "@/hooks/useGet";

const Payment = ({ handleBack = () => {} }) => {
  const [paymentMethod, setPaymentMethod] = useState<any>(undefined);
  const { data, error, isLoading, execute } = usePost<any>();
  const { shippingDetails, setShippingDetails } = useGlobalStore();

  const handlePayment = () => {
    execute(`/orders/checkout?payment_option=${paymentMethod}`, {
      shipping_address: shippingDetails,
    });
  };
  return (
    <SlideAnimation>
      <div className="w-full flex flex-row gap-4 items-start justify-center  ">
        <div className="w-1/2 flex flex-col gap-4 items-center justify-center mt-3">
          <div
            className="flex items-center justify-between bg-red-50 p-4 w-full min-h-28 rounded-xl "
            onClick={() => setPaymentMethod("pg")}
          >
            <div>
              <BsFillCreditCard2BackFill className="text-4xl text-red-500" />
              Card
            </div>
            {paymentMethod === "pg" && (
              <Icon
                icon="teenyicons:tick-circle-solid"
                className={`${"text-green-300 text-3xl"}`}
              />
            )}
          </div>
          <PayWithWallet
            selected={paymentMethod === "wallet"}
            onSelect={() => setPaymentMethod("wallet")}
          />
          {paymentMethod && (
            <div
              className={`w-full bg-white p-4 rounded-xl my-2 px-1  flex items-center `}
              style={{
                justifyContent: "space-between",
              }}
            >
              {<Button onClick={handleBack}>Prev</Button>}
              <Button onClick={handlePayment} type="submit" loading={isLoading}>
                Make Payment
              </Button>
            </div>
          )}
        </div>
        <OrderSummaryItem />
      </div>
    </SlideAnimation>
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
