import React from "react";

const Banner = () => {
  return (
    <div className="w-[95%] m-auto h-[max] grid grid-cols-2 gap-5 mt-10">
      <div className="left bg-[#dcdcdc] h-[500px] flex flex-col justify-between items-center">
        <div></div>
        <div className="dots w-full flex justify-center items-center gap-5 p-5">
          <p className="h-[20px] w-[20px] rounded-full border border-[#ff0000] bg-white"></p>
          <p className="h-[20px] w-[20px] rounded-full border border-[#ff0000] bg-white"></p>
          <p className="h-[20px] w-[20px] rounded-full border border-[#ff0000] bg-[#ff0000]"></p>
          <p className="h-[20px] w-[20px] rounded-full border border-[#ff0000] bg-white"></p>
          <p className="h-[20px] w-[20px] rounded-full border border-[#ff0000] bg-white"></p>
        </div>
      </div>
      <div className="right bg-[#efedef] h-[500px] grid grid-cols-2 gap-2">
        <div className="item h-[250px] bg-[#dcdcdc]"></div>
        <div className="item h-[250px] bg-[#dcdcdc]"></div>
        <div className="item h-[250px] bg-[#dcdcdc]"></div>
        <div className="item h-[250px] bg-[#dcdcdc]"></div>
      </div>
    </div>
  );
};

export default Banner;
