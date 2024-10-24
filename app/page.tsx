"use client";
import axios from "axios";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import OtherBrands from "@/components/OtherBrands";
import Recommendations from "@/components/Recommendations";
import { resolve } from "path";
import { handleFetchProducts } from "@/components/products";
import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import { Provider } from "react-redux";
import store from "@/components/store/store";
import { useGet } from "@/hooks/useGet";

export default function Home() {
  const { data, isLoading, error } = useGet(
    `/products?fields=name,price,stock,images,slug,category`
  );

  const {
    data: categoriesData,
    isLoading: ldnCat,
    error: err,
  } = useGet(`/category`);

  return (
    <Provider store={store}>
      <div className="w-full h-auto bg-[#efedef] pt-28">
        <Nav />
        <Banner />
        <Categories categories={categoriesData?.data} />
        <Recommendations products={data?.data?.products} />
        <OtherBrands />
        <Footer />
      </div>
    </Provider>
  );
}
