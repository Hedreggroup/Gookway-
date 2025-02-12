"use client";
import whiteLogo from "@/app/assets/white-logo.png";
import { useState } from "react";
import Button from "./Button";

const GlassCard = ({ value, isGlassy }: any) => {
  const [showButton, setShowButton] = useState(false);

  return (
    <div
      onMouseOver={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(!showButton)}
      className="flex justify-center space-x-2 mt-4 relative"
    >
      <div className="atm-card atm-card-normal p-2 bg-red-500"></div>
      <div className="atm-card glassy duration-300 flex flex-col justify-between p-2 text-white">
        <div className="flex justify-between text-sm ">
          <div>
            <span>{"Account Balance"}</span>
            <div className="text-2xl font-bold">{value}</div>
          </div>
          <img src={`${whiteLogo}`} style={{ height: "40px" }} alt="" />
        </div>
        <div className="flex justify-between text-xs w-full " style={{}}>
          {showButton ? (
            <>
              <Button isCircular height={4} onClick={() => {}}>
                <span className="text-xs"> Withdraw</span>
              </Button>
              <div className="px-2"></div>
              <Button isCircular height={10} onClick={() => {}}>
                <span className="text-xs"> Fund Wallet</span>
              </Button>
            </>
          ) : (
            <>
              <p>{"Gookway Ecommerce Ltd."}</p>
              <p>{"05/23"}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default GlassCard;
