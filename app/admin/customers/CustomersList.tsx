"use client";
import Button from "@/components/Button";
import Table from "@/components/Table/Table";
import { useGet } from "@/hooks/useGet";
import { User } from "@/models/user.model";
import { Icon } from "@iconify/react/dist/iconify.js";
import moment from "moment";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CustomersList = () => {
  const [vendors, setVendors] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const router = useRouter();

  let columnData = [
    { heading: "Seller ", value: "user" },
    { heading: "price", value: "email" },
    { heading: "Status ", value: "status" },
    { heading: "Registered On", value: "created_at" },
    { heading: "Action", value: "action" },
  ];
  const { data, isLoading, error } = useGet(
    `/users/all-users?role=customer&page=${page}&limit=${limit}`
  );
  console.log("data");
  console.log(data);
  useEffect(() => {
    if (!isLoading && data?.data) {
      const updatedProducts = data.data.map((user: User) => {
        return {
          ...user,
          created_at: (
            <div className="text-sm">
              {moment(user.created_at).format("DD MMM, YYYY")}
            </div>
          ),
          user: user,
          action: (
            <Icon
              icon="carbon:view-filled"
              className="cursor-pointer text-red-300"
              onClick={() => {}}
            />
          ),
        };
      });

      setVendors(updatedProducts); // Set the entire array in one go
    }
  }, [data]);
  console.log("vendors");
  console.log(vendors);
  const handleNavigation = (id: string) => {
    router.push(`/admin/vendors/${id}`);
  };
  return (
    <div>
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
          data={vendors}
          columnData={columnData}
          onClickRow={(item: User) => {
            handleNavigation(item._id);
          }}
        />
      </div>
    </div>
  );
};

export default CustomersList;
