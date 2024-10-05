import React, { useState } from "react";
import AccountDetails from "./components/AccountDetails";
import { IoLocationOutline } from "react-icons/io5";
import UserOrders from "./components/UserOrders";
import Wallet from "./components/Wallet";
import { icon } from "leaflet";
import { Icon } from "@iconify/react/dist/iconify.js";
import { TbTruckDelivery } from "react-icons/tb";

const Sidebar = ({ onSelectPage }: any) => {
  // State to manage sidebar visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const links = [
    {
      name: "Acount Overview",
      component: <AccountDetails />,
      icon: <Icon icon="iconamoon:profile-light" />,
    },
    {
      name: "Orders",
      component: <UserOrders />,
      icon: <TbTruckDelivery size={34} />,
    },
    // {
    //   name: "Saved Items",
    //   component: <AccountDetails />,
    // },

    {
      name: "Wallet",
      icon: <Icon icon="bxs:wallet" />,
      component: <Wallet />,
    },
  ];
  return (
    <div
      className={`pb-12 pt-8 inset-y-0 left-0 z-30 w-64 transition-transform transform bg-white shadow-lg md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close button for mobile */}
      <div className="flex justify-end p-4 md:hidden">
        <button
          onClick={toggleSidebar}
          className="text-gray-600 focus:outline-none"
        >
          {isOpen ? " X" : "Close"}
        </button>
      </div>

      <div className="flex flex-col items-center p-6">
        {/* Profile image */}
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-24 h-24 mb-4 rounded-full"
        />
        <h2 className="text-xl font-semibold">Emmanuel Ojo</h2>
        <p className="text-gray-500">emmanuelojo@gmail.com</p>
      </div>

      {/* Menu Items */}
      <nav className="mt-6">
        <ul className="space-y-4">
          {links.map((link, index) => (
            <li
              key={index}
              onClick={() => {
                onSelectPage?.(link.component);
              }}
              className="flex items-center px-4 gap-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <span className="text-2xl"> {link.icon}</span>
              <span>{link.name}</span>
            </li>
          ))}
          <li>
            <a
              href="#logout"
              className="flex items-center px-4 py-2 gap-4     text-gray-700 hover:bg-gray-100"
            >
              <span>
                <Icon
                  icon="majesticons:logout-line"
                  className="text-red-500 text-2xl"
                />
              </span>
              <span>Log Out</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    //   {/* Content area */}
    //   <div className="flex-1 ml-64">
    //     {/* Toggle button for mobile */}
    //     <div className="p-4 md:hidden">
    //       <button
    //         onClick={toggleSidebar}
    //         className="px-4 py-2 text-white bg-blue-500 rounded-lg"
    //       >
    //         Toggle Sidebar
    //       </button>
    //     </div>

    //     {/* Your main content */}
    //   </div>
  );
};

export default Sidebar;
