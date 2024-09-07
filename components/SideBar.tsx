"use client";
// components/Sidebar.js
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { logout } from "@/components/store/slice/authSlice";
import {
  FaTachometerAlt,
  FaShoppingCart,
  FaUsers,
  FaTags,
  FaExchangeAlt,
} from "react-icons/fa";
import { Icon } from "@iconify/react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Image from "next/image";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const Sidebar = ({
  isOpen,
  toggle,
  onSelectSideBar,
  links = [],
  isAdmin = false,
}: any) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [user, setUser] = useLocalStorage<any>("user", "");
  const [token, setToken] = useLocalStorage<any>("token", "");
  const [expanded, setExpanded] = useState(true);
  const [selectedLink, setSelectedLink] = useLocalStorage<string>(
    "selected-sidebar-name",
    ""
  );
  const buildSettingsGroup = (index: number, link: any) => {
    return (
      <div key={link?.heading}>
        <span
          className={`${
            expanded ? "pl-4" : "pl-0 "
          } text-white text-center uppercase text-xs`}
        >
          {link?.heading}
        </span>
        {link?.items.map((link: any, index: number) => (
          <li
            key={link?.name}
            className={`${
              selectedLink === link.name && "bg-white"
            } mt-2 mx-2 text-gray-300 text-sm p-3 hover:bg-indigo-200/50  rounded-md`}
          >
            <Link
              href={link.url}
              onClick={() => handleLinkClick(link.name)}
              className="flex items-center font-semibold gap-x-4"
            >
              <span
                //   className={`${
                //     !collapsed ? "block" : "block"
                //   } pl-2 text-2xl`}
                className={`${
                  selectedLink === link.name ? "text-red-600 " : "text-white "
                } text-xl`}
              >
                {link.icon}
              </span>
              <span
                //     ${
                //     !collapsed && "hidden"
                //   }
                className={`
                        ${
                          selectedLink === link.name
                            ? "text-red-600 font-bold"
                            : "text-white font-light"
                        }
                      duration-300 origin-left pl-2 text-sm`}
              >
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </div>
    );
  };
  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
    onSelectSideBar(link);
  };
  const handleLogout = (link: string) => {
    dispatch(logout());
    setToken("");
    router.push("/vendor-login");
  };
  useEffect(() => {
    if (!selectedLink) {
      setSelectedLink("Dashboard");
    }
    onSelectSideBar(selectedLink);
  }, [selectedLink]);

  useEffect(() => {
    if (!selectedLink) {
      setSelectedLink("Dashboard");
    }
    handleLinkClick(selectedLink);
  }, []);
  return (
    <div
      className={classNames(
        ` bg-red-500 shadow-md md:block duration-300 z-50 overflow-y-scroll ${
          expanded ? "w-56" : "w-16 overflow-x-hidden "
        }`,
        {
          hidden: !isOpen,
        }
      )}
    >
      <button className="md:hidden p-4" onClick={toggle}>
        Close
      </button>
      <div className="flex items-center justify-between p-4 text-xl font-semibold text-white">
        <span className={`${expanded ? "block" : " hidden"}`}>
          {isAdmin ? (
            <div className="flex items-center justify-center ">
              <Image
                src="/assets/white-logo.png" // Path to your logo
                alt="Center Image"
                className=" inset-0 m-auto animate-zoom"
                width={50} // Specify the width of the logo
                height={50} // Specify the height of the logo
              />
              Admin
            </div>
          ) : (
            "Gookway."
          )}
        </span>
        <Icon
          onClick={() => setExpanded(!expanded)}
          icon="line-md:menu-fold-left"
          className={`duration-200 ${expanded ? "" : "rotate-180"}`}
        />
      </div>
      <nav className="overflow-y-scroll">
        <ul className="space-y-2">
          {links.map((link: any, index: number) =>
            buildSettingsGroup(index, link)
          )}
        </ul>
        <div className="w-full mt-4 rounded flex justify-center items-end">
          <Button
            // color="white"
            onClick={handleLogout}
            prefixIcon={
              <Icon className="rotate-180" icon="solar:logout-2-bold-duotone" />
            }
          >
            Logout
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
