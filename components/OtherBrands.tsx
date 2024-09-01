import Image from "next/image";
import React from "react";
// import sony from "/assets/brand2.png";
// import nike from "/assets/brand3.png";
import apple from "@/app/assets/white-logo.png";
import whiteLogo from "@/app/assets/brand1.png";

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
      logo: whiteLogo,
      subCategory: "Electronics",
    },
    {
      name: "Nike",
      logo: whiteLogo,
      subCategory: "Fashion",
    },
    {
      name: "Kartell",
      logo: whiteLogo,
      subCategory: "Electronics",
    },
    {
      name: "JBL",
      logo: whiteLogo,
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
            className="w-full sm:w-52 flex items-center sm:justify-center gap-8  h-[100px] bg-[#F9F9F9] p-4 rounded-lg"
          >
            <div className="bg-white  rounded-full w-12 h-12 flex items-center justify-center">
              <Image
                src={brand.logo}
                alt={brand.name}
                className="w-10 h-10"
                width={10}
                height={10}
              />
            </div>
            <div>
              <h4>{brand.name}</h4>
              <p className="text-gray-400">{brand.subCategory}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherBrands;
