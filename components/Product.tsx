import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import phone1 from "../public/assets/phone11.png";
import phone2 from "../public/assets/phone2.png";
import phone3 from "../public/assets/phone3.png";
import phone4 from "../public/assets/phone4.png";
import { IoStar } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa";
import shipping from "../public/assets/ship.png";
import warranty from "../public/assets/goods.png";
import policy from "../public/assets/policy.png";
import support from "../public/assets/response.png";
import phonzy1 from "../public/assets/phonzy1.png";
import phonzy2 from "../public/assets/phonzy2.png";
import phonzy3 from "../public/assets/phonzy3.png";
import phonzy4 from "../public/assets/phonzy4.png";
import phonzy5 from "../public/assets/phonzy1.png";
import { useGlobalStore } from "./store/userStore";
import Toast from "./utils/Toastify/Toast";
import axios from "axios";
const Product = () => {
  const params = useParams();
  const { addToCart } = useGlobalStore();
  const { id } = params;
  const breadcrumbsData = {
    home: "Home",
    category: "Phones & Tablets",
    type: "Phones",
    subCategory: "Android Phone",
    spces: "XIAOMI Redmi A2+ 6.5 4G LTE 128 + 6GB AMOLED Screen...",
  };
  const horizontalBar = () => {
    return <hr className="w-full h-1 bg-slate-300 my-5" />;
  };
  const [show_toast, setShowToast] = useState(false);
  const [toast_message, setToastMessage] = useState<string>();
  const [toast_type, setToastType] = useState<
    "success" | "error" | "info" | "warning"
  >("success");
  const [loading, setLoading] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const handleAddCart = async () => {
    setCartCount(cartCount + 1);
  };
  const handleRemoveCart = async () => {
    if (cartCount === 0) {
      setCartCount(0);
    } else {
      setCartCount(cartCount - 1);
    }
  };

  const handleAddToCart = async () => {
    setLoading(true);
    const response = await axios
      .post(
        `${process.env.NEXT_PUBLIC_BASEURL}/cart`,
        {
          product_id: id,
          quantity: cartCount,
        },
        {
          withCredentials: true,
        }
      )
      .catch((error: any) => {
        setToastMessage(error?.response?.data?.msg);
        setShowToast(true);
        setToastType("error");
        setLoading(false);
      });

    if (response) {
      addToCart({
        productId: id,
        cart: cartCount,
      });
      console.log(response);
      setToastMessage("Added to cart");
      setShowToast(true);
      setToastType("success");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-[95%] m-auto">
        <div className="breadcrumbs w-full flex justify-start items-center gap-2 pt-10 text-center">
          <p className="text-sm text-gray-500 border-r-2 border-r-gray-500 h-[20px] px-1 font-bold">
            {breadcrumbsData.home}
          </p>
          <p className="text-sm text-gray-500 border-r-2 border-r-gray-500 h-[20px] px-1 font-bold">
            {breadcrumbsData.category}
          </p>
          <p className="text-sm text-gray-500 border-r-2 border-r-gray-500 h-[20px] px-1 font-bold">
            {breadcrumbsData.type}
          </p>
          <p className="text-sm text-gray-500 border-r-2 border-r-gray-500 h-[20px] px-1 font-bold">
            {breadcrumbsData.subCategory}
          </p>
          <p className="text-sm text-black px-1 font-bold">
            {breadcrumbsData.spces}
          </p>
        </div>
        <div className="product w-[90%] m-auto mt-10 flex justify-start items-start">
          <div className="left w-[50%]">
            <div className="top bg-transparent">
              <Image src={phone1} alt="phone 1" className="object-cover" />
            </div>
            <div className="bottom flex justify-start items-center gap-3 mt-5">
              <Image
                src={phone2}
                alt="phone 1"
                className="object-cover border border-gray-300 p-2"
              />
              <Image
                src={phone3}
                alt="phone 1"
                className="object-cover border border-gray-300 p-2"
              />
              <Image
                src={phone4}
                alt="phone 1"
                className="object-cover border border-gray-300 p-2"
              />
            </div>
          </div>
          <div className="right w-[50%]">
            <div className="ratings w-full flex justify-start items-center gap-2">
              <IoStar size={28} color="#FFD700" />
              <IoStar size={28} color="#FFD700" />
              <IoStar size={28} color="#FFD700" />
              <IoStar size={28} color="#FFD700" />
              <IoStar size={28} color="#FFD700" />
              <p className="text-xl text-gray-600">(121)</p>
            </div>
            <h1 className="text-2xl font-bold">
              XIAOMI Redmi A2+ 6.5 4G LTE 128 + 6GB AMOLED Screen
            </h1>
            <div className="h-[2px] w-[40%] bg-gray-300 my-2"></div>
            <p className="text-2xl font-bold text-[#FF4D4D]">₦99,000</p>
            <div className="brandDetails w-[60%] mt-3">
              <div className="brand flex justify-between">
                <p className="text-lg font-bold">Brand</p>
                <span className="text-gray-500">XIAOMI</span>
              </div>
              <div className="size flex justify-between">
                <p className="text-lg font-bold">Size</p>
                <span className="text-gray-500">17.04cm(6.71-inch)</span>
              </div>
              <div className="weight flex justify-between">
                <p className="text-lg font-bold">Weight</p>
                <span className="text-gray-500">0.15kg</span>
              </div>
              <div className="dimension flex justify-between">
                <p className="text-lg font-bold">Dimension</p>
                <span className="text-gray-500">168.3mm x 76.3mm x 8.32mm</span>
              </div>
            </div>
            <div className="cart w-full mt-5 flex justify-center items-center gap-5">
              <div className="addCat w-[40%] flex justify-between items-center border-2 border-gray-300 rounded-md p-2">
                <FaMinus
                  size={20}
                  color="gray"
                  className="cursor-pointer"
                  onClick={() => {
                    handleRemoveCart();
                  }}
                />
                <p className="text-xl font-bold">{cartCount}</p>
                <FaPlus
                  size={20}
                  color="gray"
                  className="cursor-pointer"
                  onClick={() => {
                    handleAddCart();
                  }}
                />
              </div>
              <button
                type="button"
                className="bg-[#FF4D4D] text-white w-[60%] py-3 rounded-md"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <section className="w-full grid grid-cols-4 mt-20">
          <div className="w-full flex justify-center items-center gap-3">
            <Image src={shipping} alt="shiping" />
            <div>
              <h1 className="text-xl font-bold">Fast Shipping</h1>
              <p className="text-lg text-gray-400">Ship your goods swiftly</p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center gap-3">
            <Image src={warranty} alt="warranty" />
            <div>
              <h1 className="text-xl font-bold">Free warranty</h1>
              <p className="text-lg text-gray-400">
                In case of technical issues
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center gap-3">
            <Image src={policy} alt="policy" />
            <div>
              <h1 className="text-xl font-bold"> Return Policy</h1>
              <p className="text-lg text-gray-400">Free return within 7 days</p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center gap-3">
            <Image src={support} alt="support" />
            <div>
              <h1 className="text-xl font-bold">Responsive</h1>
              <p className="text-lg text-gray-400">Dedicated support</p>
            </div>
          </div>
        </section>
        <div className="brandInfo w-full mt-20">
          <div className="top w-full flex justify-start items-center gap-10 mb-2">
            <p className="text-lg text-gray-400">Delivery & Returns</p>
            <p className="text-lg text-gray-400">Specifications</p>
            <p className="text-lg text-gray-400">Reviews</p>
            <p className="text-lg text-gray-400">Descriptions</p>
          </div>
          <div className="bottom w-[80%] m-auto flex justify-center items-center">
            <div className="left w-[50%] m-auto flex flex-col justify-start items-start gap-2">
              <div className="item w-[70%] flex justify-between items-center">
                <h1 className="text-lg font-bold">Brand</h1>
                <p className="text-sm text-gray-400">XIAOMI</p>
              </div>
              <div className="item w-[90%] flex justify-between items-center">
                <h1 className="text-lg font-bold">Processor</h1>
                <p className="text-sm text-gray-400">
                  MediaTek Helio G36 - Higher clock speed up to 2.2GHz
                </p>
              </div>
              <div className="item w-[70%] flex justify-between items-center">
                <h1 className="text-lg font-bold">Weight</h1>
                <p className="text-sm text-gray-400">0.15kg</p>
              </div>
              <div className="item w-[70%] flex justify-between items-center">
                <h1 className="text-lg font-bold">Dimension</h1>
                <p className="text-sm text-gray-400">
                  168.3mm x 76.3mm x 8.32mm
                </p>
              </div>
              <div className="item w-[70%] flex justify-between items-center">
                <h1 className="text-lg font-bold">Memory</h1>
                <p className="text-sm text-gray-400">3GB RAM 128GB ROM</p>
              </div>
              <div className="item w-[70%] flex justify-between items-center">
                <h1 className="text-lg font-bold">Battery Capacity</h1>
                <p className="text-sm text-gray-400">5000 mAh (typ)</p>
              </div>
            </div>
            <div className="right w-[50%] m-auto flex flex-col justify-start items-start gap-2">
              <div className="item  w-[70%] flex justify-between items-center">
                <h1 className="text-lg font-bold">Rear Cameras</h1>
                <p className="text-sm text-gray-400">8MP AI Dual Camera</p>
              </div>
              <div className="item  w-[70%] flex justify-between items-center">
                <h1 className="text-lg font-bold">SIM Type</h1>
                <p className="text-sm text-gray-400">Nano-SIM</p>
              </div>
              <div className="item  w-[70%] flex justify-between items-center">
                <h1 className="text-lg font-bold">SIM Count</h1>
                <p className="text-sm text-gray-400">Dual-SIM</p>
              </div>
              <div className="item  w-[70%] flex justify-between items-center">
                <h1 className="text-lg font-bold">SKU</h1>
                <p className="text-sm text-gray-400">XI363MP3XQOUNNAFAMZ</p>
              </div>
              <div className="item  w-[70%] flex justify-between items-center">
                <h1 className="text-lg font-bold">Colour</h1>
                <p className="text-sm text-gray-400">Blue</p>
              </div>
              <div className="item  w-[70%] flex justify-between items-center">
                <h1 className="text-lg font-bold">Model</h1>
                <p className="text-sm text-gray-400">A3</p>
              </div>
            </div>
          </div>
          {horizontalBar()}
          <div className="relatedProducts">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-[24px] text-[#191919] mb-5">
                Related Products
              </h1>
              <p className="text-[20px] text-[#191919]">view more</p>
            </div>
            <div className="relatedcards w-full h-auto grid grid-cols-5 gap-1">
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
      {show_toast && <Toast message={toast_message} type={toast_type} />}
    </>
  );
};

export default Product;
