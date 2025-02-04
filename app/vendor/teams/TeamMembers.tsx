"use client";
import Button from "@/components/Button";
import Table from "@/components/Table/Table";
import { useGet } from "@/hooks/useGet";
import { User } from "@/models/user.model";
import { Icon } from "@iconify/react/dist/iconify.js";
import moment from "moment";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const TeamMembers = () => {
  const [vendors, setVendors] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const router = useRouter();

  let columnData = [
    { heading: "User ", value: "user" },
    { heading: "email", value: "email" },
    { heading: "Role ", value: "role" },
    { heading: "Status ", value: "status" },
    { heading: "Date Created On", value: "created_at" },
    { heading: "Action", value: "action" },
  ];
  const { data, isLoading, error } = useGet(
    `/users/vendor-teams?role=customer&page=${page}&limit=${limit}`
  );
  console.log("DATA TEAM", data?.data);
  useEffect(() => {
    if (!isLoading && data?.data) {
      const updatedProducts = Array.isArray(data?.data)
        ? data?.data?.map((user: User) => {
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
          })
        : []; // Handle the case where data.data is not an array
      setVendors(updatedProducts); // Set the entire array in one go
    }
  }, [data]);
  const handleNavigation = () => {
    router.push("/vendor/teams/add-team-member");
  };
  return (
    <div>
      <div className="flex items-end justify-end">
        <Button
          onClick={handleNavigation}
          style={{ alignSelf: "flex-end" }}
          prefixIcon={<Icon icon="mingcute:add-line" />}
        >
          Add Member
        </Button>
      </div>
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
          totalItems={vendors?.length}
          data={vendors}
          columnData={columnData}
          onClickRow={(item: User) => {
            // handleNavigation(item._id);
          }}
        />
      </div>
    </div>
  );
};

export default TeamMembers;
