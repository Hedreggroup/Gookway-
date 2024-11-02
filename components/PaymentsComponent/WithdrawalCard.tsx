import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../Button";
import AnimatedModal from "../AnimatedModal 1/AnimatedModal";
import FundWallet from "../Wallet/FundWallet";
import WithdrawFromWallet from "../Wallet/WithdrawFromWallet";
import { useEffect, useState } from "react";
import { useGet } from "@/hooks/useGet";
import { usePost } from "@/hooks/usePosts";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { User } from "@/models/user.model";

const WithdrawalCard = ({ selected, onSelect = () => {} }: any) => {
  const { data: getUserTransactions, isLoading } = useGet(`/transactions/`);
  const [user, setUser] = useLocalStorage<User | null>("user", null);
  const { data, isLoading: ldn, execute } = usePost();

  const [showFundWallet, setshowFundWallet] = useState(false);
  const handleShowWallet = () => {
    execute(`/users/resend-otp`, {
      email: user!.email,
      otpType: "withdraw",
    });
  };
  useEffect(() => {
    if (data) {
      setshowFundWallet(!showFundWallet);
    }
  }, [data]);
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
          <Button
            height={12}
            isCircular
            width={32}
            onClick={handleShowWallet}
            disabled={ldn}
          >
            {ldn ? "Getting Otp..." : "Withdraw"}
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
