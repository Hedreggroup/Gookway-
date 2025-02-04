// components/Layout.js
"use client";
import Sidebar from "@/components/SideBar";
import TopNav from "@/components/TopNav";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { Component, ReactNode, useState } from "react";

const Layout = ({ children }: any) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState("");

  let links = [
    {
      heading: "Main Menu",
      items: [
        {
          name: "Dashboard",
          url: "/vendor",
          icon: <Icon icon="hugeicons:home-01" />,
        },
        {
          name: "Orders",
          url: "/vendor/orders",
          icon: <Icon icon="iconoir:cart" />,
        },
        // {
        //   name: "Reviews",
        //   url: "/vendor/reviews",
        //   icon: <Icon icon="material-symbols-light:reviews-outline" />,
        // },
      ],
    },
    {
      heading: "Finance",
      items: [
        {
          name: "Transactions",
          url: "/vendor/transactions",
          icon: <Icon icon="ph:hand-withdraw-light" />,
        },
      ],
    },
    {
      heading: "Products",
      items: [
        {
          name: "Add Products",
          url: "/vendor/add-product",
          icon: <Icon icon="gala:add" />,
        },
        {
          name: "Product List",
          url: "/vendor/products",
          icon: <Icon icon="carbon:cube" />,
        },
      ],
    },
    {
      heading: "Admin",
      items: [
        {
          name: "Team Members",
          url: "/vendor/teams",
          icon: (
            <Icon icon="lineicons:microsoft-teams" width="24" height="24" />
          ),
        },
        {
          name: "Account",
          url: "/vendor/account",
          icon: <Icon icon="material-symbols:account-circle" />,
        },
        {
          name: "Settings",
          url: "/vendor/settings",
          icon: <Icon icon="ri:settings-fill" />,
        },
      ],
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        links={links}
        isOpen={isSidebarOpen}
        toggle={() => setSidebarOpen(!isSidebarOpen)}
        onSelectSideBar={(title: string) => setPageTitle(title)}
      />
      <div className="flex-1 flex flex-col">
        <TopNav
          toggle={() => setSidebarOpen(!isSidebarOpen)}
          pageTitle={pageTitle}
        />
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
