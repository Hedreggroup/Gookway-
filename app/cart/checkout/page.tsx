"use client";
import Breadcrumbs from "@/components/Bread";
import MyStepper from "@/components/MyStepper/MyStepper";
import Nav from "@/components/Nav";
import { Icon } from "@iconify/react/dist/iconify.js";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import React, { useState } from "react";
import Summary from "./components/Summary";
import TransactionSuccess from "./components/TransactionSuccess";
import Payment from "./components/Payment";
import ShippingAddress from "./components/ShippingAddress";

const page = () => {
  const [activeStep, setActiveStep] = useState(0);
  const scrumbs = {
    Home: "Home",
    Cart: "Cart",
    Checkout: "Checkout",
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const steps = [
    {
      title: "Billing Details",
      icon: <Icon icon="tabler:list-details" />,
      component: <ShippingAddress />,
    },
    {
      title: "Transaction Summary",
      component: <Summary prev={handleBack} />,

      icon: <Icon icon="ic:outline-summarize" />,
    },

    {
      title: "Pay With",
      component: <Payment handleBack={handleBack} />,
      icon: <BsFillCreditCard2BackFill />,
      showStep: false,
    },
    {
      title: "Transaction Status",
      icon: <Icon icon={"ic:baseline-check"} />,
      showStep: false,
      component: <TransactionSuccess />,
    },
  ];
  return (
    <div className="bg-[#efedef]  ">
      <Nav />
      <div className="w-[90%] m-auto pt-32 flex flex-col items-center justify-center">
        <Breadcrumbs items={scrumbs} />
        <h1 className="w-full flex justify-center items-center font-black text-4xl">
          Checkout
        </h1>
        <div className="sm:w-5/6">
          <MyStepper
            activeStep={activeStep}
            steps={steps}
            setActiveStep={setActiveStep}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
