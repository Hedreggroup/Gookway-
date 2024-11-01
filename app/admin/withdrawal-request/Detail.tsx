import TransactionReceipt from "@/components/Reciept/Reciept";
import Transaction from "@/components/Reciept/transactions.interface";
import { useGet } from "@/hooks/useGet";

import React, { useEffect } from "react";

const Detail = ({ transaction }: { transaction: Transaction }) => {
  const { data, isLoading, error, refetch } = useGet(
    `/transactions/approve-withdraw/${transaction.order_id}`,
    false
  );

  useEffect(() => {}, [data]);
  const handleApprove = () => {
    refetch();
  };
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
