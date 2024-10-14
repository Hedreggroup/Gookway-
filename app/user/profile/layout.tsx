// components/Layout.js
"use client";
import Loader from "@/components/Loader";
import TopNav from "@/components/TopNav";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import Sidebar from "./SideBar";
import { RiMenu3Fill } from "react-icons/ri";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AccountDetails from "./components/AccountDetails";
import { CiMenuFries } from "react-icons/ci";
import { TiThMenu } from "react-icons/ti";
const Layout = ({ children }: any) => {
  const [component, setComponent] = useState<any>(AccountDetails);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState("");

  return (
    <div className="  ">
      <Nav />

      <div className="flex mt-40  sm:mt-2 sm:px-28 px-3 py-12 sm:py-12">
        <Sidebar
          isOpen={isSidebarOpen}
          onSelectPage={(component: any) => {
            setComponent(component);
          }}
        />
        {/* <div className="flex-1  flex flex-col"> */}
        <main className="grow overflow-y-auto   py-2 px-2">
          <div className="right absolute top-0 z-50 mt-40 ">
            <RiMenu3Fill
              onClick={() => {
                setSidebarOpen(!isSidebarOpen);
              }}
              className="cursor-pointer rotate-180 text-white  text-3xl bg-red-500 rounded-lg h-12 w-12"
            />
          </div>
          {component ?? children}
        </main>
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
