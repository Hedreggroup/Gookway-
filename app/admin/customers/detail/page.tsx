"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, Space } from "antd";
import type { FormProps, GetProps } from "antd";
import Table from "@/components/Table/Table";
import { User } from "@/models/user.model";
import { useGet } from "@/hooks/useGet";
import UserDetailCard from "../../components/UserDetailCard";

const CustomerDetail = () => {
  const searchParams = useSearchParams();
  const vendorsId = searchParams.get("id"); // Retrieve the 'id' query parameter
  const [isActive, setIsAcive] = useState<boolean>(false);
  const { RangePicker } = DatePicker;
  const [vendorOrders, setVendorOrders] = useState<any>([]);
  const [componentVariant, setComponentVariant] =
    useState<FormProps["variant"]>("filled");
  const { Search } = Input;
  const [vendors, setVendors] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const router = useRouter();
  const {
    data: GetVendorOrders,
    isLoading: vendorIsLoading,
    error: vendow_error,
  } = useGet(`/orders/admin/customer/${vendorsId}`);
  type SearchProps = GetProps<typeof Input.Search>;
  let columnData = [
    { heading: "Order ID ", value: "order_id" },
    { heading: "Created", value: "created_at" },
    { heading: "Total", value: "total_price" },
    { heading: "Status ", value: "shipping_status" },
    // { heading: "Action ", value: "ac" },
  ];
  const onFormVariantChange = ({
    variant,
  }: {
    variant: FormProps["variant"];
  }) => {
    setComponentVariant(variant);
  };
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    // Depend on data and isLoading

    useEffect(() => {
      if (!vendorIsLoading && GetVendorOrders?.data) {
        setVendorOrders(GetVendorOrders?.data);
      }
    }, [GetVendorOrders, vendorIsLoading]); // Depend on data and isLoading

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Customer Detail Page</h1>
      <UserDetailCard vendorsId={vendorsId!} orders={vendorOrders} />
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
          onClickRow={(item: User) => {}}
        />
      </div>
    </div>
  );
};

const CustomerDetailPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomerDetail />
    </Suspense>
  );
};

export default CustomerDetailPage;
