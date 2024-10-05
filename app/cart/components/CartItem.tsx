import { useCart } from "@/hooks/useCart";
import React from "react";
import { BiMinus } from "react-icons/bi";
import { HiOutlinePlusSm } from "react-icons/hi";

const CartItem = ({ item }: { item: any }) => {
  const {
    cart,
    totalPrice,
    increaseItemQuantity,
    decreaseItemQuantity,
    isLoading: ldnToCart,
    error,
  } = useCart();

  return (
    <div>
      <div
        className="cartItem w-full flex justify-between items-center"
        key={item._id}
      >
        <img src={item?.images ? item?.images[0] : ""} alt="cart item image" />
        <div className="title">
          <p className="text-lg text-[#BFBFBF] uppercase">{item?.category}</p>
          <div className="w-64">
            <span className="block text-xl text-[#191919] overflow-hidden whitespace-nowrap overflow-ellipsis">
              {item?.product_name ?? item?.name}
            </span>
          </div>
        </div>
        <p className="text-lg font-black">₦{item?.product_price}</p>
        <div className="quantity flex justify-center items-center gap-3 p-2">
          <BiMinus
            size={20}
            className="cursor-pointer"
            onClick={() => decreaseItemQuantity(item?.product_id)}
          />
          <p className="text-lg font-bold">{item?.quantity}</p>
          <HiOutlinePlusSm
            size={20}
            className="cursor-pointer"
            onClick={() => increaseItemQuantity(item?.product_id)}
          />
        </div>
        <div className="total">
          <p className="text-lg font-black">₦{item?.total_item_price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
