"use client"
import SkeltonLoading from '@/components/SkeltonLoading';
import { useGlobalStore } from '@/components/store/userStore';
import { useGet } from '@/hooks/useGet';
import Link from 'next/link';
import React from 'react'
interface IData {
    products: [];
  }
const page: React.FC<IData> = ({products}) => {
    const { data, isLoading, error } = useGet(
        `/products?fields=name,price,stock,images,slug,category`
      );
    const { filterText, categoryText } = useGlobalStore();
//   const filteredProducts = data?.data?.products?.filter((item: any) =>
//     item.category.toLowerCase().includes(categoryText.toLowerCase())
//   );
console.log(data)
  const filteredProducts = categoryText
  ? categoryText.toLowerCase() === "all categories"
    ? data?.data?.products 
    : data?.data?.products?.filter((item: any) =>
        item?.category.toLowerCase() === categoryText.toLowerCase()
      )
  : data?.data?.products ; 

  console.log("this is the filtered Text", products)
  return (
    <div className="w-[95%] m-auto mt-5">
      <div className="w-full flex justify-between items-center my-2">
        <div className='flex justify-start items-center gap-10'>
          <Link href={"/"} className='text-2xl font-bold'>Home</Link>
          <h1 className="text-2xl font-medium">{categoryText || "All Categories"}</h1>
        </div>
        <p className="flex justify-end items-center text-md cursor-pointer text-gray-500">
          view more
        </p>
      </div>
      <section className="w-full grid  grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-5 xl:grid-cols-6">
        {data?.data?.products ?.length > 0 ? (
          filteredProducts .length > 0 ? (
            filteredProducts.map((item: any) => (
              <Link href={`/product?id=${item?.slug}`} key={item._id}>
                <div className="recomendation flex flex-col justify-center items-center">
                  <div className="card h-auto p-4 bg-transparent shadow-lg flex justify-center items-center">
                    <img src={item.images[0]} width={150} height={150} />
                  </div>
                  <p className="text-sm font-light my-2">{item?.name}</p>
                  <span className="text-2xl font-bold text-red-500">
                    ₦{item?.price}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-sm lg:text-lg xl:text-xl my-4 text-gray-500">No products found</p>
          )
        ) : (
          <SkeltonLoading length={30} />
        )}
      </section>
    </div>
  )
}

export default page