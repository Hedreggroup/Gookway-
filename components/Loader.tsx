"use client";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../public/assets/lottie/loader.json";
import whiteLogo from "../public/assets/goods.png";
import Image from "next/image";

interface LoaderProps {
  imageSrc?: string; // Path to the image to be displayed at the center
  size?: number; // Optional: control the size of the loader
  loading?: boolean;
  timeout?: number;
  containerClass?: string;
}

const Loader: React.FC<LoaderProps> = ({
  imageSrc,
  size = 200,
  loading = false,
  timeout = 10000,
  containerClass = "fixed inset-0",
}) => {
  const [visible, setVisible] = useState(loading);

  useEffect(() => {
    setVisible(loading);

    if (loading) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [loading, timeout]);

  if (!visible) return null;

  return (
    <div
      className={`${containerClass} fixed inset-0 z-40 flex items-center justify-center bg-white bg-opacity-50`}
    >
      <div className="relative">
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ width: "100%" }}
        />
        <Image
          src="/assets/white-logo.png" // Path to your logo
          alt="Center Image"
          className="absolute inset-0 m-auto animate-zoom"
          width={size * 0.6} // Specify the width of the logo
          height={size * 0.6} // Specify the height of the logo
        />
        {/* <img
          src={"../public/assets/goods.png"}
       
         
          style={{
            width: size * 0.4, // Adjust the size of the image relative to the loader size
            height: size * 0.4,
          }}
        /> */}
      </div>
    </div>
  );
};

export default Loader;
