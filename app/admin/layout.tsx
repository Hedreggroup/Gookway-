// components/Layout.js
"use client";
import Loader from "@/components/Loader";
import Sidebar from "@/components/SideBar";
import TopNav from "@/components/TopNav";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

const Layout = ({ children }: any) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState("");

  let links = [
    {
      heading: "Main Menu",
      items: [
        {
          name: "Dashboard",
          url: "/admin",
          icon: <Icon icon="hugeicons:home-01" />,
        },
        {
          name: "Order Management",
          url: "/admin/order-management",
          icon: <Icon icon="iconoir:cart" />,
        },
        {
          name: "Customers",
          url: "/admin/customers",
          icon: <Icon icon="mynaui:users" />,
        },
        {
          name: "Vendors",
          url: "/admin/vendors",
          icon: <Icon icon="circum:shop" />,
        },
        // {
        //   name: "Categories",
        //   url: "/admin/categories",
        //   icon: <Icon icon="tabler:circle-square" />,
        // },
        {
          name: "Transactions",
          url: "/admin/transactions",
          icon: <Icon icon="bx:file" />,
        },
        // {
        //   name: "Reviews",
        //   url: "/admin/reviews",
        //   icon: <Icon icon="material-symbols-light:reviews-outline" />,
        // },
      ],
    },
    {
      heading: "Products",
      items: [
        {
          name: "Product List",
          url: "/admin/products",
          icon: <Icon icon="carbon:cube" />,
        },
      ],
    },
    {
      heading: "Admin",
      items: [
        {
          name: "Account",
          url: "/admin/account",
          icon: <Icon icon="material-symbols:account-circle" />,
        },
        {
          name: "Settings",
          url: "/admin/settings",
          icon: <Icon icon="ri:settings-fill" />,
        },
      ],
    },
  ];
  return (
    <div className="flex h-screen bg-gray-100">
      {/* <Loader loading /> */}
      <Sidebar
        isAdmin
        links={links}
        isOpen={isSidebarOpen}
        toggle={() => setSidebarOpen(!isSidebarOpen)}
        onSelectSideBar={(title: string) => setPageTitle(title)}
      />
      <div className="flex-1 flex flex-col">
        <TopNav
          toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
          pageTitle={pageTitle}
        />
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
