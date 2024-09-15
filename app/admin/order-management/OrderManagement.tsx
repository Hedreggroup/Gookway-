"use client";
import Table from "@/components/Table/Table";
import { useGet } from "@/hooks/useGet";
import { Order } from "@/models/order.model";
import { User } from "@/models/user.model";
import { Icon } from "@iconify/react/dist/iconify.js";
import moment from "moment";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const OrderManagement = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const router = useRouter();

  let columnData = [
    { heading: "Order ID ", value: "_id" },
    { heading: "By", value: "user" },
    { heading: "Created", value: "created_at" },
    { heading: "Total ", value: "total_price" },
    { heading: "Status", value: "status" },
    { heading: "Action", value: "action" },
  ];

  const { data, isLoading, error } = useGet(
    `/orders/get-all?role=customer&page=${page}&limit=${limit}`
  );

  useEffect(() => {
    if (!isLoading && data?.data) {
      const updatedProducts = data.data.map((order: Order) => {
        return {
          ...order,
          created_at: (
            <div className="text-sm">
              {moment(order.created_at).format("DD MMM, YYYY")}
            </div>
          ),
          user: order.customer,
          status: order.payment_status,
          action: (
            <Icon
              icon="carbon:view-filled"
              className="cursor-pointer text-red-300"
              onClick={() => {}}
            />
          ),
        };
      });

      setOrders(updatedProducts); // Set the entire array in one go
    }
  }, [data]);
  console.log("orders");
  //   console.log(Object.keys(orders[0]));
  //   console.log(Object.keys(data?.data[0]));
  return (
    <div className="rounded-lg mt-4 bg-white px-4 py-8">
      <Table
        currentPage={page}
        pageLimit={limit}
        loading={isLoading}
        onPaginationChange={(val: any) => {
          setPage(val?.page);
          setLimit(val?.limit);
        }}
        tableTitle={""}
        data={orders}
        columnData={columnData}
        onClickRow={(item: User) => {
          // handleNavigation(item._id);
        }}
      />
    </div>
  );
};

export default OrderManagement;
