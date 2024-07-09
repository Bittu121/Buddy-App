import React from "react";
import "./TeamDescription.css";
const TeamDescription = () => {
  return (
    <>
      <div className="team-description">
        <div className="team-intro">
          <p id="team-intro-one">
            The talented individuals driving the mission of Buddy.
          </p>
          <p id="team-intro-second">
            Meet the key members of our company's team who bring expertise and
            passion to everything we do.
          </p>
        </div>
        <button className="team-button">
          <span className="button-text">Meet our team</span>
        </button>
      </div>
    </>
  );
};

export default TeamDescription;
