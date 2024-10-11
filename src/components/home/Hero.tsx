// import React from 'react'
import twit from "../../assets/twit.png";
import link from "../../assets/link.png";
import face from "../../assets/face.png";
import insta from "../../assets/insta.png";
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import { useEffect, useState } from "react";
import "./hero.css";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0 || window.innerWidth < 768;
      console.log("is scrolled,", isScrolled);
      console.log("window inner length", window.innerWidth);
      setScrolled(isScrolled);
    };

    const handleResize = () => {
      // Your resize handling logic goes here
      handleScroll(); // Update scroll state on resize
    };

    // Subscribe to the scroll and resize events when the component mounts on the client side
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      // Unsubscribe from the events when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <>
      <div className="flex lg:flex-row  top-0 -mt-32 min-h-screen mb-20">
        <div className="flex flex-wrap gap-10 top-0">
          <div className="ml-5 gap-10 items-start justify-start hidden lg:flex flex-col list-none max-w-[100px]">
            <li>
              <img
                src={face}
                alt=""
                className="h-[20px] w-[20px] cursor-pointer"
              />
            </li>
            <li>
              <img
                src={link}
                alt=""
                className="h-[20px] w-[20px] cursor-pointer"
              />
            </li>
            <li>
              <img
                src={insta}
                alt=""
                className="h-[20px] w-[20px] cursor-pointer"
              />
            </li>
            <li>
              <img
                src={twit}
                alt=""
                className="h-[20px] w-[20px] cursor-pointer"
              />
            </li>
          </div>
          <div className="">
            <img
              src={hero1}
              alt=""
              className={`${
                scrolled
                  ? "' z-10 w-[40rem]  lg:-mt-1 mt-20'"
                  : "' z-10 w-[40rem]  lg:-mt-1 mt-20'"
              }`}
            />
            <p className="text-[32px] px-2 sm:px-4 md:px-8 lg:px-12 -mt-80 lg:-mt-[23rem] md:text-[38px] lg:text-[44px] font-semibold text-[#ebebeb] xl:text-[45px] z-30">
              Your Trusted <br /> Technology Partner For
            </p>
            <div
              className="max-h-[100px] overflow-y-hidden duration-150 "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {isHovered ? (
                <p
                  aria-disabled
                  className="text-[32px] px-2 sm:px-4 md:px-8 lg:px-12 md:text-[38px] lg:text-[44px] font-extrabold text-white xl:text-[54px] z-30 animate-to-top absolute duration-150"
                >
                  MOBILE DEV'T
                </p>
              ) : (
                <p className="text-[32px] px-2 sm:px-4 md:px-8 lg:px-12 md:text-[38px] lg:text-[44px] font-extrabold text-white xl:text-[54px] z-30 animate-from-top absolute duration-150">
                  WEBSITE DEV'T
                </p>
              )}
            </div>
            <p className="mt-44 text-center lg:text-start my-16 lg:mt-80 text-base lg:text-lg xl:text-xl text-[#3A3A3A]">
              Our expert team crafts technology solutions for businesses of all
              sizes. We <br /> combine software development, marketing, design,
              and training to empower your <br /> success in the digital age.
            </p>
          </div>
          <div className="hidden flex-col justify-center lg:block lg:mt-32">
            <img
              src={hero2}
              alt=""
              className="max-h-[119px] max-w-[210px] lg:mt-20 ml-4 mt-20 absolute hero2"
            />
            <img
              src={hero3}
              alt=""
              className="max-h-[587px] h-full max-w-[310px] lg:ml-32 hero3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
