import React from "react";
import { Carousel } from 'antd';
const contentStyle: React.CSSProperties = {
  height: '500px',
  // color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  // background: '#dcdcdc',
  // border:"1px solid black"
};
const Banner:React.FC = () => {
  return (
    <div className="w-[95%] m-auto h-[max] grid grid-cols-1 mt-24 lg:grid-cols-2 gap-5 lg:mt-10">
      <Carousel autoplay className="shadow-md">
    <div className="h-[500px] w-full bg-watch bg-cover bg-no-repeat bg-center">
      {/* <h3 style={contentStyle} className="text-5xl text-black flex justify-center items-center">1</h3> */}
    </div>
    <div className="h-[500px] w-full bg-black2 bg-cover bg-no-repeat bg-center">
      {/* <h3 style={contentStyle} className="text-5xl text-black flex justify-center items-center">2</h3> */}
    </div>
    <div className="h-[500px] w-full bg-black6 bg-cover bg-no-repeat bg-center">
      {/* <h3 style={contentStyle} className="text-5xl text-black flex justify-center items-center">3</h3> */}
    </div>
    <div className="h-[500px] w-full bg-black4 bg-cover bg-no-repeat bg-center">
      {/* <h3 style={contentStyle} className="text-5xl text-black flex justify-center items-center">4</h3> */}
    </div>
  </Carousel>
      <div className="right bg-[#efedef] h-[500px] grid grid-cols-2 gap-2">
        <div className="item h-[250px] w-full bg-black4 bg-cover bg-no-repeat bg-center"></div>
        <div className="item h-[250px] w-full bg-black2 bg-cover bg-no-repeat bg-center"></div>
        <div className="item h-[250px] w-full bg-black5 bg-cover bg-no-repeat bg-center"></div>
        <div className="item h-[250px] w-full bg-black6 bg-cover bg-no-repeat bg-center"></div>
      </div>
    </div>
  );
};

export default Banner;

