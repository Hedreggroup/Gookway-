import React from "react";

const RecieptRow = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex items-center justify-between w-full my-2">
      <strong>{title}</strong>
      <span>{value}</span>
    </div>
  );
};

export default RecieptRow;
