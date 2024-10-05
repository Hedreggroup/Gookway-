import { useCart } from "@/hooks/useCart";
import React from "react";

const Summary = () => {
  const { cart, totalPrice, isLoading: ldnToCart, error } = useCart();
  return (
    <>
      <div className="flex items-center justify-evenly md:flex-row flex-col gap-4">
        {/* biiling */}
        <div className="bg-[#F9F9F9] grow  min-h-[424px] p-5 rounded">
          <h1 className="text-xl font-black text-[#191919]">Billing Details</h1>
        </div>
        {/* cart */}
        <div className="right  min-h-[424px] bg-[#F9F9F9] p-5 w-96 rounded">
          <h1 className="text-xl font-black text-[#191919]">Order Summary</h1>
          <div className="orders w-full mt-5 flex flex-col justify-start items-center gap-5">
            {cart ? (
              cart?.map((item: any) => (
                <div
                  className="order w-full flex justify-between items-center border border-[#BFBFBF] p-2"
                  key={item?.product_id}
                >
                  <p className="text-sm text-[#191919] w-[60%]">
                    {item?.product_name ?? item?.name}
                  </p>
                  <p className="text-sm text-[#191919]">{item?.quantity}</p>
                  <p className="text-sm text-[#191919]">
                    ₦{item?.product_price}
                  </p>
                </div>
              ))
            ) : (
              <h1>No item found</h1>
            )}
            <div className="w-full flex justify-end items-end">
              <h1 className="font-bold text-lg">Total:</h1>
              <p> ₦{totalPrice ?? 0}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
