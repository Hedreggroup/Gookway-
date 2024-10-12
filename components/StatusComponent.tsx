import React from "react";

var activeStatus = (value: any) =>
  value == "online" ||
  value == "active" ||
  value == "success" ||
  value == "successful" ||
  value === true;
var warningStatus = (value: any) => value == "pending" || value == "loading";

const StatusComponent = ({ value }: any) => {
  let isActive = activeStatus(value) ? true : false;
  let isWarning = warningStatus(value) ? true : false;
  return (
    <td className="text-left">
      <div
        className={` ${
          isActive ? "online" : isWarning ? "pending" : "offline"
        } rounded-xl w-24 h-10 flex items-center justify-center`}
      >
        <span className={``}>{`${value}`}</span>
      </div>
    </td>
  );
};

export default StatusComponent;
