import React from 'react'
import Hero from '../Components/Hero'
import AboutSection from '../Components/HomeAbout'
import HomeServices from '../Components/HomeServices'
import HomeStats from "../Components/HomeStats"
import WhyChooseUs from '../Components/WhyChoose'
import ReliableTeam from '../Components/ReliableTeam'
import Services from '../Components/OurServices'
import FeaturedProjects from '../Components/HomeProjects'
const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <Services/>
      <ReliableTeam/>
      <WhyChooseUs/>
      <FeaturedProjects/>
      <HomeStats/>
      <HomeServices/>
    </div>
  )
}

export default Home
