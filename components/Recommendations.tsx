import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { AiFillProduct } from 'react-icons/ai';

interface IData{
  products: []
}
const Recommendations:React.FC<IData> = ({products}) => {
{/* <SphereLoader /> */}
  return (
    <div className="w-[95%] m-auto mt-5">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl font-bold">Recommended for you</h1>
        <p className="flex justify-end items-center mt-5 text-lg cursor-pointer text-gray-500">
          view more
        </p>
      </div>
      <section className="w-full grid grid-col-2 gap-3 lg:grid-cols-5">
        {products.length > 0 ? (
          products.map((item:any)=> (
           <Link href={`/product/${item._id}`} key={item._id}>
             <div className="recomendation" >
              <div className="card h-[250px] bg-[#dcdcdc] flex justify-center items-center">
                {/* <Image src={""} width={150} height={150} alt='product image'/> */}
                <img src={item.images[0]} width={150} height={150}/>
                {/* <AiFillProduct size={200} /> */}
              </div>
              <p className="text-xl">{item?.name}</p>
              <span className="text-2xl font-bolder text-[#ff0000]">₦{item?.price}</span>
            </div>
           </Link>
            ))
        ):(
          <h1 className='text-gray-400 text-center text-xl'>Loading Please Wait...</h1>
        )}
        {/* <div className="recomendation">
          <div className="card h-[250px] bg-[#dcdcdc]"></div>
          <p className="text-xl">William Lawson’s Fine...</p>
          <span className="text-2xl font-bolder text-[#ff0000]">₦ 4,900</span>
        </div>
        <div className="recomendation">
          <div className="card h-[250px] bg-[#dcdcdc]"></div>
          <p className="text-xl">William Lawson’s Fine...</p>
          <span className="text-2xl font-bolder text-[#ff0000]">₦ 4,900</span>
        </div>
        <div className="recomendation">
          <div className="card h-[250px] bg-[#dcdcdc]"></div>
          <p className="text-xl">William Lawson’s Fine...</p>
          <span className="text-2xl font-bolder text-[#ff0000]">₦ 4,900</span>
        </div>
        <div className="recomendation">
          <div className="card h-[250px] bg-[#dcdcdc]"></div>
          <p className="text-xl">William Lawson’s Fine...</p>
          <span className="text-2xl font-bolder text-[#ff0000]">₦ 4,900</span>
        </div>
        <div className="recomendation">
          <div className="card h-[250px] bg-[#dcdcdc]"></div>
          <p className="text-xl">William Lawson’s Fine...</p>
          <span className="text-2xl font-bolder text-[#ff0000]">₦ 4,900</span>
        </div>
        <div className="recomendation">
          <div className="card h-[250px] bg-[#dcdcdc]"></div>
          <p className="text-xl">William Lawson’s Fine...</p>
          <span className="text-2xl font-bolder text-[#ff0000]">₦ 4,900</span>
        </div>
        <div className="recomendation">
          <div className="card h-[250px] bg-[#dcdcdc]"></div>
          <p className="text-xl">William Lawson’s Fine...</p>
          <span className="text-2xl font-bolder text-[#ff0000]">₦ 4,900</span>
        </div>
        <div className="recomendation">
          <div className="card h-[250px] bg-[#dcdcdc]"></div>
          <p className="text-xl">William Lawson’s Fine...</p>
          <span className="text-2xl font-bolder text-[#ff0000]">₦ 4,900</span>
        </div>
        <div className="recomendation">
          <div className="card h-[250px] bg-[#dcdcdc]"></div>
          <p className="text-xl">William Lawson’s Fine...</p>
          <span className="text-2xl font-bolder text-[#ff0000]">₦ 4,900</span>
        </div> */}
      </section>
    </div>
  );
}

export default Recommendations