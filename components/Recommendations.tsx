import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillProduct } from "react-icons/ai";
import SkeltonLoading from "./SkeltonLoading";

interface IData {
  products: [];
}
const Recommendations: React.FC<IData> = ({ products }) => {
  {
    /* <SphereLoader /> */
  }
  return (
    <div className="w-[95%] m-auto mt-5">
      <div className="w-full flex justify-between items-center my-2">
        <h1 className="text-md font-medium">Recommended for you</h1>
        <p className="flex justify-end items-center text-md cursor-pointer text-gray-500">
          view more
        </p>
      </div>
      <section className="w-full grid  grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-5 xl:grid-cols-6">
        {products.length > 0 ? (
          products.map((item: any) => (
            <Link href={`/product/${item._id}`} key={item._id}>
              <div className="recomendation">
                <div className="card h-[250px] bg-[#dcdcdc] flex justify-center items-center">
                  {/* <Image src={""} width={150} height={150} alt='product image'/> */}
                  <img src={item.images[0]} width={150} height={150} />
                  {/* <AiFillProduct size={200} /> */}
                </div>
                <p className="text-sm font-light my-2">{item?.name}</p>
                <span className="text-2xl font-bold text-red-500">
                  ₦{item?.price}
                </span>
              </div>
            </Link>
          ))
        ) : (
          <SkeltonLoading length={12} />
        )}
        {/* <div className="recomendation">
          <div className="card h-[250px] bg-[#dcdcdc]"></div>
          <p className="text-xl">William Lawson’s Fine...</p>
          <span className="text-2xl font-bolder text-[#ff0000]">₦ 4,900</span>
        </div>
        <div className="recomendation">
          <div className="card h-[250px] bg-[#dcdcdc]"></div>
          <p className="text-xl">William Lawson’s Fine...</p>
          <span className="text-2xl font-bolder text-[#ff0000]">₦ 4,900</span>
        </div>
        <div className="recomendation">
          <div className="card h-[250px] bg-[#dcdcdc]"></div>
          <p className="text-xl">William Lawson’s Fine...</p>
          <span className="text-2xl font-bolder text-[#ff0000]">₦ 4,900</span>
        </div>
        <div className="recomendation">
          <div className="card h-[250px] bg-[#dcdcdc]"></div>
          <p className="text-xl">William Lawson’s Fine...</p>
          <span className="text-2xl font-bolder text-[#ff0000]">₦ 4,900</span>
        </div>
        <div className="recomendation">
          <div className="card h-[250px] bg-[#dcdcdc]"></div>
          <p className="text-xl">William Lawson’s Fine...</p>
          <span className="text-2xl font-bolder text-[#ff0000]">₦ 4,900</span>
        </div>
        <div className="recomendation">
          <div className="card h-[250px] bg-[#dcdcdc]"></div>
          <p className="text-xl">William Lawson’s Fine...</p>
          <span className="text-2xl font-bolder text-[#ff0000]">₦ 4,900</span>
        </div>
        <div className="recomendation">
          <div className="card h-[250px] bg-[#dcdcdc]"></div>
          <p className="text-xl">William Lawson’s Fine...</p>
          <span className="text-2xl font-bolder text-[#ff0000]">₦ 4,900</span>
        </div>
        <div className="recomendation">
          <div className="card h-[250px] bg-[#dcdcdc]"></div>
          <p className="text-xl">William Lawson’s Fine...</p>
          <span className="text-2xl font-bolder text-[#ff0000]">₦ 4,900</span>
        </div>
        <div className="recomendation">
          <div className="card h-[250px] bg-[#dcdcdc]"></div>
          <p className="text-xl">William Lawson’s Fine...</p>
          <span className="text-2xl font-bolder text-[#ff0000]">₦ 4,900</span>
        </div> */}
      </section>
    </div>
  );
};

export default Recommendations;
