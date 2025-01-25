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
import withAuth from "@/hoc/withAuth";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { userSideBarlinks, UserSideLink } from "./sideBarlinks";
const Layout = ({ children }: any) => {
  const [selectedComponent, setSelectedComponent] = useLocalStorage<string>(
    "user-selected-sidebar",
    userSideBarlinks[0].name
  );
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState("");

  console.log(
    "selectedComponent.component",
    userSideBarlinks.find((sideLink, i) => sideLink.name === selectedComponent)
  );
  return (
    <div className="  ">
      <Nav />
      <div
        className="flex mt-40   sm:mt-2 sm:px-28 px-3 py-12 sm:py-12"
        style={{ alignItems: "self-start" }}
      >
        <Sidebar
          isOpen={isSidebarOpen}
          onSelectPage={(component: any) => {
            setSelectedComponent(component);
          }}
        />
        {/* <div className="flex-1  flex flex-col"> */}
        <main className="grow overflow-y-auto   py-2 px-2">
          <div className="right absolute sm:top-0 z-50 sm:mt-40">
            <RiMenu3Fill
              onClick={() => {
                setSidebarOpen(!isSidebarOpen);
              }}
              className="cursor-pointer rotate-180 text-white   text-3xl bg-red-500 rounded-lg h-12 w-12"
            />
          </div>
          <div className="mt-16 sm:mt-40">
            {
              userSideBarlinks.find(
                (sideLink, i) => sideLink.name === selectedComponent
              )?.component
            }
          </div>
        </main>
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default withAuth(Layout);
