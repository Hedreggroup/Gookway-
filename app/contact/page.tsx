import React from "react";
import Breadcrumbs from "@/components/Bread";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const Page = () => {
  const scrumbs = {
    Home: "Home",
    Contact: "Contact",
  };

  return (
    <>
      <Nav />
      <div className="pt-40 w-[90%] h-auto m-auto">
        <div className="w-full h-96">
          {/* OpenStreetMap iframe */}
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=3.379203014728963%2C6.470042095320648%2C3.379203014728963%2C6.470042095320648&amp;layer=mapnik"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
        <div className="my-4">
          <Breadcrumbs items={scrumbs} />
        </div>
        <div className="w-full grid grid-cols-2 gap-5">
          <div className="left w-full flex flex-col justify-start items-start gap-5">
            <h1 className="text-5xl font-black">Contact Us</h1>
            <p className="text-lg">Do you have any question? Reach out to us</p>
            <form
              action=""
              className="w-full flex flex-col justify-start items-start gap-5 mb-5"
            >
              <div className="forgroup w-full">
                <label htmlFor="name" className="text-xl font-black">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Emmanuel"
                  className="w-full p-2 rounded-md border border-[#BFBFBF] mt-2 outline-none"
                />
              </div>
              <div className="group w-full flex justify-between items-center gap-5">
                <div className="forgroup w-[50%]">
                  <label htmlFor="phone" className="text-xl font-black">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="+234108912367"
                    className="w-full p-2 rounded-md border border-[#BFBFBF] mt-2 outline-none"
                  />
                </div>
                <div className="forgroup w-[50%]">
                  <label htmlFor="email" className="text-xl font-black">
                    Email Address
                  </label>
                  <input
                    type="text"
                    placeholder="emmanuelojo@gmail.com"
                    className="w-full p-2 rounded-md border border-gray-400 mt-2 outline-none"
                  />
                </div>
              </div>
              <div className="formgroup w-full">
                <label htmlFor="message" className="text-xl font-black">
                  Message
                </label>
                <textarea
                  name=""
                  id=""
                  cols={50}
                  className="w-full h-80 border border-[#BFBFBF] mt-2 rounded-md outline-none p-3"
                ></textarea>
              </div>
              <div className="formgroup w-full">
                <button
                  type="button"
                  className="bg-[#FF4D4D] text-white w-[40%] py-3 text-xl rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="right w-full p-5">
            <div className="section bg-[#FBFBFB] p-5">
              <h1 className="text-2xl font-bold">Keep in touch!</h1>
              <p>
                We would love to hear from you. Reach out us if you have
                enquiries
              </p>
              <div className="tourchGroup mt-5 w-full flex flex-col justify-center items-start gap-5">
                <div className="flex justify-start items-center gap-5">
                  <FaPhoneAlt size={24} />
                  <p className="text-lg">+234810987654</p>
                </div>
                <div className="flex justify-start items-center gap-5">
                  <IoIosMail size={24} />
                  <p className="text-lg">info@gookway.ng</p>
                </div>
                <div className="flex justify-start items-center gap-5">
                  <MdLocationPin size={24} />
                  <p className="text-lg">Garki Abuja, Nigeria</p>
                </div>
              </div>
              <h1 className="text-xl font-black border-b-2 border-b-[#FF4D4D] w-[23%] mt-5">
                Opening Hours
              </h1>
              <div className="openings mt-3">
                <p className="text-lg">
                  <span className="font-black">Mondays - Fridays :</span> 8:00am
                  - 5:00pm
                </p>
                <p className="text-lg">
                  <span className="font-black">Saturdays :</span> 8:00am -
                  5:00pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
