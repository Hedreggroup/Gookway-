"use client";
import React from "react";
import ReturnItem from "./components/ReturnItem";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Icon } from "@iconify/react/dist/iconify.js";

const page = () => {
  const items = [
    {
      title: "Products Opened/Altered",
      description:
        "Products that have been altered from their original or opened by an authorized personnel without permission.",
      icon: "fa6-solid:box-open",
    },
    {
      title: "Missing Serial or UPC",
      description:
        "Products with tampered or missing serial Universal Product Code numbers (UPC).",
      icon: "streamline:lost-and-found-solid",
    },
    {
      title: "Perishable Goods",
      description:
        "Perishable goods cannot be returned except a valid reason is raised at the point of delivery with affirmation from the dispatcher.",
      icon: "arcticons:heyfun",
    },
    {
      title: "Misuse Damaged Products",
      description: "Products damaged due to misuse.",
      icon: "grommet-icons:document-missing",
    },
    {
      title: "Beauty & Health",
      description: "Products in beauty, health and personal care category.",
      icon: "icon-park-twotone:beauty",
    },
    {
      title: "Jewelry & Personal Items",
      description: "Jewellery, innerwear, bed sheets, lingerie and socks.",
      icon: "maki:jewelry-store",
    },
    {
      title: "Books & CDs",
      description: "Books and CDs.",
      icon: "twemoji:books",
    },
  ];
  return (
    <>
      <Nav />
      <div className="mt-40 p-20">
        <h1 className="text-3xl mb-4">Return Instructions</h1>
        <div className="my grid grid-cols-2 gap-4">
          <ReturnItem
            // icon={}
            bgcolor="bg-blue-400"
            header={"Step 1"}
            subHeader={"Send a Complaint"}
            contents={
              "Also include pictures of the product that was delivered to help@gookway.com as a means of evidence."
            }
          />
          <ReturnItem
            bgcolor="bg-yellow-400"
            header={"Step 2"}
            subHeader={"Return after Authorization"}
            contents={
              "Once your claim is validated, we will provide information on the most suitable means of getting the item from you"
            }
          />
          <ReturnItem
            bgcolor="bg-red-500"
            header={"Step 3"}
            subHeader={"Track Return Status"}
            contents={
              "We will send you our agens number so you can track the status"
            }
          />
          <ReturnItem
            bgcolor="bg-green-400"
            header={"Step 4"}
            subHeader={"Get Resolution"}
            contents={
              "Upon our confirmation of the receipt of the item by the Seller, Konga will assist only by notifying the Seller to resolve the matter as its sole responsibility without any further obligation on Konga"
            }
          />
        </div>
        <h1 className="text-3xl  my-4">Items not eligible for Returns</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 my-3">
              <Icon
                icon={item.icon ?? "fa6-solid:box-open"}
                className="text-5xl text-red-500"
              />
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
