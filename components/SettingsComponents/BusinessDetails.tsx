"use client";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slice/authSlice";
import StatusComponent from "../StatusComponent";
import { ProfileItem } from "./ProfileItem";
interface BusinessDetailsProps {
  businessName?: string;
  rcNumber?: string;
  address?: string;
  isVerified?: boolean;
}

const BusinessDetails = ({
  businessName,
  rcNumber,
  address,
  isVerified = false,
}: BusinessDetailsProps) => {
  const user = useSelector(selectUser);
  console.log("IS VERI", user.is_verified);
  return (
    <div className="flex flex-col md:flex-row gap-16">
      <div className="bg-white mybox-shadow p-12">
        <div className="rounded-full h-48 w-48  ">
          <img
            className="h-48 w-48 object-cover rounded-full"
            src="https://res.cloudinary.com/djsk1t9zp/image/upload/v1725704354/product_images/ewphphp9m0yquhbmyxri.png"
            alt="BusinessDetails_img"
          />
        </div>
      </div>
      <div
        style={{
          borderWidth: ".5px",
        }}
        className="p-4 w-full bg-white border-solid border-[#e7e8f1]"
      >
        {ProfileItem("Business Name", businessName ?? "AC HILLS Technolgoies")}
        {ProfileItem("RC Number", rcNumber ?? "RC:329439", false)}
        {ProfileItem("Address", address ?? user?.role)}
        {ProfileItem("Verified", user?.is_verified, false)}
      </div>
    </div>
  );
};

export default BusinessDetails;
