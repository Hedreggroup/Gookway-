// components/Layout.js
"use client";
import Loader from "@/components/Loader";
import TopNav from "@/components/TopNav";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import Sidebar from "./SideBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AccountDetails from "./components/AccountDetails";

const Layout = ({ children }: any) => {
  const [component, setComponent] = useState<any>(AccountDetails);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState("");

  return (
    <div className="  ">
      <Nav />
      <div className="flex mt-40  sm:mt-28 sm:px-32 px-3 py-12 sm:py-12">
        <Sidebar
          onSelectPage={(component: any) => {
            setComponent(component);
          }}
        />
        {/* <div className="flex-1  flex flex-col"> */}
        <main className="grow   overflow-y-auto   py-2 px-2">
          {component ?? children}
        </main>
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
