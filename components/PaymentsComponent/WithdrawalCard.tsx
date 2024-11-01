import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../Button";
import AnimatedModal from "../AnimatedModal 1/AnimatedModal";
import FundWallet from "../Wallet/FundWallet";
import WithdrawFromWallet from "../Wallet/WithdrawFromWallet";
import { useState } from "react";
import { useGet } from "@/hooks/useGet";

const WithdrawalCard = ({ selected, onSelect = () => {} }: any) => {
  const { data: getUserTransactions, isLoading } = useGet(`/transactions/`);

  const [showFundWallet, setshowFundWallet] = useState(false);
  const handleShowWallet = () => {
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
        <WithdrawFromWallet setOpenModal={setshowFundWallet} />
      </AnimatedModal>
      <div className=" ">
        <Icon
          icon="fluent:wallet-credit-card-48-filled"
          className="text-4xl text-red-500"
        />
        Transactions
      </div>
      <div className="flex items-center justify-center gap-2">
        <div>
          <div className="mb-3">
            <p className="text-xs text-gray-500">Total Transactions</p>
            <span className="font-medium text-red-500">
              {isLoading ? "..." : getUserTransactions?.data.length}
            </span>
          </div>
          <Button height={12} isCircular width={32} onClick={handleShowWallet}>
            Withdraw
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

export default WithdrawalCard;
