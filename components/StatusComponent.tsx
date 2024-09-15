import React from "react";

var activeStatus = (value: any) =>
  value == "online" ||
  value == "active" ||
  value == "success" ||
  value == "successful" ||
  value === true;
const StatusComponent = ({ value }: any) => {
  let isActive = activeStatus(value) ? true : false;
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
