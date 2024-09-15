"use client";
import Table from "@/components/Table/Table";
import { useGet } from "@/hooks/useGet";
import { Order } from "@/models/order.model";
import { Transaction } from "@/models/transaction.model";
import { User } from "@/models/user.model";
import { Icon } from "@iconify/react/dist/iconify.js";
import moment from "moment";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Transactions = () => {
  const [orders, setOrders] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const router = useRouter();

  let columnData = [
    { heading: "ID", value: "id" },
    { heading: "By", value: "user" },
    { heading: "Created", value: "created_at" },
    { heading: "Amount ", value: "amount" },
    { heading: "Status", value: "status" },
    // { heading: "Type", value: "payment_type" },
    { heading: "Transaction Type", value: "transaction_type" },
    { heading: "Action", value: "action" },
  ];

  const { data, isLoading, error } = useGet(
    `/transactions/getAll?role=customer&page=${page}&limit=${limit}`
  );

  useEffect(() => {
    if (!isLoading && data?.data) {
      const updatedProducts = data.data.map((order: Transaction) => {
        return {
          ...order,
          id: <div className="truncate w-16"> {order._id}</div>,
          created_at: (
            <div className="text-sm">
              {moment(order.created_at).format("DD MMM, YYYY")}
            </div>
          ),
          status: order.transaction_status,
          user: order.user,
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
  console.log(orders);
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

export default Transactions;
