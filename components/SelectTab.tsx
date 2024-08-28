"use client";
import React, { useState } from "react";

const SelectTab = ({ tabs }: any) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      {/* Tab headers */}
      <div className="flex flex-wrap border-b-2 border-gray-300 mb-2">
        {tabs.map((tab: any) => (
          <button
            key={tab.id}
            className={`py-2 px-4 focus:outline-none ${
              tab.id === activeTab
                ? "border-b-2 border-red-500 font-bold"
                : "border-b-1 border-transparent hover:border-gray-300"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="pt-2">
        {tabs.map((tab: any) =>
          tab.id === activeTab ? <div key={tab.id}>{tab.content}</div> : null
        )}
      </div>
    </div>
  );
};

export default SelectTab;
