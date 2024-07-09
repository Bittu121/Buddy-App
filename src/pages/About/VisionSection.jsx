import React from "react";
import "./VisionSection.css";
import buddyOneImage from "../../assets/images/buddy1.png";
import streamLineOne from "../../assets/images/streamlineone.png";
import streamLineTwo from "../../assets/images/streamlinetwo.png";
import useIsMobile from "../useIsMobile";
const VisionSection = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <div className="vision-section">
        <div className="buddy-one-image-container">
          <img src={buddyOneImage} alt="buddy-image" />
        </div>
        <div className="vision-content">
          <div className="vision-content-image">
            <img
              src={streamLineOne}
              alt="stremline"
              className="vision-content-first-image"
            />
            <img
              src={streamLineTwo}
              alt="streamline"
              id="vision-content-second-image"
            />
          </div>
          <h2 className="vision-content-heading">Our Vision</h2>
          {isMobile ? (
            <p className="vision-content-description">
              Our vision is to revolutionize travel by connecting curious minds
              with passionate locals, creating unforgettable memories along the
              way by bridging cultures and fostering global understanding.
            </p>
          ) : (
            <p className="vision-content-description">
              Our vision is to revolutionize travel by connecting curious minds
              <br />
              with passionate locals, creating unforgettable memories along
              <br /> the way by bridging cultures and fostering global
              understanding.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default VisionSection;
