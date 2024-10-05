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

  const steps = [
    {
      title: "Billing Details",
      icon: <Icon icon="tabler:list-details" />,
      component: <ShippingAddress />,
    },
    {
      title: "Transaction Summary",
      component: <Summary />,

      icon: <Icon icon="ic:outline-summarize" />,
    },

    {
      title: "Pay With",
      component: <Payment />,
      icon: <BsFillCreditCard2BackFill />,
    },
    {
      title: "Transaction Status",
      icon: <Icon icon={"ic:baseline-check"} />,
      component: <TransactionSuccess />,
    },
  ];
  return (
    <>
      <Nav />
      <div className="w-[90%] m-auto pt-32 flex flex-col items-center justify-center">
        <Breadcrumbs items={scrumbs} />
        <h1 className="w-full flex justify-center items-center font-black text-4xl">
          Checkout
        </h1>
        <div className="w-5/6">
          <MyStepper
            activeStep={activeStep}
            steps={steps}
            setActiveStep={setActiveStep}
          />
        </div>
      </div>
    </>
  );
};

export default page;
