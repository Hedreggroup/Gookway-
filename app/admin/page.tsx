"use client";
import React from "react";
import Layout from "./layout";
import Dashboard from "./dashboard/Dashboard";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";

const page = () => {
  useAuthRedirect();
  return <Dashboard />;
};

export default page;
