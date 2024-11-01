"use client";
import AnimatedModal from "@/components/AnimatedModal 1/AnimatedModal";
import Button from "@/components/Button";
import Table from "@/components/Table/Table";
import { useGet } from "@/hooks/useGet";
import { Icon } from "@iconify/react/dist/iconify.js";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Detail from "./Detail";
import { Transaction } from "@/models/transaction.model";

const page = () => {
  const [transactions, setTransactions] = useState<any>([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState<
    Transaction | any
  >();
  const { data: getUserTransactions, isLoading } = useGet(`/transactions/`);

  let columnData = [
    { heading: "Reference", value: "ref" },
    { heading: "Created", value: "created_at" },
    { heading: "Amount ", value: "amount" },
    { heading: "Transaction Type", value: "type" },
    { heading: "Status", value: "status" },
    { heading: "Action", value: "action" },
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
          action: (
            <Button
              width={"20"}
              height={"8"}
              onClick={() => {
                setCurrentTransaction(transaction), setOpenModal(true);
              }}
            >
              View
            </Button>
          ),
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

  const withdrawalTrx = transactions.filter((order: any) =>
    ["withdrawal"].includes(order.transaction_type)
  );

  return (
    <div>
      <AnimatedModal openModal={openModal} setOpenModal={setOpenModal} canClose>
        <Detail transaction={currentTransaction} />
      </AnimatedModal>
      <Table
        columnData={columnData}
        loading={isLoading}
        data={withdrawalTrx}
        tableTitle="Withdrawal Requests"
      />
    </div>
  );
};

export default page;
