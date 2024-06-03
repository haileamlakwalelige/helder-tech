// import React from 'react'

import { Link } from "react-router-dom"

const AboutHero = () => {
  return (
    <div className="bg-[#3A79CE] absolute flex flex-col w-screen min-h-[60vh] top-0 z-10  text-center justify-center items-center text-white">
      <h1 className="text-[40px] md:text-[50px] lg:text-[55px] xl:text-7xl  font-extrabold " style={{ letterSpacing: '7px' }}>ABOUT US</h1>
      <div className="mt-4">
        <Link to="/home">Home </Link>
        &gt;
        <Link to="/about"> About us</Link>
      </div>
    </div>
  )
}

export default AboutHero