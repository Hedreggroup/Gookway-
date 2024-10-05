"use client";
import Nav from "@/components/Nav";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import Product from "./Product";
import { useGet } from "@/hooks/useGet";
import ProductSkelton from "./ProductSkelton";
import Loader from "@/components/Loader";

// export function generateStaticParams() {
//   return [{ id: "test" }];
// }

const ProductDetail = () => {
  const searchParams = useSearchParams(); // Correct hook for getting search params
  const id = searchParams.get("id");
  const [foundProduct, setFoundProduct] = useState<any>([]);
  const { data, isLoading, error } = useGet(`/products?slug=${id}`);

  return (
    <>
      {/* <Nav /> */}
      <div className="w-full h-auto bg-white pt-44">
        <Product
          foundProduct={data?.data?.products[0]}
          id={id}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ProductDetail />
    </Suspense>
  );
};

export default page;
