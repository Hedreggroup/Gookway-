import SelectTab from "@/components/SelectTab";
import Table from "@/components/Table/Table";
import React from "react";

const Reviews = () => {
  let columnData = [
    { heading: "#ID", value: "order_id" },
    { heading: "Product ", value: "customer" },
    { heading: "name ", value: "name" },
    { heading: "rating", value: "rating" },
    // { heading: "Date & Time by", value: "date" },
  ];
  return (
    <div className="bg-white rounded-xl p-2 mt-4">
      <Table tableTitle={""} data={[]} columnData={columnData} />
    </div>
  );
};

export default Reviews;
