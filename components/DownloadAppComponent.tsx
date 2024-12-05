import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";
import redLogo from "@/app/assets/white-logo.png";
import visa from "../public/assets/visa.png";

const DownloadAppComponent = ({ textColor, showLogo }: any) => {
  return (
    <div className="flex flex-col items-start sm:w-4/5 w-full sm:p-auto mt-12 ">
      {showLogo && (
        <Link href={"/"} className="flex items-center flex-col   gap-0">
          <Image
            src={redLogo} // Path to your logo
            alt="Center Image"
            className="-mr-2 inset-0 m-auto animate-zoom"
            width={200} // Specify the width of the logo
            height={200} // Specify the height of the logo
          />
        </Link>
      )}
      <h1 className="uppercase text-xl lg:text-xl font-bold mb-4">
        Get a Better Experience With Our App
      </h1>
      <p className={`"mt-4 " ${textColor ?? "text-gray-500"}`}>
        Get the best shopping experience as you download it in our mobile
        application on both app stores
      </p>
      <div
        className="flex flex-col md:flex-row   gap-4 mt-8"
        onClick={() => {}}
      >
        <a
          href="https://apps.apple.com/app/gookway-online-shopping-mall/id6737542762"
          target="_blank"
        >
          <div className="flex mt-3 w-48 h-14 bg-black text-white rounded-xl items-center justify-center">
            <div className="mr-3">
              <IoLogoApple />
            </div>
            <div>
              <div className="text-xs">Download on the</div>
              <div className="text-2xl font-semibold font-sans -mt-1">
                App Store
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.gookway.app"
          target="_blank"
        >
          <div className="flex mt-3 w-48 h-14 bg-black text-white rounded-lg items-center justify-center">
            <div className="mr-3">
              <FaGooglePlay />
            </div>
            <div>
              <div className="text-xs">GET IT ON</div>
              <div className="text-xl font-semibold font-sans -mt-1">
                Google Play
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default DownloadAppComponent;
