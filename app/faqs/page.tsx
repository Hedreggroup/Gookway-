"use client";
import FAQs from "@/components/FAQs/FAQs";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React from "react";

const page = () => {
  return (
    <div>
      <Nav />
      <div className="pt-24">
        <FAQs />
      </div>
      <Footer />
    </div>
  );
};

export default page;
