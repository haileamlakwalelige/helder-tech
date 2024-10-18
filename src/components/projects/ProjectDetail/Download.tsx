import React from "react";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export default function Download() {
  return (
    <div className="mt-[12rem] mx-[8rem]  flex gap-10 items-center justify-center">
      <div className="items-center inline-flex py-1 px-5 rounded-full bg-titleFont text-white">
        <IoLogoGooglePlaystore color="black" className="mr-2" size={30} />
        <div>
          <p className="text-[12px]">download on the</p>
          <p className="font-semibold">Google Play</p>
        </div>
      </div>
      <div className="items-center inline-flex py-1 px-7 rounded-full bg-titleFont text-white">
        <FaApple color="black" className="mr-2" size={30} />
        <div>
          <p className="text-[12px]">download on the</p>
          <p className="font-semibold">App Store</p>
        </div>
      </div>
    </div>
  );
}
