import Lottie from "lottie-react";
import React from "react";
import animationData from "../public/assets/lottie/noitems.json";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-red-50 p-12 rounded-xl">
      <Lottie
        animationData={animationData}
        // loop={true}
        // style={{ width: "40%" }}
        className="sm:w-1/3"
      />
      <div className="p-4 text-center bg-red-500 text-white rounded-full w-48">
        Coming Soon
      </div>
    </div>
  );
};

export default ComingSoon;
