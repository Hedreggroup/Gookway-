import React from "react";

const ProductSkelton = () => {
  return (
    <div className="px-12 flex items-start justify-between   gap-4">
      <div className="bg-gray-100 h-96 w-1/2"></div>
      <div className="w-1/2 gap-4 flex flex-col">
        <div className="bg-gray-100 h-36 w-full rounded-lg"></div>
        <div className="bg-gray-100 h-24 w-3/4 rounded-lg"></div>
        <div className="bg-gray-100 h-16 w-1/2 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ProductSkelton;
