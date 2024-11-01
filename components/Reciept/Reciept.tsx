import React, { useRef } from "react";
import { toPng } from "html-to-image";
import download from "downloadjs";
import Transaction, { TransactionStatus } from "./transactions.interface";
import RecieptRow from "./RecieptRow";
import { formatCurrency } from "../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";
import StatusComponent from "../StatusComponent";
import whiteLogo from "@/app/assets/white-logo.png";
import Button from "../Button";
import Image from "next/image";

interface TransactionReceiptProps {
  transaction: Transaction;
  onApprove?: () => void;
  isLoadingApproval?: boolean;
}

const TransactionReceipt: React.FC<TransactionReceiptProps> = ({
  transaction,
  onApprove,
  isLoadingApproval,
}) => {
  const receiptRef = useRef<HTMLDivElement>(null);

  const handlePrintReceipt = async () => {
    if (receiptRef.current === null) return;

    try {
      const pngDataUrl = await toPng(receiptRef.current);
      download(pngDataUrl, "receipt.png");
    } catch (error) {
      console.error("Could not generate PNG", error);
    }
  };

  return (
    <div>
      <div
        ref={receiptRef}
        className="max-w-md mx-auto p-4 border rounded-xl shadow-sm bg-white"
      >
        {transaction.transaction_status === TransactionStatus.SUCCESSFUL && (
          <h2 className="text-xl font-semibold mb-4">Transaction Receipt</h2>
        )}
        <Image
          src={whiteLogo} // Path to your logo
          alt="Center Image"
          className=""
          width={50} // Specify the width of the logo
          height={50} // Specify the height of the logo
        />
        <RecieptRow title="Order ID:" value={transaction.order_id} />
        <RecieptRow title="User ID:" value={transaction.user} />
        <RecieptRow
          title="Amount:"
          value={formatCurrency(transaction.amount)}
        />
        <RecieptRow title="Reference:" value={transaction.ref} />
        <RecieptRow
          title="Transaction Type:"
          value={transaction.transaction_type}
        />
        <RecieptRow
          title="Created At:"
          value={formatDate(transaction?.created_at)}
        />
        <RecieptRow title="Created:" value={transaction.user} />
        <RecieptRow title="Reference:" value={transaction.user} />

        <div className="flex items-center justify-between my-1">
          <strong>Status:</strong>
          <StatusComponent value={transaction.transaction_status} />
          {/* {transaction.transaction_status === "successful" ? (
          <span className="text-green-600 font-bold">Approved</span>
        ) : (
          <span className="text-red-600 font-bold">Pending Approval</span>
        )} */}
        </div>
      </div>
      <div className="my-4"></div>
      {transaction.transaction_status === "successful" ? (
        <button
          onClick={handlePrintReceipt}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Print Receipt
        </button>
      ) : (
        <Button onClick={onApprove} width={"3/6"} loading={isLoadingApproval}>
          Approve Transaction
        </Button>
      )}
    </div>
  );
};

export default TransactionReceipt;
