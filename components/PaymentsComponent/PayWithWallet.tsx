import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import Button from "../Button";
import SlideAnimation from "../Animations/SlideAnimation";
import { useGet } from "@/hooks/useGet";
import { formatCurrency } from "../utils/formatCurrency";
import FundWallet from "../Wallet/FundWallet";
import AnimatedModal from "../AnimatedModal 1/AnimatedModal";

const PayWithWallet = ({ selected, onSelect = () => {} }: any) => {
  const { data: getUser, isLoading: usrLdn, refetch } = useGet(`/users`);
  const [showFundWallet, setshowFundWallet] = useState(false);
  const handleShowWallet = () => {
    console.log("HEU");
    setshowFundWallet(!showFundWallet);
  };
  return (
    <div
      className="bg-red-50 p-4 w-full min-h-28 rounded-xl flex justify-between"
      onClick={onSelect}
    >
      <AnimatedModal
        openModal={showFundWallet}
        setOpenModal={setshowFundWallet}
      >
        <FundWallet setOpenModal={setshowFundWallet} />
      </AnimatedModal>
      <div className=" ">
        <Icon icon="solar:wallet-bold" className="text-4xl text-red-500" />
        Wallet
      </div>
      <div className="flex items-center justify-center gap-2">
        <div>
          <div className="mb-3">
            <p className="text-xs text-gray-500">Wallet Balance:</p>
            <span className="font-medium text-red-500">
              {usrLdn ? "..." : formatCurrency(getUser?.data?.user?.balance)}
            </span>
          </div>
          <Button height={12} isCircular width={32} onClick={handleShowWallet}>
            Fund Wallet
          </Button>
        </div>
        {selected && (
          <Icon
            icon="teenyicons:tick-circle-solid"
            className={`${"text-green-300 text-3xl"}`}
          />
        )}
      </div>
    </div>
  );
};

export default PayWithWallet;
