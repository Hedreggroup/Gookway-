import React, { useEffect, useState } from "react";
import { handleFetchProducts } from "./products";
import { TbCategory } from "react-icons/tb";
import Image from "next/image";
import SkeltonLoading from "./SkeltonLoading";
interface IData {
  categories: [];
}
const Categories: React.FC<IData> = ({ categories }) => {
  const fields = "name,price,stock";
  console.log(categories, "categories here");
  return (
    <div className="w-[95%] m-auto mt-5">
      <h1 className="text-md font-medium">Shop Our Top Categories</h1>

      <div className="categories w-full grid  grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-5 xl:grid-cols-6 mt-3">
        {categories?.length > 0 ? (
          categories.map((item: any) => (
            <div
              className="w-full flex items-center flex-col text-center"
              key={item._id}
            >
              {/* <img src={item?.images ?? item?.images[0]} width={150} height={150} /> */}
              <img
                src={
                  Array.isArray(item?.images) && item?.images.length > 0
                    ? item.images[0]
                    : item?.cover_image
                }
                width={150}
                height={150}
                alt="Image"
              />

              <p className="font-light text-sm mt-2">{item?.name}</p>
            </div>
          ))
        ) : (
          <SkeltonLoading />
        )}

        {/* <div className="catGroup w-full grid grid-cols-1 gap-1 text-center">
          <div className="category h-[250px] bg-[#dcdcdc]"></div>
          <p className="font-bold">Clothing</p>
        </div>
        <div className="catGroup w-full grid grid-cols-1 gap-1 text-center">
          <div className="category h-[250px] bg-[#dcdcdc]"></div>
          <p className="font-bold">Television</p>
        </div>
        <div className="catGroup w-full grid grid-cols-1 gap-1 text-center">
          <div className="category h-[250px] bg-[#dcdcdc]"></div>
          <p className="font-bold">Refrigirators</p>
        </div>
        <div className="catGroup w-full grid grid-cols-1 gap-1 text-center">
          <div className="category h-[250px] bg-[#dcdcdc]"></div>
          <p className="font-bold">Consumers Electronics</p>
        </div>
        <div className="catGroup w-full grid grid-cols-1 gap-1 text-center">
          <div className="category h-[250px] bg-[#dcdcdc]"></div>
          <p className="font-bold">Computers & Office</p>
        </div>
        <div className="catGroup w-full grid grid-cols-1 gap-1 text-center">
          <div className="category h-[250px] bg-[#dcdcdc]"></div>
          <p className="font-bold">Phones & Tablet</p>
        </div>
        <div className="catGroup w-full grid grid-cols-1 gap-1 text-center">
          <div className="category h-[250px] bg-[#dcdcdc]"></div>
          <p className="font-bold">Home Furnishing</p>
        </div>
        <div className="catGroup w-full grid grid-cols-1 gap-1 text-center">
          <div className="category h-[250px] bg-[#dcdcdc]"></div>
          <p className="font-bold">Sports & Entertainment</p>
        </div>
        <div className="catGroup w-full grid grid-cols-1 gap-1 text-center">
          <div className="category h-[250px] bg-[#dcdcdc]"></div>
          <p className="font-bold">Jewery & Watches</p>
        </div>
        <div className="catGroup w-full grid grid-cols-1 gap-1 text-center">
          <div className="category h-[250px] bg-[#dcdcdc]"></div>
          <p className="font-bold">Mobile Accessories</p>
        </div>
        <div className="catGroup w-full grid grid-cols-1 gap-1 text-center">
          <div className="category h-[250px] bg-[#dcdcdc]"></div>
          <p className="font-bold">Beauty & Health</p>
        </div> */}
      </div>
    </div>
  );
};

export default Categories;
