"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, Space } from "antd";
import type { FormProps, GetProps } from "antd";
import Table from "@/components/Table/Table";
import { User } from "@/models/user.model";
import { useGet } from "@/hooks/useGet";
const VendorDetail = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Retrieve the 'id' query parameter
  const [isActive, setIsAcive] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<any>("all");
  const { RangePicker } = DatePicker;
  const [details, setDetails] = useState<any>([])
  const [vendor_orders, setVendorOrders] = useState<any>([])
  const [componentVariant, setComponentVariant] =
    useState<FormProps["variant"]>("filled");
  const { Search } = Input;
  const [vendors, setVendors] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const router = useRouter();
  type SearchProps = GetProps<typeof Input.Search>;
  let columnData = [
    { heading: "Seller ", value: "user" },
    { heading: "price", value: "email" },
    { heading: "Status ", value: "status" },
    { heading: "Registered On", value: "created_at" },
    { heading: "Action", value: "action" },
  ];
  const onFormVariantChange = ({
    variant,
  }: {
    variant: FormProps["variant"];
  }) => {
    setComponentVariant(variant);
  };
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  console.log("this is the id", id)
  const { data, isLoading, error } = useGet(
    `/users/${id}`
  );
  const { data:vendor_data, isLoading:vendorIsLoading, error:vendow_error } = useGet(
    `/orders/admin/vendor/${id}`
  );
  useEffect(() => {
    if (!isLoading && data?.data) {
      console.log("this is the data", data);
      setDetails(data.data); // Update details only after data is fetched
    }
  }, [data, isLoading]); // Depend on data and isLoading
  
  useEffect(() => {
    if(!vendorIsLoading && vendor_data?.data){
      setVendorOrders(data?.data)
    }
  }, [vendor_data, vendorIsLoading]); // Depend on data and isLoading
  
  
  const handleNavigation = (id: string) => {
    router.push(`/admin/vendors/details/${id}`);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Vendor Detail Page</h1>
      <div className="cards w-[99%] m-auto rounded-sm shadow-sm flex flex-col bg-white min-h-[241px] p-3">
        <div className="grid grid-cols-3">
          <div className="card p-14 flex flex-col justify-start items-start">
            <div className="profiles w-full flex justify-start items-center gap-3">
              <div className="profile h-[72px] w-[72px] rounded-full border-[10px] border-[#FF4D4D] bg-[#FF4D4D] bg-opacity-15"></div>
              <div>
                <h1 className="text-[18px] font-bold">{details?.full_name}</h1>
                <p className="text-[15px] text-gray-400">{details?.email}</p>
              </div>
            </div>
            <p className="text-[15px] text-[#F0142F] text-center ml-20">
              Delete Customer
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
            <h1 className="text-[13px] text-[#8B909A] mb-5">
              Shipping Address
            </h1>
            <p className="text-[13px] text-[#191919] mt-5">
              {details[0]?.shipping_addresses}
            </p>
            <div className="collections w-full flex justify-between items-center mt-5">
              <div className="collectiom">
                <h1 className="text-[24px] text-[#191919] font-bold">{vendor_orders[0]?.total_price}</h1>
                <p className="text-[13px] text-[#8B909A]">Total Orders</p>
              </div>
              <div className="collectiom">
                <h1 className="text-[24px] text-[#191919] font-bold">150</h1>
                <p className="text-[13px] text-[#8B909A]">Completed</p>
              </div>
              <div className="collectiom">
                <h1 className="text-[24px] text-[#191919] font-bold">150</h1>
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
      <div className="w-full flex justify-between items-center mt-2">
        <Space direction="vertical">
          <Search
            placeholder="Search by order id"
            allowClear
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </Space>
          <Form
            // {...formItemLayout}
            onValuesChange={onFormVariantChange}
            variant={componentVariant}
            initialValues={{ variant: componentVariant }}
            className="flex"
          >
            <Form.Item
              // label="RangePicker"
              name="RangePicker"
              rules={[]}
            >
              <RangePicker className="custom-range-picke bg-white shadow-md mt-2" />
            </Form.Item>
            {/* <Form.Item wrapperCol={{ offset: 6 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item> */}
          </Form>
      </div>
      <div className="rounded-lg mt-1 bg-white px-4 py-8">
        <Table
          currentPage={page}
          pageLimit={limit}
          // loading={isLoading}
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

const VendorDetailPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VendorDetail />
    </Suspense>
  );
};

export default VendorDetailPage;
