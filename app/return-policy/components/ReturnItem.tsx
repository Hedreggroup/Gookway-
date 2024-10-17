"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { ReactNode } from "react";

const ReturnItem = ({
  header,
  subHeader,
  contents,
  bgcolor,
}: //   icon,
{
  header: string;
  subHeader: string;
  contents: string;
  bgcolor?: string;
  //   icon: ReactNode;
}) => {
  return (
    <div className="border border-1 border-gray-300 rounded-xl p-8">
      <div className="">
        {/* {icon} */}
        <div
          className={`${bgcolor} my-4 flex items-center justify-center w-16 h-16 rounded-lg text-white`}
        >
          <Icon icon="solar:arrow-down-line-duotone" className="text-3xl" />
        </div>
        <h3 className="text-2xl">{header}</h3>
      </div>
      <h5 className="text-xl my-2">{subHeader}</h5>
      <p className="text-sm text-gray-500">{contents}</p>
    </div>
  );
};

export default ReturnItem;
