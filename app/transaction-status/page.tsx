"use client";
import Lottie from "lottie-react";
import animationData from "../../public/assets/lottie/success.json";
import React from "react";
import Button from "@/components/Button";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-screen w-screen   flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <Lottie
          animationData={animationData}
          // loop={true}
          // style={{ width: "40%" }}
          className="sm:w-1/5"
        />
        <span className="italics my-8" style={{ fontSize: "14px" }}>
          {"Your order has been completed."}
        </span>
        <Link href={"/"} className="flex items-center justify-center gap-0">
          <Button
            // width="full"
            height={50}
          >
            Go To Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
