import React from "react";
import "./RobotSection.css";
import robotImage from "../../assets/images/robot.png";
import useIsMobile from "../useIsMobile";
const RobotSection = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <div className="robot-container">
        <img src={robotImage} alt="robot-image" className="robot-image" />
        {isMobile ? (
          <p className="robot-description-text">
            We harness the power of AI to create a
            <span style={{ color: "rgba(92, 173, 100, 1)" }}>seamless</span>,
            instant guide for all users
          </p>
        ) : (
          <p className="robot-description-text">
            {/* Want to connect immediately? */}
            {/* <br />  */}
            We harness the power of AI to
            <br /> create a{" "}
            <span style={{ color: "rgba(92, 173, 100, 1)" }}>seamless</span>,
            instant
            <br /> guide for all users
          </p>
        )}
      </div>
    </>
  );
};

export default RobotSection;
