import React, { useEffect, useState } from "react";
import { handleFetchProducts } from "./products";
import { TbCategory } from "react-icons/tb";
import Image from "next/image";
interface IData{
  categories: []
}
const Categories:React.FC<IData> =  ({categories}) => {
  const fields = "name,price,stock"
  console.log(categories)
  return (
    <div className="w-[95%] m-auto mt-5">
      <h1 className="text-xl font-bold">Shop Our Top Categories</h1>

      <div className="categories w-full grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6 mt-3">
        {categories.length > 0 ? (
            categories.map((item:any)=> (
              <div className="catGroup w-full grid grid-cols-1 gap-1 text-center" key={item._id}>
              <div className="category h-[250px] bg-[#dcdcdc] flex justify-center items-center">
                  <img src={item.images[0]} width={150} height={150}/>
              {/* // <Image src={item[0]} width={150} height={150} alt='product image'/> */}
              {/* <TbCategory size={200}/> */}
              </div>
              <p className="font-bold">{item?.name}</p>
            </div>
            ))
        ):(
          <h1 className='text-gray-400 text-center text-xl'>Loading Please Wait...</h1>
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
