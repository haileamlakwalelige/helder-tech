import React from "react";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export default function Download() {
  return (
    <div className="lg:mt-[12rem] mt-[1rem] lg:mx-[8rem] gird mx-[1.8rem] lg:flex lg:gap-10 gap-5 items-center justify-center">
      <div className="items-center inline-flex py-1 lg:px-5 mr-2 lg:mr-0 px-4 rounded-full bg-titleFont text-white">
        <IoLogoGooglePlaystore color="black" className="mr-2" size={30} />
        <div>
          <p className="text-[12px]">download on the</p>
          <p className="font-semibold">Google Play</p>
        </div>
      </div>
      <div className="items-center inline-flex py-1 lg:px-7 px-4 rounded-full bg-titleFont text-white">
        <FaApple color="black" className="mr-2" size={30} />
        <div>
          <p className="text-[12px]">download on the</p>
          <p className="font-semibold">App Store</p>
        </div>
      </div>
    </div>
  );
}
