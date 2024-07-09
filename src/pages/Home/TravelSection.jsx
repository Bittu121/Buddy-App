import React from "react";
import "./TravelSection.css"
import logo from "../../assets/images/Group_52.svg";
const TravelSection = () => {
  return (
    <>
      <div className="travel-section">
        <div className="travel-section-content">
          <p>
            We help{" "}
            <span style={{ color: "rgba(92, 173, 100, 1)" }}>explorers</span>{" "}
            and
            <br />{" "}
            <span style={{ color: "rgba(92, 173, 100, 1)" }}>travellers </span>
            meet their travel
          </p>
        </div>
        <div className="logo-container">
          <img src={logo} alt="navbar-logo" className="logo-image" />
          <div className="logo-text">
            <h1>UDDY</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelSection;
