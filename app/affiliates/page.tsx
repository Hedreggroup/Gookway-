import Image from "next/image";
import React from "react";
// import sony from "/assets/brand2.png";
// import nike from "/assets/brand3.png";
import apple from "@/app/assets/brand1.png";
import sony from "@/app/assets/brand2.png";
import nike from "@/app/assets/brand3.png";
import kartell from "@/app/assets/brand4.png";
import jbl from "@/app/assets/brand5.png";
import kadpay from "@/app/assets/partner1.png";
import buyenergy from "@/app/assets/partner2.png";
import BrandItem from "@/components/BrandItem";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

// import kartell from "/assets/brand3.png";
// import jbl from "/assets/brand4.png";

const page = () => {
  const brands = [
    {
      name: "Apple",
      logo: apple,
      subCategory: "Electronics",
    },
    {
      name: "Sony",
      logo: sony,
      subCategory: "Electronics",
    },
    {
      name: "Nike",
      logo: nike,
      subCategory: "Fashion",
    },
    {
      name: "Kartell",
      logo: kartell,
      subCategory: "Electronics",
    },
    {
      name: "JBL",
      logo: jbl,
      subCategory: "Headphones",
    },
  ];
  const partners = [
    {
      name: "Kadpay",
      logo: kadpay,
      subCategory: "Fintech",
    },
    {
      name: "Buy Energy Units",
      logo: buyenergy,
      subCategory: "Electronics",
    },
    {
      name: "Omvi",
      logo: nike,
      subCategory: "Mobility & Logistics",
    },
    {
      name: "Hedreg",
      logo: kartell,
      subCategory: "Parent Company",
    },
    {
      name: "Pay Stack",
      logo: jbl,
      subCategory: "Payment Solution Partner",
    },
  ];
  return (
    <>
      <Nav />
      <div className="w-[95%] m-auto mt-40">
        <h1 className="text-2xl my-4">Parners </h1>
        <div className="flex flex-wrap items-center gap-2 ">
          {partners.map((brand: any) => (
            <BrandItem brand={brand} key={brand.name} />
          ))}
        </div>
        <h1 className="text-2xl my-4">Popular Brands</h1>
        <div className="flex flex-wrap items-center gap-2 ">
          {brands.map((brand: any) => (
            <BrandItem brand={brand} key={brand.name} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
