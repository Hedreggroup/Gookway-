import React from "react";

const SkeltonLoading = ({ length = 6 }) => {
  return (
    <div className="w-[96vw] grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
      {Array.from({ length: length }).map((item, i) => (
        <div key={i} className="bg-gray-200 min-h-40 w-36  max-w-36"></div>
      ))}
    </div>
  );
};

export default SkeltonLoading;
