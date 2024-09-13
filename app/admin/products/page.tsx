import ProductList from "@/app/vendor/products/ProductList";
import React from "react";

const page = () => {
  return (
    <div>
      <ProductList isVendor={false} />
    </div>
  );
};

export default page;
