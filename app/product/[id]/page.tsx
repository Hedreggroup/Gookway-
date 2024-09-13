"use client";
import Nav from "@/components/Nav";
import Product from "@/components/Product";
import React from "react";

// export function generateStaticParams() {
//   return [{ id: "test" }];
// }

const page = () => {
  return (
    <>
      <Nav />
      <div className="w-full h-auto bg-white pt-44">
        <Product />
      </div>
    </>
  );
};

export default page;
