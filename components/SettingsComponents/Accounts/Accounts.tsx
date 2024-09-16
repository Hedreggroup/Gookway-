"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slice/authSlice";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ProfileItem } from "../ProfileItem";
import AddAccount from "./AddAccount";
import Button from "@/components/Button";
import AnimatedModal from "@/components/AnimatedModal 1/AnimatedModal";
import { useGet } from "@/hooks/useGet";

const Accounts = () => {
  const user = useSelector(selectUser);
  const { data: getUser, isLoading, error, refetch } = useGet(`/users`);
  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    if (getUser?.data) {
      setCurrentUser(getUser?.data?.user);
    }
  }, [isLoading]);
  const [showAddContainerModal, setShowAddContainerModal] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-16">
      <AnimatedModal
        openModal={showAddContainerModal}
        setOpenModal={setShowAddContainerModal}
      >
        <AddAccount setOpenModal={setShowAddContainerModal} />
      </AnimatedModal>
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
        <div
          className="absolute text-2xl right-8 text-red-600 cursor-pointer"
          onClick={() => setShowAddContainerModal(true)}
        >
          <Icon icon="fluent:edit-12-filled" />
        </div>
        {ProfileItem("Account Number", currentUser?.account_no ?? "N/A")}
        {ProfileItem("Bank Name", currentUser?.bank_name ?? "N/A", false)}
        {ProfileItem("Account Name", currentUser?.account_name ?? "N/A")}
        {ProfileItem("Verified", currentUser?.is_verified, true)}
      </div>
    </div>
  );
};

export default Accounts;
