import React from "react";
import styles from "../Services/Services.module.css";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import GeneralAssistanceCard from "./GeneralAssistanceCard";
import GoingOutCard from "./GoingOutCard";
import ProfileCard from "./ProfileCard";
const Services = () => {
  return (
    <>
      <div className={styles.servicesContainer}>
        {/* Hero section */}
        <HeroSection />
        {/* services-section */}
        <ServicesSection />

        {/* for General assistance */}
        <GeneralAssistanceCard />

        {/* css for Going out */}
        <GoingOutCard />

        {/* profile-container */}
        <ProfileCard />
      </div>
    </>
  );
};

export default Services;
