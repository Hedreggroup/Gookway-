"use client"
import React from 'react'
import Image from 'next/image'
import success from "../public/assets/success.png"
const Modal = () => {
  return (
    <div className='w-full h-screen bg-[#FAFAFA] fixed top-0 right-0 left-0 z-[100]'>
        <div className='w-[579px] h-[600px] m-auto xl:mt-[200px] bg-white drop-shadow-xl flex flex-col justify-start items-center gap-3 pt-36'>
            <Image src={success} width={150} height={150} alt='success logo'/>
            <p>Your order has been completed. Track Order</p>
            <button type='button' className='w-[150px] h-[auto] bg-[#FF4D4D] rounded-[8px] text-white py-2 '>Back to Home</button>
        </div>
    </div>
  )
}

export default Modal