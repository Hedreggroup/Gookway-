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
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl bg-red-200 ">
        {/* <div className="bg-white p-4 shadow-sm rounded-lg">
          <h2 className="text-lg font-semibold">Total Sales & Costs</h2>
          {/* Add sales & costs chart here */}
        {/* </div>  */}
        <div className="grow">
          <TotalSalesCostCard />
        </div>
        {/* <Layout /> */}
        <div className="md:p-0 p-8">
          <GlassCard value={"20932"} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 my-4">
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
      <div className="grid grid-cols-1 md:grid-cols-2 my-4 gap-4">
        <TotalOrder />
        <TopSellingCategory />
      </div>

      <div className="bg-white rounded-xl p-2 mt-4">
        <Table tableTitle={"Recent Orders"} data={[]} columnData={columnData} />
      </div>
    </div>
  );
};

export default Dashboard;
