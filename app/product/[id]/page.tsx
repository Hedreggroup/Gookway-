// "use client";
// import Product from "@/components/Product";
import Nav from "@/components/Nav";
import React from "react";

export function generateStaticParams() {
  return [{ id: "test" }];
}

const page = (props: any) => {
  return (
    <>
      <Nav />
      <div className="w-full h-auto bg-white pt-44">{/* <Product /> */}</div>
    </>
  );
};

export default page;
