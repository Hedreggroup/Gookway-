import SelectTab from "@/components/SelectTab";
import React from "react";
import Reviews from "./Reviews";

const ProductInfo = ({ product }: any) => {
  const tabs = [
    {
      id: "tab2",
      label: "Specifications",
      content: <div> Specifications</div>,
    },
    { id: "tab3", label: "Review", content: <Reviews /> },
    {
      id: "tab4",
      label: "Descriptions",
      content: <div>{product?.description}</div>,
    },
  ];
  return (
    <div className="min-h-96 mt-8">
      <SelectTab tabs={tabs} />
    </div>
  );
};

export default ProductInfo;
