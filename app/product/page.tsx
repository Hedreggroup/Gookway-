"use client";
import Nav from "@/components/Nav";
import Product from "@/components/Product";
import { useSearchParams } from "next/navigation";
import React from "react";

// export function generateStaticParams() {
//   return [{ id: "test" }];
// }

const page = () => {
  // const searchParams = useSearchParams(); // Correct hook for getting search params
  // const id = searchParams.get("id");
  return (
    <>
      {/* <Nav /> */}
      <div className="w-full h-auto bg-white pt-44">
        {/* <Product id={id} /> */}
      </div>
    </>
  );
};

export default page;
