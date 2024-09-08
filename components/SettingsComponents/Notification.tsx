"use client";
import React from "react";
import animationData from "../../public/assets/lottie/noitems.json";
import Lottie from "lottie-react";
import ComingSoon from "../ComingSoon";

const Notification = () => {
  return (
    <div className="bg-white p-16">
      <ComingSoon />
    </div>
  );
};

export default Notification;
