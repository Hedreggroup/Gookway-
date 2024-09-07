"use client";
import AdminLogin from "@/components/AdminLogin/AdminLogin";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import React from "react";

const page = () => {
  useAuthRedirect();
  return (
    <div>
      <AdminLogin pageTitle={"vendor Access"} />
    </div>
  );
};

export default page;
