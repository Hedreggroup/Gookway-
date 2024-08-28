"use client"
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

export default  function Home() {
  // const response = await handleFetchProducts()
  // console.log(response)
  const [products, setProducts] = useState<any>([])
  const [categories, setCategories] = useState<any>([])
  const handleFetchProducts = async ()=>{
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/products?fields=name,price,stock,images`)
    setProducts(response?.data.data.products)
    return response?.data.data.products
}
  const handleFetchCategories = async ()=>{
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/category`)
    setCategories(response?.data.data)
    return response?.data.data.products
}
console.log(categories)
 useEffect(()=>{
  handleFetchProducts()
  handleFetchCategories()
 },[])
  return (
    <div className="w-full h-auto bg-[#efedef] pt-28">
      <Nav />
      <Banner />
      <Categories categories={categories}/>
      <Recommendations products={products}/>
      <OtherBrands />
      <Footer />
    </div>
  );
}
