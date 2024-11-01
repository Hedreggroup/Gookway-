"use client";
import PayWithWallet from "@/components/PaymentsComponent/PayWithWallet";
import WithdrawalCard from "@/components/PaymentsComponent/WithdrawalCard";
import SelectTab from "@/components/SelectTab";
import Table from "@/components/Table/Table";
import { useGet } from "@/hooks/useGet";
import { Icon } from "@iconify/react/dist/iconify.js";
import moment from "moment";
import React, { useEffect, useState } from "react";

const page = () => {
  const [transactions, setTransactions] = useState<any>([]);
  const { data: getUserTransactions, isLoading } = useGet(`/transactions/`);

  let columnData = [
    { heading: "Reference", value: "ref" },
    { heading: "Created", value: "created_at" },
    { heading: "Amount ", value: "amount" },
    { heading: "Transaction Type", value: "type" },
    { heading: "Status", value: "status" },
    // { heading: "Payment", value: "payment_type" },
  ];
  useEffect(() => {
    if (!isLoading && getUserTransactions?.data) {
      const updatedData = getUserTransactions?.data?.map((transaction: any) => {
        return {
          ...transaction,
          created_at: (
            <div className="text-sm">
              {moment(transaction?.created_at).format("DD MMM, YYYY")}
            </div>
          ),
          status: transaction?.transaction_status,
          amount: <div className="text-sm">₦ {transaction?.amount}</div>,
          type: (
            <span className="flex items-center gap-2">
              {transaction?.transaction_type}
              {transaction?.transaction_type !== "withdrawal" ? (
                <Icon icon="ep:top-right" className="text-green-400" />
              ) : (
                <Icon icon="prime:arrow-down-right" className="text-red-400" />
              )}
            </span>
          ),
        };
      });

      setTransactions(updatedData);
    }
  }, [getUserTransactions]);

  const depositTrx = transactions.filter(
    (order: any) => order.transaction_type === "deposit"
  );
  const withdrawalTrx = transactions.filter((order: any) =>
    ["withdrawal"].includes(order.transaction_type)
  );
  console.log("getUserTransactions", transactions);
  console.log("Deposit", depositTrx);

  const tabs = [
    {
      id: "tab1",
      label: "All",
      content: <Table columnData={columnData} data={transactions} />,
    },
    {
      id: "tab2",
      label: "Withdrawals",
      content: <Table columnData={columnData} data={withdrawalTrx} />,
    },
    {
      id: "tab3",
      label: "Deposits",
      content: <Table columnData={columnData} data={depositTrx} />,
    },
  ];
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-4">
        <WithdrawalCard />
        <PayWithWallet />
      </div>
      <SelectTab tabs={tabs} />
    </div>
  );
};

export default page;
