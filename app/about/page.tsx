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
        <div className="my-4 gap-4 flex items-center justify-between w-full">
          <Image
            src={about}
            alt={"about"}
            className="w-1/2 h-6"
            width={21}
            height={21}
          />
          <div className="gap-4 sm:w-1/2">
            Gookway.com is Nigeria’s largest online mall. We launched in July
            2023 and our mission is to become the engine of commerce and trade
            in Africa. We serve a retail customer base that continues to grow
            exponentially, offering products that span various categories
            including Phones, Computers, Clothing, Shoes, Home Appliances,
            Books, healthcare, Baby Products, personal care and much more. Our
            range of services are designed to ensure optimum levels of
            convenience and customer satisfaction with the retail process; these
            services include our lowest price guarantee, 7-day free return
            policy*, order delivery-tracking, dedicated customer service support
            and many other premium services. As we continue to expand the mall,
            our scope of offerings will increase in variety, simplicity and
            convenience; join us and enjoy the increasing benefits. We are
            highly customer-centric and are committed towards finding innovative
            ways of improving our customers’ shopping experience with us; so
            give us some feedback on help@gookway.com. For any press related
            questions, kindly send us an email at press@Gookway.com. Thank you
            and we hope you enjoy your experience with us. *Available for select
            stores Representation of different arms of the organization. Home
            Deals
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
