import React from "react";
import "./MissionSection.css";
import buddyImage from "../../assets/images/buddy.svg";
import aeroplaneImage from "../../assets/images/aeroplane.png";
import aeroplaneLineImage from "../../assets/images/aeroplaneline.png";
import useIsMobile from "../useIsMobile";
const MissionSection = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <div className="mission-section">
        <div className="mission-content">
          <div className="mission-content-image">
            <img
              src={aeroplaneImage}
              alt="aeroplane-image"
              className="mission-content-first-image"
            />
            <img
              src={aeroplaneLineImage}
              alt="aeroplane-image"
              className="mission-content-second-image"
            />
          </div>
          <h2 className="mission-content-heading">Our Mission</h2>
          {isMobile ? (
            <p className="mission-content-description">
              We want to enable authentic and personalized travel experiences by
              connecting travelers with passionate local guides.
            </p>
          ) : (
            <p className="mission-content-description">
              We want to enable authentic and personalized travel experiences
              <br /> by connecting travelers with passionate local guides.
            </p>
          )}

          {/* <p className="mission-content-description">
            We want to enable authentic and personalized travel experiences
            <br /> by connecting travelers with passionate local guides. //
          </p> */}
        </div>
        <div className="buddy-image">
          <img src={buddyImage} alt="buddy-image" />
        </div>
      </div>
    </>
  );
};

export default MissionSection;
