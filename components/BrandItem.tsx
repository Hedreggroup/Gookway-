import Image from "next/image";
import React from "react";

export interface Brand {
  name: string;
  logo: string;
  subCategory?: string;
}
interface BrandItemProps {
  brand: Brand; // Prop that takes a Brand object
}

const BrandItem: React.FC<BrandItemProps> = ({ brand }) => {
  return (
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
  );
};

export default BrandItem;
