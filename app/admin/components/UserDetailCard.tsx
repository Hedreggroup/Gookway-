"use client";
import { useGet } from "@/hooks/useGet";
import React, { useEffect, useState } from "react";

const UserDetailCard = ({
  vendorsId,
  orders,
}: {
  vendorsId: string;
  orders: any;
}) => {
  const [details, setDetails] = useState<any>([]);
  const [currentTab, setCurrentTab] = useState<any>("all");
  const { data: GetVendor, isLoading, error } = useGet(`/users/${vendorsId}`);

  useEffect(() => {
    if (!isLoading && GetVendor?.data) {
      setDetails(GetVendor.data); // Update details only after data is fetched
    }
  }, [GetVendor, isLoading]);

  console.log("VENDOR DATA", GetVendor?.data);

  const completedOrders = orders.filter((order: any) =>
    ["delivered"].includes(order.shipping_status)
  );
  const cancelledOrders = orders.filter((order: any) =>
    ["on hold"].includes(order.shipping_status)
  );

  return (
    <div className="cards w-[99%] m-auto rounded-sm shadow-sm flex flex-col bg-white min-h-[241px] p-3">
      <div className="grid md:grid-cols-3">
        <div className="card p-14 flex flex-col justify-center items-center md:items-start">
          <div className="profiles w-full flex lg:flex-row flex-col justify-start items-center gap-3">
            <div className="profile h-[72px] w-[72px] rounded-full border-[10px] border-[#FF4D4D] bg-[#FF4D4D] bg-opacity-15"></div>
            <div>
              <h1 className="text-[18px] font-bold">{details?.full_name}</h1>
              <p className="text-[15px] text-gray-400">{details?.email}</p>
            </div>
          </div>
          <p className="text-[15px] text-[#F0142F] text-center lg:ml-20 uppercase">
            {/* Delete Customer */}
            {details?.role}
          </p>
        </div>
        <div className="card border-l-2 border-[#DBDADE] my-1 h-50 p-5">
          <h1 className="text-[13px] text-[#8B909A] mb-5">
            PERSONAL INFORMATION
          </h1>
          <div className="collections w-full flex flex-col justify-start items-start gap-5">
            <div className="collection w-full flex justify-start items-start gap-10">
              <p className="w-[50%] text-[13px]">Contact Number</p>
              <p className="w-[50%] text-[13px]">(234) 814 198 0326</p>
            </div>
            <div className="collection w-full flex justify-start items-start gap-10">
              <p className="w-[50%] text-[13px]">Gender</p>
              <p className="w-[50%] text-[13px]">Male</p>
            </div>
            <div className="collection w-full flex justify-start items-start gap-10">
              <p className="w-[50%] text-[13px]">Date of Birth</p>
              <p className="w-[50%] text-[13px]">1 Jan, 1985</p>
            </div>
            <div className="collection w-full flex justify-start items-start gap-10">
              <p className="w-[50%] text-[13px]">Member Since</p>
              <p className="w-[50%] text-[13px]">3 March, 2023</p>
            </div>
          </div>
        </div>
        <div className="card border-l-2 border-[#DBDADE] my-1 h-50 p-5">
          <h1 className="text-[13px] text-[#8B909A] mb-5">Shipping Address</h1>
          <p className="text-[13px] text-[#191919] mt-5">
            {details[0]?.shipping_addresses ??
              "NO SHIPPING ADDRESS ON THIS ACCOUNT"}
          </p>
          <div className="collections w-full flex justify-between items-center mt-5">
            <div className="collectiom">
              <h1 className="text-[24px] text-[#191919] font-bold">
                {orders?.length}
              </h1>
              <p className="text-[13px] text-[#8B909A]">Total Orders</p>
            </div>
            <div className="collectiom">
              <h1 className="text-[24px] text-[#191919] font-bold">
                {completedOrders?.length}
              </h1>
              <p className="text-[13px] text-[#8B909A]">Completed</p>
            </div>
            <div className="collectiom">
              <h1 className="text-[24px] text-[#191919] font-bold">
                {cancelledOrders?.length}
              </h1>
              <p className="text-[13px] text-[#8B909A]">Cancelled</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[99%] m-auto h-[0.8px] bg-gray-300"></div>
      <div className="w-full flex justify-start items-center gap-5">
        {/* All Orders */}
        <p
          className={`text-[13px] w-auto p-2 cursor-pointer ${
            currentTab === "all"
              ? "border-b-2 border-b-[#FF4D4D] text-[#FF4D4D] transition-all delay-100 ease-in-out"
              : "border-b-0"
          }`}
          onClick={() => setCurrentTab("all")}
        >
          All Orders
        </p>

        {/* Completed Orders */}
        <p
          className={`text-[13px] w-auto p-2 cursor-pointer ${
            currentTab === "completed"
              ? "border-b-2 border-b-[#FF4D4D] text-[#FF4D4D] transition-all delay-100 ease-in-out"
              : "border-b-0"
          }`}
          onClick={() => setCurrentTab("completed")}
        >
          Completed
        </p>

        {/* Cancelled Orders */}
        <p
          className={`text-[13px] w-auto p-2 cursor-pointer ${
            currentTab === "cancelled"
              ? "border-b-2 border-b-[#FF4D4D] text-[#FF4D4D] transition-all delay-100 ease-in-out"
              : "border-b-0"
          }`}
          onClick={() => setCurrentTab("cancelled")}
        >
          Cancelled
        </p>
      </div>
    </div>
  );
};

export default UserDetailCard;
