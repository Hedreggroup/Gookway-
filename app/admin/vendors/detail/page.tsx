"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const VendorDetail = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Retrieve the 'id' query parameter

  return (
    <div>
      <h1>Vendor Detail Page</h1>
      <p>Vendor ID: {id ?? "N/A"}</p>
    </div>
  );
};

const VendorDetailPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VendorDetail />
    </Suspense>
  );
};

export default VendorDetailPage;
