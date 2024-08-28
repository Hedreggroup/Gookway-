import Breadcrumbs from '@/components/Bread';
import Nav from '@/components/Nav'
import React from 'react'
import Image from 'next/image';
import Tv1 from "../../public/assets/tv1.png";
import Tv2 from "../../public/assets/tv4.png";
import Tv3 from "../../public/assets/tv3.png";
const page = () => {
    const scrumbs = {
        Home: "Home",
        Cart: "Orders",
      };
  return (
    <>
        <Nav/>
        <div className='w-[90%] m-auto pt-[10%]'>
        <Breadcrumbs items={scrumbs} />

        <div className="menus w-full flex justify-start items-start gap-4 mt-5">
            <p className='font-bold text-[18px] border-b-2 cursor-pointer border-b-[#FF4D4D]'>View all</p>
            <p className='text-[#9C9898] cursor-pointer text-[18px]'>Shipped (3)</p>
            <p className='text-[#9C9898] cursor-pointer text-[18px]'>Cancelled (0)</p>
        </div>

        <div className="orders">
            <div className="order">
                <Image src={Tv1} alt='product image'/>
            </div>
            <div className="order">
                <Image src={Tv2} alt='product image'/>
            </div>
            <div className="order">
                <Image src={Tv3} alt='product image'/>
            </div>
        </div>
        </div>
    </>
  )
}

export default page