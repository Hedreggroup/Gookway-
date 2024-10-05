import Button from "@/components/Button";
import { useCart } from "@/hooks/useCart";
import React from "react";

const OrderSummaryItem = () => {
  const {
    cart,
    totalPrice,
    increaseItemQuantity,
    decreaseItemQuantity,
    isLoading: ldnToCart,
    error,
  } = useCart();

  return (
    <div className="right  min-h-[224px] bg-[#F9F9F9] p-5 w-full sm:w-96 rounded">
      <h1 className="text-lg font-semibold text-[#191919]">Order Summary</h1>
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
              <p className="text-sm text-[#191919]">₦{item?.product_price}</p>
            </div>
          ))
        ) : (
          <h1>No item found</h1>
        )}
        <div className="w-full text-md font-bold flex justify-between items-end">
          <h1 className=" ">Total:</h1>
          <p> ₦ {totalPrice ?? 0}</p>
        </div>
        <p className="text-xs text-gray-400">
          By proceeding, you are automatically accepting the{" "}
          <span className="text-red-500"> Terms & Conditions</span>
        </p>
      </div>
    </div>
  );
};
const CartItem = ({ item }: any) => {
  return (
    <div className="flex items-center justify-between my-2 py-1">
      <p className="font-light w-2/5 overflow-hidden text-ellipsis line-clamp-2">
        {item?.name}
      </p>
      <p className="font-semibold">{item?.quantity}</p>
      <p className="font-semibold">₦{item?.product_price}</p>
    </div>
  );
};
export default OrderSummaryItem;
