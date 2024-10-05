import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import Button from "../Button";
import SlideAnimation from "../Animations/SlideAnimation";

const PayWithWallet = () => {
  return (
    <div className="bg-red-50 p-4 w-full min-h-28 rounded-xl flex justify-between">
      <div className=" ">
        <Icon icon="solar:wallet-bold" className="text-4xl text-red-500" />
        Wallet
      </div>
      <div>
        <div className="mb-3">
          <p className="text-xs text-gray-500">Wallet Balance:</p>
          <span className="font-medium text-red-500">N432342</span>
        </div>
        <Button height={12} isCircular width={32}>
          Fund Wallet
        </Button>
      </div>
    </div>
  );
};

export default PayWithWallet;
