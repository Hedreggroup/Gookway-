"use client";
import React from "react";
import { ProfileItem } from "./ProfileItem";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slice/authSlice";

const Accounts = () => {
  const user = useSelector(selectUser);
  console.log("IS VERI", user.is_verified);

  return (
    <div className="flex gap-16">
      <div className="bg-white mybox-shadow p-12">
        <div className="rounded-full h-48 w-48  ">
          <img
            className="h-48 w-48 object-cover rounded-full"
            src="https://res.cloudinary.com/djsk1t9zp/image/upload/v1725704354/product_images/ewphphp9m0yquhbmyxri.png"
            alt="profile_img"
          />
        </div>
      </div>
      <div
        style={{
          borderWidth: ".5px",
        }}
        className="p-4 w-full bg-white border-solid border-[#e7e8f1]"
      >
        {ProfileItem("Account Number", user?.full_name)}
        {ProfileItem("Bank Name", user?.email, false)}
        {ProfileItem("Account Type", user?.role)}
        {ProfileItem("Verified", user?.is_verified, false)}
      </div>
    </div>
  );
};

export default Accounts;
