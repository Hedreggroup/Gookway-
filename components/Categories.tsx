"use client"
import React, { useEffect, useState } from "react";
import { handleFetchProducts } from "./products";
const Categories = async () => {
  const fields = "name,price,stock"
  const [products, setProducts] = useState<any>()
  
  useEffect(()=>{
    handleFetchProducts(fields).then((response)=>{
      console.log(response)
      setProducts(response)
    }).catch(e=> console.log(e))
  },[])

  return (
    <div className="w-[95%] m-auto mt-5">
      <h1 className="text-xl font-bold">Shop Our Top Categories</h1>

      <div className="categories w-full grid grid-cols-2 gap-4 md:grid-cols-6 mt-3">
        <div className="catGroup w-full grid grid-cols-1 gap-1 text-center">
          <div className="category h-[250px] bg-[#dcdcdc]"></div>
          <p className="font-bold">Groceries</p>
        </div>
        <div className="catGroup w-full grid grid-cols-1 gap-1 text-center">
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
        </div>
      </div>
    </div>
  );
};

export default Categories;
