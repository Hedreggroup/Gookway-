import React from "react";

const NoDataFound = ({ message }: any) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img src="/images/nodatafound.jpg" alt="" style={{ height: "200px" }} />
        <span className="italics" style={{ fontSize: "20px" }}>
          {message ?? "No Data Found"}
        </span>
      </div>
    </div>
  );
};

export default NoDataFound;
