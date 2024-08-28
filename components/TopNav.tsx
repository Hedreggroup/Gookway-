// components/TopNav.js
import React from "react";

const TopNav = ({ toggleSidebar, pageTitle }: any) => {
  return (
    <header className="flex items-center justify-between p-4 bg-white ">
      <button className="text-gray-600 md:hidden" onClick={toggleSidebar}>
        {/* Icon for opening sidebar on small screens */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
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
