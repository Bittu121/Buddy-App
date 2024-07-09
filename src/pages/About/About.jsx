import React from "react";
import styles from "./About.module.css";
import AboutContent from "./AboutContent";
import VisionSection from "./VisionSection";
import MissionSection from "./MissionSection";
import TeamDescription from "./TeamDescription";
import TeamImage from "./TeamImage";
import Accordian from "./Accordian";
const About = () => {
  return (
    <>
      <div className={styles.aboutContainer}>
        {/* about-content */}
        <AboutContent />

        <div className={styles.missionVisionContainer}>
          {/* mission-section */}
          <MissionSection />

          {/* vision-section */}
          <VisionSection />
        </div>

        {/* team-section */}
        <div className={styles.teamSection}>
          <TeamDescription />

          {/* Team-image */}
          <TeamImage />
        </div>
        <Accordian />
      </div>
    </>
  );
};

export default About;
