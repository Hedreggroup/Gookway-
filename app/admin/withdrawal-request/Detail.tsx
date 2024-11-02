import TransactionReceipt from "@/components/Reciept/Reciept";
import Transaction from "@/components/Reciept/transactions.interface";
import { useGet } from "@/hooks/useGet";

import React, { useEffect } from "react";

const Detail = ({
  transaction,
  setOpenModal,
}: {
  transaction: Transaction;
  setOpenModal: any;
}) => {
  const { data, isLoading, error, refetch } = useGet(
    `/transactions/approve-withdraw/${transaction._id}`,
    false
  );

  const handleApprove = () => {
    refetch();
  };
  useEffect(() => {
    if (data) {
      setOpenModal?.(false);
    }
  }, [data]);
  return (
    <div>
      <p className="text-xl">View Transaction</p>
      <div className="p-4">
        <TransactionReceipt
          transaction={transaction}
          onApprove={handleApprove}
          isLoadingApproval={isLoading}
        />
      </div>
    </div>
  );
};

export default Detail;
