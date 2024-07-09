import React from "react";
import "./AboutContent.css";
import useIsMobile from "../useIsMobile";
const AboutContent = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <div className="about-content">
        {/* <h1 className="about-title">
          <span style={{ color: "#44687e" }}>
            Discover <span style={{ color: "#4a7a77" }}>Thailand</span>
          </span>
          : Your Gateway
          <br /> to Authentic Travel Experiences
        </h1> */}
        {isMobile ? (
          <h1 className="about-title">
            <span style={{ color: "#44687e" }}>
              Discover <span style={{ color: "#4a7a77" }}>Thailand</span>
            </span>
            : Your Gateway to Authentic Travel Experiences
          </h1>
        ) : (
          <h1 className="about-title">
            <span style={{ color: "#44687e" }}>
              Discover <span style={{ color: "#4a7a77" }}>Thailand</span>
            </span>
            : Your Gateway
            <br /> to Authentic Travel Experiences
          </h1>
        )}
        <p className="about-description">
          Embark on Unforgettable Journeys Guided by Local Experts
        </p>
      </div>
    </>
  );
};

export default AboutContent;
