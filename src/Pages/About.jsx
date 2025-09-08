import React from "react";
import WhyChooseUs from "../Components/WhyChoose";
import HomeServices from "../Components/HomeServices";
import AboutStats from "../Components/AboutStats";
import AboutHero from "../Components/AboutHero";
import EmergencySection from "../Components/AboutEmergency";
import AboutService from '../Components/AboutService'
import HistorySection from "../Components/AboutHistory";
import SatisfactionSection from "../Components/AboutSatisfaction";
const About = () => {
  return (
    <div>
      <AboutHero/>
      <AboutService/>
      <HistorySection/>
      <SatisfactionSection/>
      <EmergencySection/>
      <WhyChooseUs />
      <AboutStats/>
      <HomeServices />
    </div>
  );
};

export default About;
