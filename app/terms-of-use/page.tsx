"use client";
import Breadcrumbs from "@/components/Bread";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React from "react";
import TermsOfUse from "./TermsOfUse";

const page = () => {
  const scrumbs = {
    Home: "Home",
    AboutUs: "Terms Of Use",
  };
  return (
    <>
      <Nav />
      <div className="pt-28">
        <Breadcrumbs items={scrumbs} />
      </div>
      <div className="pt-8 px-24">
        <TermsOfUse />
      </div>
      <Footer />
    </>
  );
};

export default page;
