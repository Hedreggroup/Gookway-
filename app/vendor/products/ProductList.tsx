"use client";
import Button from "@/components/Button";
import Table from "@/components/Table/Table";
import { useGet } from "@/hooks/useGet";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import moment from "moment";

const ProductList = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const router = useRouter();
  const [products, setProducts] = useState<any>([]);
  const { data, isLoading, error } = useGet(
    `/products?page=${page}&limit=${limit}&fields=name,price,images,category,rating,stock,vendor&sort=-created_at`
  );
  const handleNavigation = () => {
    router.push("/vendor/add-product");
  };

  let columnData = [
    { heading: "Product ", value: "product" },
    { heading: "price", value: "price" },
    { heading: "inventory ", value: "inventory" },
    { heading: "Rating", value: "rating" },
    { heading: "Uploaded On", value: "created_at" },
  ];
  useEffect(() => {
    if (!isLoading && data?.data?.products) {
      const updatedProducts = data.data.products.map((product: any) => {
        return {
          ...product,
          created_at: (
            <div className="text-sm">
              {moment(product.createdAt).format("DD MMM, YYYY")}
            </div>
          ),
          price: <div className="text-sm">₦ {product.price}</div>,
          inventory: <div className="text-sm">{product.stock} in Stock</div>,
          rating: <div className="text-sm">{product.rating} Reviews</div>,
          product: (
            <div className="flex items-center gap-2 w-auto overflow-hidden">
              <img src={product?.images?.[0]} className="h-20 w-20" />
              <div>
                <h4 className="font-bold text-sm">{product?.name}</h4>
                <p className="text-gray-400 text-xs">{product?.category}</p>
              </div>
            </div>
          ),
        };
      });

      setProducts(updatedProducts); // Set the entire array in one go
    }
  }, [data]);

  return (
    <div>
      <div className="flex items-center gap-4 justify-end">
        {/* <Button color="white" withBorder>
          Export{" "}
        </Button> */}
        <Button
          onClick={handleNavigation}
          prefixIcon={<Icon icon="mingcute:add-line" />}
        >
          Add Products
        </Button>
      </div>
      <div className="rounded-lg mt-4 bg-white px-4 py-8">
        <Table
          currentPage={page}
          pageLimit={limit}
          loading={isLoading}
          onPaginationChange={(val: any) => {
            setPage(val?.page);
            setLimit(val?.limit);
          }}
          tableTitle={""}
          data={products}
          columnData={columnData}
        />
      </div>
    </div>
  );
};

export default ProductList;
