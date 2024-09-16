"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const VendorDetailPage = () => {
  // const searchParams = useSearchParams(); // Correct hook for getting search params
  // const id = searchParams.get("id"); // Use get method to retrieve query param

  return (
    <div>
      <h1>Vendor Detail Page</h1>
      {/* <p>Vendor ID: {id ?? ""}</p> */}
    </div>
  );
};

export default VendorDetailPage;
