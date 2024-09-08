import React from "react";

const StatusComponent = ({ value }: any) => {
  let isActive =
    value == "online" || value == "active" || value === true ? true : false;
  return (
    <td className="text-left">
      <div
        className={` ${
          isActive ? "online" : "offline"
        } rounded-xl w-24 h-10 flex items-center justify-center`}
      >
        <span className={``}>{`${value}`}</span>
      </div>
    </td>
  );
};

export default StatusComponent;
