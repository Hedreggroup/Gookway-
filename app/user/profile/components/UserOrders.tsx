"use client";
import SlideAnimation from "@/components/Animations/SlideAnimation";
import SelectTab from "@/components/SelectTab";
import Table from "@/components/Table/Table";
import { useGet } from "@/hooks/useGet";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import moment from "moment";
import React, { useEffect, useState } from "react";

const UserOrders = () => {
  const { data, isLoading, error } = useGet(`/orders/customer`);
  const [token, setToken] = useLocalStorage<any>("token", "");
  const [orders, setOrders] = useState<any>([]);

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
    { heading: "Order", value: "image" },
    { heading: "Order ID", value: "id" },
    { heading: "Total", value: "price" },
    { heading: "Ordered On ", value: "created_at" },
    { heading: "Status", value: "status" },
    // { heading: "Date & Time by", value: "date" },
  ];

  useEffect(() => {
    if (!isLoading && data?.data) {
      const updateOrders = data.data.map((order: any) => {
        console.log("Orders", order?.items[0].product?.images[0]);
        return {
          ...order,
          status: order?.payment_status,
          created_at: (
            <div className="text-sm">
              {moment(order.created_at).format("DD MMM, YYYY")}
            </div>
          ),
          price: <div className="text-sm">₦ {order.total_price}</div>,
          total_items: (
            <div className="text-sm">{order?.items?.length} Items</div>
          ),
          image: (
            <div className="flex items-center gap-2 w-auto overflow-hidden">
              <img
                src={order?.items[0].product?.images[0]}
                className="h-16 w-20"
              />
            </div>
          ),
        };
      });

      setOrders(updateOrders); // Set the entire array in one go
    }
  }, [data]);

  return (
    <SlideAnimation>
      <div className="bg-white rounded-xl p-2 mt-4">
        <SelectTab tabs={tabs} />
        <Table
          tableTitle={""}
          loading={isLoading}
          data={isLoading ? [] : orders}
          columnData={columnData}
        />
      </div>
    </SlideAnimation>
  );
};

export default UserOrders;
