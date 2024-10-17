"use client";
import Breadcrumbs from "@/components/Bread";
import FAQs from "@/components/FAQs/FAQs";
import kartell from "@/app/assets/brand4.png";
import about from "@/app/assets/about.jpg";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React from "react";
import Image from "next/image";

const page = () => {
  const scrumbs = {
    Home: "Home",
    AboutUs: "About Us",
  };
  return (
    <div>
      <Nav />
      <div className="pt-28">
        <Breadcrumbs items={scrumbs} />
      </div>
      <div className="pt-8 px-24">
        <h1 className="text-4xl">About GOOKWAY</h1>
        <div className="my-4 gap-20 flex items-center justify-between w-full">
          <Image
            src={about}
            alt={"about"}
            className="w-1/2 h-full"
            // style={{ height: "70vh" }}
            // width={21}
            // height={21}
          />
          <div className="gap-4 sm:w-1/2">
            <h1 className="text-4xl font-bold text-center mb-8">
              About GOOKWAY
            </h1>
            <p className="text-lg leading-relaxed mb-4">
              <strong>Gookway.com</strong> is Nigeria’s largest online mall. We
              launched in July 2023, and our mission is to become the engine of
              commerce and trade in Africa. We serve a retail customer base that
              continues to grow exponentially, offering products that span
              various categories including:
            </p>
            <ul className="list-disc pl-8 mb-4 text-lg">
              <li>Phones</li>
              <li>Computers</li>
              <li>Clothing</li>
              <li>Shoes</li>
              <li>Home Appliances</li>
              <li>Books</li>
              <li>Healthcare</li>
              <li>Baby Products</li>
              <li>Personal care</li>
              <li>And much more...</li>
            </ul>
            <p className="text-lg leading-relaxed mb-4">
              Our range of services is designed to ensure optimum levels of
              convenience and customer satisfaction with the retail process.
              These services include:
            </p>
            <ul className="list-disc pl-8 mb-4 text-lg">
              <li>Lowest price guarantee</li>
              <li>7-day free return policy*</li>
              <li>Order delivery tracking</li>
              <li>Dedicated customer service support</li>
              <li>Many other premium services</li>
            </ul>
            <p className="text-lg leading-relaxed mb-4">
              As we continue to expand the mall, our scope of offerings will
              increase in variety, simplicity, and convenience. Join us and
              enjoy the increasing benefits.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We are highly customer-centric and committed to finding innovative
              ways to improve our customers’ shopping experience with us. Feel
              free to give us feedback at{" "}
              <a
                href="mailto:help@gookway.com"
                className="text-blue-600 underline"
              >
                help@gookway.com
              </a>
              .
            </p>
            <p className="text-lg leading-relaxed mb-4">
              For any press-related questions, kindly email us at{" "}
              <a
                href="mailto:press@Gookway.com"
                className="text-blue-600 underline"
              >
                press@Gookway.com
              </a>
              .
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Thank you, and we hope you enjoy your experience with us.
            </p>
            <p className="text-sm italic text-gray-500">
              *Available for select stores.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
