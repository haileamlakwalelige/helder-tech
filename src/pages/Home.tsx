// import React from 'react'

import Hero from "../components/home/Hero";
import HomeAbout from "../components/home/HomeAbout";

const Home = () => {
  return (
    <div className="pt-32 min-h-screen items-start justify-start flex flex-col">
      <Hero />
      <HomeAbout />
    </div>
  )
}

export default Home