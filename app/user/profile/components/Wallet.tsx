import SlideAnimation from "@/components/Animations/SlideAnimation";
import GlassCard from "@/components/GlassCard";
import PayWithWallet from "@/components/PaymentsComponent/PayWithWallet";
import Table from "@/components/Table/Table";
import { useGet } from "@/hooks/useGet";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { SiWebmoney } from "react-icons/si";

const Wallet = () => {
  const [fundings, setFundings] = useState<any>([]);
  const { data: Trx, isLoading, refetch } = useGet(`/transactions`);
  let columnData = [
    { heading: "Reference ID", value: "ref" },
    { heading: "Amount", value: "amount" },
    { heading: "Funded On", value: "created_at" },
  ];
  useEffect(() => {
    if (!isLoading && Trx?.data) {
      const updateOrders = Trx.data.map((order: any) => {
        return {
          ...order,
          status: order?.transaction_status,
          created_at: (
            <div className="text-sm">
              {moment(order.created_at).format("DD MMM, YYYY")}
            </div>
          ),
          amount: <div className="text-sm">₦ {order.amount}</div>,
        };
      });

      setFundings(updateOrders); // Set the entire array in one go
    }
  }, [Trx]);
  console.log("TRX", Trx);
  return (
    <SlideAnimation>
      <div className="  flex items-end gap-4 sm:flex-row flex-col-reverse">
        <div className="flex   justify-between p-4 min-h-32 w-full rounded-xl bg-white h-full border border-1 border-gray-300 ">
          <div>
            <p className="font-light">Total Fundings</p>
            <p className="text-3xl">{fundings?.length}</p>
          </div>
          <SiWebmoney className="text-3xl mt-2 text-red-500" />
        </div>
        <PayWithWallet />
      </div>
      <SlideAnimation>
        <Table
          tableTitle={"Recent Fundings"}
          loading={isLoading}
          data={fundings}
          columnData={columnData}
        />
      </SlideAnimation>
    </SlideAnimation>
  );
};

export default Wallet;
