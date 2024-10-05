import { useGlobalStore } from "@/components/store/userStore";
import { useCart } from "@/hooks/useCart";
import React from "react";
import ShippingAddressItem from "./ShippingAddressItem";
import { Icon } from "@iconify/react/dist/iconify.js";

const Summary = ({ prev }: any) => {
  const { shippingDetails, setShippingDetails } = useGlobalStore();
  const { cart, totalPrice, isLoading: ldnToCart, error } = useCart();
  return (
    <>
      <div className="flex items-start justify-evenly md:flex-row flex-col gap-4">
        {/* biiling */}
        <div className="bg-[#F9F9F9] grow  min-h-[224px] p-5 rounded-xl">
          <h1 className="text-lg font-semibold text-[#191919]">
            Shipping Address
          </h1>
          <div className="flex items-center gap-2 w-full p-2 rounded-lg">
            <ShippingAddressItem address={shippingDetails} />
            <div
              className="gap-4 flex items-center text-[#2B7CFF]"
              onClick={prev}
            >
              Change
              <Icon icon="weui:arrow-filled" />
            </div>
          </div>
        </div>
        {/* cart */}
      </div>
    </>
  );
};

export default Summary;
