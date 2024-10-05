import Lottie from "lottie-react";
import React from "react";
import animationData from "../../public/assets/lottie/noitems.json";

const NoDataFound = ({ message }: { message?: string }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <Lottie
          animationData={animationData}
          // loop={true}
          // style={{ width: "40%" }}
          className="sm:w-1/5"
        />
        <span className="italics" style={{ fontSize: "14px" }}>
          {message ?? "No Data Found"}
        </span>
      </div>
    </div>
  );
};

export default NoDataFound;
