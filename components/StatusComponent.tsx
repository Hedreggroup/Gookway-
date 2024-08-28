import React from "react";

const StatusComponent = ({ value }: any) => {
  let isActive = value == "online" || value == "active" ? true : false;
  return (
    <td className="text-left">
      <div
        className={`p-2 ${
          isActive ? "online" : "offline"
        } rounded-xl w-24 h-10 flex items-center justify-center`}
      >
        <span className={``}>{value}</span>
      </div>
    </td>
  );
};

export default StatusComponent;
