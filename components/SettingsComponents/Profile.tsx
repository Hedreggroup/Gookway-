"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slice/authSlice";
import StatusComponent from "../StatusComponent";
import avatar from "@/app/assets/avatar.jpg";
import { ProfileItem } from "./ProfileItem";
import { useGet } from "@/hooks/useGet";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { User } from "@/models/user.model";

const Profile = () => {
  const { data: getUser, isLoading, error, refetch } = useGet(`/users`);
  const [user, setUser] = useLocalStorage<User | undefined>("user", undefined);
  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    if (getUser?.data) {
      setCurrentUser(getUser?.data?.user);
    }
  }, [isLoading]);
  return (
    <div className="flex flex-col md:flex-row gap-16">
      <div className="bg-white mybox-shadow p-12">
        <div className="rounded-full h-48 w-48  ">
          <img
            className="h-48 w-48 object-cover rounded-full"
            src={
              currentUser!.profile_image == "default.jpg"
                ? avatar.src
                : currentUser?.profile_image
            }
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
        {ProfileItem("Name", currentUser!.full_name)}
        {ProfileItem("Email", currentUser!.email, false)}
        {ProfileItem("ROle", currentUser!.role)}
        {ProfileItem("Verified", currentUser!.is_verified, false)}
      </div>
    </div>
  );
};

export default Profile;
