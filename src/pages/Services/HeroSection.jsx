import React from "react";
import styles from "../Services/HeroSection.module.css"
const HeroSection = () => {
  return (
    <>
      <div className={styles.heroSection}>
        <h1 className={styles.heroSectionHeading}>
          <span style={{ color: "#3C5E73" }}>Unforgettable</span>{" "}
          <span style={{ color: "#457366" }}>Adventures</span> Await
        </h1>
        <p className={styles.heroSectionDescription}>
          Guided by Our Local Experts
        </p>
      </div>
    </>
  );
};

export default HeroSection;
