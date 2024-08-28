import React from "react";
import Cart from "@/components/Cart";
import Nav from "@/components/Nav";

const page = () => {
  return (
    <>
    <Nav />
      <div className="mt-60 lg:mt-40">
        <Cart />
      </div>
    </>
  );
};

export default page;
