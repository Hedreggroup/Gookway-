"use client";
import SelectTab from "@/components/SelectTab";
import Table from "@/components/Table/Table";
import { useGet } from "@/hooks/useGet";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import React, { useEffect } from "react";

const Orders = () => {
  const { data, isLoading, error } = useGet(`/orders/vendor/`);
  const [token, setToken] = useLocalStorage<any>("token", "");

  const tabs = [
    { id: "tab1", label: "Pending", content: <div> </div> },
    { id: "tab2", label: "Confirmed", content: <div> </div> },
    { id: "tab3", label: "Processing", content: <div> </div> },
    { id: "tab4", label: "Picked", content: <div> </div> },
    { id: "tab5", label: "Shipped", content: <div> </div> },
    { id: "tab6", label: "Delivered", content: <div> </div> },
    { id: "tab7", label: "Cancelled", content: <div> </div> },
  ];
  let columnData = [
    { heading: "Order ID", value: "order_id" },
    { heading: "CREATED ", value: "customer" },
    { heading: "Customer ", value: "customer" },
    { heading: "Total", value: "total" },
    { heading: "Status", value: "status" },
    // { heading: "Date & Time by", value: "date" },
  ];
  return (
    <div className="bg-white rounded-xl p-2 mt-4">
      <SelectTab tabs={tabs} />
      <Table tableTitle={""} data={[]} columnData={columnData} />
    </div>
  );
};

export default Orders;
