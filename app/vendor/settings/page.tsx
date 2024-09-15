import SelectTab from "@/components/SelectTab";
import BusinessDetails from "@/components/SettingsComponents/BusinessDetails";
import Profile from "@/components/SettingsComponents/Profile";
import React from "react";
import EditProfile from "../../../components/SettingsComponents/EditProfile";
import Notification from "@/components/SettingsComponents/Notification";
import UpdatePassword from "../../../components/SettingsComponents/UpdatePassword";

const page = () => {
  const tabs = [
    { id: "tab1", label: "Profile", content: <EditProfile /> },
    { id: "tab2", label: "Notification", content: <Notification /> },
    { id: "tab3", label: "Security", content: <UpdatePassword /> },
  ];
  return (
    <div>
      <SelectTab tabs={tabs} />
    </div>
  );
};

export default page;
