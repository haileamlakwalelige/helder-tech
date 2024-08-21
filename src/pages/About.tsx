// import React from 'react'
import AboutHero from "../components/about/AboutHero";
import Story from "../components/about/Story";
import History from '../components/about/History'
import Mission from '../components/about/Mission'
import Factors from '../components/about/Factors'
import OurTeam from '../components/about/OurTeam'
import Offer from '../components/about/Offer'
import Clients from '../components/about/Clients'
import GetNewProject from "../components/reusables/GetNewProject";

const About = () => {
  return (
    <div className="w-screen min-h-screen">
      <AboutHero />
      <Story />
      <History/>
      <Mission/>
      <Factors/>
      <OurTeam/>
      <Offer/>
      <GetNewProject />
      <Clients />
    </div>
  )
}

export default About