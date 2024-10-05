import SlideAnimation from "@/components/Animations/SlideAnimation";
import GlassCard from "@/components/GlassCard";
import React from "react";

const Wallet = () => {
  return (
    <SlideAnimation>
      <div className="flex items-end gap-4 sm:flex-row flex-col-reverse">
        <div className="p-4 h-[160px] w-full rounded-xl bg-white h-full border border-1 border-gray-300 ">
          <p className="font-light">Total Fundings</p>
          <p className="text-3xl">50</p>
        </div>
        <GlassCard value={"200"} />
      </div>
    </SlideAnimation>
  );
};

export default Wallet;
