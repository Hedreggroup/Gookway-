import Image from "next/image";
import React from "react";
// import sony from "/assets/brand2.png";
// import nike from "/assets/brand3.png";
import apple from "@/app/assets/brand1.png";
import sony from "@/app/assets/brand2.png";
import nike from "@/app/assets/brand3.png";
import kartell from "@/app/assets/brand4.png";
import jbl from "@/app/assets/brand5.png";

// import kartell from "/assets/brand3.png";
// import jbl from "/assets/brand4.png";

const OtherBrands = () => {
  const brands = [
    {
      name: "Apple",
      logo: apple,
      subCategory: "Electronics",
    },
    {
      name: "Sony",
      logo: sony,
      subCategory: "Electronics",
    },
    {
      name: "Nike",
      logo: nike,
      subCategory: "Fashion",
    },
    {
      name: "Kartell",
      logo: kartell,
      subCategory: "Electronics",
    },
    {
      name: "JBL",
      logo: jbl,
      subCategory: "Headphones",
    },
  ];
  return (
    <div className="w-[95%] m-auto mt-5">
      <h1 className="text-2xl my-4">Popular Brands</h1>
      <div className="flex flex-wrap items-center gap-2 ">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="w-full sm:w-52 flex items-center sm:justify-start gap-4  h-[100px] bg-[#F9F9F9] p-4 rounded-lg"
          >
            <div className="bg-white  rounded-full w-16 h-16 flex items-center justify-center">
              <Image
                src={brand.logo}
                alt={brand.name}
                // className="w-12 h-6"
                width={21}
                height={21}
              />
            </div>
            <div>
              <h4>{brand.name}</h4>
              <p className="text-gray-400 text-xs">{brand.subCategory}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherBrands;
