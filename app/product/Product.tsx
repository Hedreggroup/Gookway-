"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa";
import shipping from "../../public/assets/ship.png";
import warranty from "../../public/assets/goods.png";
import policy from "../../public/assets/policy.png";
import support from "../../public/assets/response.png";
import phonzy1 from "../../public/assets/phonzy1.png";
import phonzy2 from "../../public/assets/phonzy2.png";
import phonzy3 from "../../public/assets/phonzy3.png";
import phonzy4 from "../../public/assets/phonzy4.png";
import phonzy5 from "../../public/assets/phonzy1.png";
import { useGlobalStore } from "../../components/store/userStore";
import Toast from "../../components/utils/Toastify/Toast";
import axios from "axios";
import ProductInfo from "./components/ProductInfo";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useGet } from "@/hooks/useGet";
import SkeltonLoading from "@/components/SkeltonLoading";
import ProductSkelton from "./ProductSkelton";
import ProductImages from "./components/ProductImages";
import Nav from "@/components/Nav";
import { usePost } from "@/hooks/usePosts";
import { ToastContainer } from "react-toastify";
import SideToast from "@/components/utils/Toastify/SideToast";
import { useCart } from "@/hooks/useCart";
import Button from "@/components/Button";
const Product = ({ foundProduct, id, isLoading }: any) => {
  const [cartCount, setCartCount] = useState<number>(1);
  const { cart, addToCart, isLoading: ldnToCart, error } = useCart();

  const increaseQuantity = () => {
    setCartCount((prevQuantity) => prevQuantity + 1);
  };
  const handleAddToCart = async (product: any) => {
    product.quantity = cartCount;
    product.total_item_price = product?.price * cartCount;
    product.product_price = product?.price;
    product.product_id = product?.id;

    await addToCart(product, cartCount); // Add product to cart
  };
  // Function to decrease the quantity (with a minimum value of 1)
  const decreaseQuantity = () => {
    setCartCount((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <>
      <Nav />
      {isLoading ? (
        <ProductSkelton />
      ) : (
        <div className="w-[95%] m-auto">
          <div className="breadcrumbs w-full flex justify-start items-center gap-2 pt-10 text-center">
            <p className="text-sm text-gray-500 border-r-2 border-r-gray-500 h-[20px] px-1 font-bold">
              {/* {breadcrumbsData.home} */}
            </p>
            <p className="text-sm text-gray-500 border-r-2 border-r-gray-500 h-[20px] px-1 font-bold">
              {/* {breadcrumbsData.category} */}
            </p>
            <p className="text-sm text-gray-500 border-r-2 border-r-gray-500 h-[20px] px-1 font-bold">
              {/* {breadcrumbsData.type} */}
            </p>
            <p className="text-sm text-gray-500 border-r-2 border-r-gray-500 h-[20px] px-1 font-bold">
              {/* {breadcrumbsData.subCategory} */}
            </p>
            <p className="text-sm text-black px-1 font-bold">
              {/* {breadcrumbsData.spces} */}
            </p>
          </div>
          <div className="product w-[90%] m-auto mt-10 flex flex-col sm:flex-row justify-between items-start">
            <ProductImages images={foundProduct?.images ?? []} />

            <div className="right md:w-[50%]">
              <div className="ratings w-full my-2 flex justify-start items-center gap-2">
                <IoStar size={17} color="#FFD700" />
                <IoStar size={17} color="#FFD700" />
                <IoStar size={17} color="#FFD700" />
                <IoStar size={17} color="#FFD700" />
                <IoStar size={17} color="#FFD700" />
                <p className="text-xl text-gray-600">(121)</p>
              </div>
              <h1 className="text-xl font-bold">
                {foundProduct?.name}, {foundProduct?.description}
              </h1>
              <div className="h-[2px] w-[40%] bg-gray-300 my-2"></div>
              <p className="text-xl font-bold text-[#FF4D4D]">
                ₦{foundProduct?.price}
              </p>
              <div className="brandDetails w-[60%] mt-3">
                <div className="brand flex justify-between">
                  <p className="text-md font-bold">Brand</p>
                  <span className="text-gray-500">{foundProduct?.brand}</span>
                </div>
                <div className="size flex justify-between">
                  <p className="text-md font-bold">Size</p>
                  <span className="text-gray-500">
                    {foundProduct?.variants[0]
                      ? foundProduct?.variants[0].size
                      : 0}
                  </span>
                </div>
                <div className="weight flex justify-between">
                  <p className="text-md font-bold">Weight</p>
                  <span className="text-gray-500">{foundProduct?.weight}</span>
                </div>
                <div className="dimension flex justify-between">
                  <p className="text-md font-bold">Dimension</p>
                  <span className="text-gray-500">
                    {foundProduct?.dimensions?.height} *{" "}
                    {foundProduct?.dimensions?.width} *{" "}
                    {foundProduct?.dimensions?.depth}
                  </span>
                </div>
              </div>
              <div className="cart w-full mt-5 flex justify-center items-center gap-5">
                <div className="addCat w-[40%] flex justify-between items-center border-2 border-gray-300 rounded-md p-2">
                  <FaMinus
                    size={20}
                    color="gray"
                    className="cursor-pointer"
                    onClick={decreaseQuantity}
                  />
                  <p className="text-xl font-bold">{cartCount}</p>
                  <FaPlus
                    size={20}
                    color="gray"
                    className="cursor-pointer"
                    onClick={increaseQuantity}
                  />
                </div>
                <Button
                  loading={ldnToCart}
                  onClick={() => handleAddToCart(foundProduct)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
          <section className="w-full grid gap-8 sm:gap-0 grid-cols-2 md:grid-cols-4 mt-20">
            <div className="w-full flex justify-center items-center gap-3">
              <Image src={shipping} alt="shiping" className="w-8 h-6" />
              <div>
                <h1 className="text-sm font-bold">Fast Shipping</h1>
                <p className="text-xs text-gray-400">Ship your goods swiftly</p>
              </div>
            </div>
            <div className="w-full flex justify-center items-center gap-3">
              <Image src={warranty} alt="warranty" className="w-6 h-8" />
              <div>
                <h1 className="text-sm font-bold">Free warranty</h1>
                <p className="text-xs text-gray-400">
                  In case of technical issues
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center items-center gap-3">
              <Image src={policy} alt="policy" className="w-8 h-8" />
              <div>
                <h1 className="text-sm font-bold"> Return Policy</h1>
                <p className="text-xs text-gray-400">
                  Free return within 7 days
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center items-center gap-3">
              <Image src={support} alt="support" className="w-8 h-8" />
              <div>
                <h1 className="text-sm font-bold">Responsive</h1>
                <p className="text-xs text-gray-400">Dedicated support</p>
              </div>
            </div>
          </section>
          <ProductInfo product={foundProduct} />
          <div>
            <hr className="w-full h-1 bg-slate-300 my-5" />
            <div className="relatedProducts">
              <div className="w-full flex justify-between items-center">
                <h1 className="text-lg text-[#191919] mb-5">
                  Related Products
                </h1>
                <p className="text-md text-[#191919]">view more</p>
              </div>
              <div className="relatedcards w-full h-auto grid grid-cols-2 md:grid-cols-5 gap-1">
                <div className="relatedCard flex flex-col justify-start items-start gap-1">
                  <Image src={phonzy1} alt="product image" />
                  <p className="text-[18px] text-[#191919]">
                    XIAOMI Redmi 13C 6.74”
                  </p>
                  <span className="text-[20px] text-[#191919] font-black">
                    ₦175,000
                  </span>
                </div>
                <div className="relatedCard flex flex-col justify-start items-start gap-1">
                  <Image src={phonzy2} alt="product image" />
                  <p className="text-[18px] text-[#191919]">
                    XIAOMI Redmi 13C 6.74”
                  </p>
                  <span className="text-[20px] text-[#191919] font-black">
                    ₦175,000
                  </span>
                </div>
                <div className="relatedCard flex flex-col justify-start items-start gap-1">
                  <Image src={phonzy3} alt="product image" />
                  <p className="text-[18px] text-[#191919]">
                    XIAOMI Redmi 13C 6.74”
                  </p>
                  <span className="text-[20px] text-[#191919] font-black">
                    ₦175,000
                  </span>
                </div>
                <div className="relatedCard flex flex-col justify-start items-start gap-1">
                  <Image src={phonzy4} alt="product image" />
                  <p className="text-[18px] text-[#191919]">
                    XIAOMI Redmi 13C 6.74”
                  </p>
                  <span className="text-[20px] text-[#191919] font-black">
                    ₦175,000
                  </span>
                </div>
                <div className="relatedCard flex flex-col justify-start items-start gap-1">
                  <Image src={phonzy5} alt="product image" />
                  <p className="text-[18px] text-[#191919]">
                    XIAOMI Redmi 13C 6.74”
                  </p>
                  <span className="text-[20px] text-[#191919] font-black">
                    ₦175,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* {show_toast && <Toast message={toast_message} type={toast_type} />} */}
    </>
  );
};

export default Product;
