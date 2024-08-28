"use client";
import Button from "@/components/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import React from "react";

const ProductList = () => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/vendor/add-product");
  };
  return (
    <div>
      <div className="flex items-center gap-4 justify-end">
        <Button color="white" withBorder>
          Export{" "}
        </Button>
        <Button
          onClick={handleNavigation}
          prefixIcon={<Icon icon="mingcute:add-line" />}
        >
          Add Products
        </Button>
      </div>
    </div>
  );
};

export default ProductList;
