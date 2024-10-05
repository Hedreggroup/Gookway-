import SlideAnimation from "@/components/Animations/SlideAnimation";
import EditProfile from "@/components/SettingsComponents/EditProfile";
import React from "react";

const AccountDetails = () => {
  return (
    <SlideAnimation>
      <EditProfile />
    </SlideAnimation>
  );
};

export default AccountDetails;
