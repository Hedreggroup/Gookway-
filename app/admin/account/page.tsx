import SelectTab from "@/components/SelectTab";
import Accounts from "@/components/SettingsComponents/Accounts/Accounts";
import BusinessDetails from "@/components/SettingsComponents/BusinessDetails";
import Profile from "@/components/SettingsComponents/Profile";
import React from "react";

const page = () => {
  const tabs = [
    { id: "tab1", label: "Profile", content: <Profile /> },
    {
      id: "tab2",
      label: "Business Details",
      content: (
        <BusinessDetails
          businessName="Gookway Ecommerce LTD"
          address="10 gwaripan way, ABUJA"
        />
      ),
    },
    { id: "tab3", label: "My Accounts", content: <Accounts /> },
  ];
  return (
    <div>
      <SelectTab tabs={tabs} />
    </div>
  );
};

export default page;
