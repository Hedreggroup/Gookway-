import React from "react";
import AccountDetails from "./components/AccountDetails";
import { Icon } from "@iconify/react";
import { TbTruckDelivery } from "react-icons/tb";
import Wallet from "./components/Wallet";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { User } from "@/models/user.model";
import UserOrders from "./components/UserOrders";
import { TiThMenu } from "react-icons/ti";
import { CiMenuFries } from "react-icons/ci";
import { userSideBarlinks } from "./sideBarlinks";

const Sidebar = ({ onSelectPage, isOpen }: any) => {
  const [user, setUser] = useLocalStorage<User | undefined>("user", undefined);

  return (
    <aside
      className={`py-32 absolute top-0 mt-8 sm:mt-8 inset-y-0 overflow-x-hidden left-0 z-40  bg-white shadow-lg transition-transform duration-300 transform ${
        isOpen ? "w-0 sm:w-64" : "md:w-96"
      } sm:relative sm:translate-x-0 sm:transform-none`}
    >
      {/* Profile section */}
      <div className="flex flex-col items-center p-6">
        <img
          src={user?.profile_image ?? "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-24 h-24 mb-4 rounded-full"
        />
        <h2 className="text-xl font-semibold">{user?.full_name}</h2>
        <p className="text-gray-500">{user?.email}</p>
      </div>
      {/* Menu items */}
      <nav className="mt-6">
        <ul className="space-y-4">
          {userSideBarlinks.map((link, index) => (
            <li
              key={index}
              onClick={() => onSelectPage(link.name)}
              className="flex items-center px-4 gap-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              <span className="text-2xl">{link.icon}</span>
              <span>{link.name}</span>
            </li>
          ))}
          <li>
            <a
              href="#logout"
              className="flex items-center px-4 py-2 gap-4 text-gray-700 hover:bg-gray-100"
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
    </aside>
  );
};

export default Sidebar;
