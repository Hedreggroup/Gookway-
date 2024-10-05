// components/TopNav.js
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const TopNav = ({ toggle, pageTitle }: any) => {
  return (
    <header className="flex items-center justify-between p-4 bg-white ">
      {/* <div className=""></div> */}
      <Icon icon="ci:menu-alt-01" className="text-3xl" onClick={toggle} />
      <div className="text-xl font-semibold text-gray-700">
        {pageTitle ?? "Dashboard"}
      </div>
      <div>
        <img
          className="w-8 h-8 rounded-full"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
      </div>
    </header>
  );
};

export default TopNav;
