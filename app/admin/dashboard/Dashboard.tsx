import AnalyticsCard from "@/components/AnalyticsCard";
import GlassCard from "@/components/GlassCard";
import Table from "@/components/Table/Table";
import TopSellingCategory from "@/components/TopSellingCategory";
import TotalOrder from "@/components/TotalOrder";
import TotalSalesCostCard from "@/components/TotalSalesCostCard";
import React from "react";

const Dashboard = () => {
  const analyticsData = [
    { title: "Total Orders", amount: "25.7K", percentage: 6 },
    { title: "Total Profit", amount: "50K", percentage: 12 },
    { title: "Discounted Amount", amount: "12K", percentage: -2 },
  ];
  let columnData = [
    { heading: "ID", value: "order_id" },
    { heading: "Customer ", value: "customer" },
    { heading: "Amount", value: "amount" },
    { heading: "Date & Time by", value: "date" },
    { heading: "Total", value: "total" },
  ];
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between rounded-xl  ">
        {/* <div className="bg-white p-4 shadow-sm rounded-lg">
          <h2 className="text-lg font-semibold">Total Sales & Costs</h2>
          {/* Add sales & costs chart here */}
        {/* </div>  */}
        <div className="grow">
          <TotalSalesCostCard />
        </div>
        {/* <Layout /> */}
        <div className=" ">
          <AnalyticsCard
            title={"Visitors"}
            amount={"16.6k"}
            height="h-20"
            percentage={-3}
            isPositive={false}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-4">
        {analyticsData.map((item, index) => (
          <AnalyticsCard
            key={index}
            title={item.title}
            amount={item.amount}
            percentage={item.percentage}
            isPositive={item.percentage >= 0}
          />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row  my-4 gap-4">
        <div className="w-2/6 ">
          <TopSellingCategory height={"h-96"} />
        </div>
        <div className="grow bg-white p-2 rounded-xl">
          <Table
            tableTitle={"Recent Transactions"}
            data={[]}
            columnData={columnData}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 bg-white rounded-xl p-2 mt-4">
        <TotalOrder />
        <div className="grow bg-white p-2 rounded-xl">
          <Table
            tableTitle={"Recent Orders"}
            data={[]}
            columnData={columnData}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
