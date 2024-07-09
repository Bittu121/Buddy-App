import React, { useState,useEffect } from "react";
import "./TeamImage.css";
// import componentOneImage from "../../assets/images/headshot1.svg";
import componentOneImage from "../../assets/images/DavidArtheadshot.jpeg";
import componentTwoImage from "../../assets/images/headshot2.svg";
// import componentThreeImage from "../../assets/images/headshot3.svg";
import componentThreeImage from "../../assets/images/ClintonLiheadshot.jpeg";

const TeamImage = () => {
  const [hovered, setHovered] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      const imageContainer = document.querySelector(".imageContainer");
      if (window.innerWidth <= 480) {
        imageContainer.classList.add("no-transition");
      } else {
        imageContainer.classList.remove("no-transition");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="imageContainer">
      <div
        onMouseEnter={() => setHovered(0)}
        onMouseLeave={() => setHovered(null)}
        className={`image ${hovered === 0 ? "hovered" : ""} ${
          hovered !== null && hovered !== 0 ? "shrink" : ""
        }`}
      >
        <img src={componentOneImage} alt="component-image" />
        <div className="image-details">
          <h3 className="image-heading">CEO</h3>
          <span className="image-description">David Art</span>
        </div>
      </div>
      <div
        onMouseEnter={() => setHovered(1)}
        onMouseLeave={() => setHovered(null)}
        className={`image ${hovered === 1 ? "hovered" : ""} ${
          hovered !== null && hovered !== 1 ? "shrink" : ""
        }`}
      >
        <img src={componentTwoImage} alt="component-image" />
        <div className="image-details">
          <h3 className="image-heading">CTO</h3>
          <span className="image-description">Piyush Bansal</span>
        </div>
      </div>
      <div
        onMouseEnter={() => setHovered(2)}
        onMouseLeave={() => setHovered(null)}
        className={`image ${hovered === 2 ? "hovered" : ""} ${
          hovered !== null && hovered !== 2 ? "shrink" : ""
        }`}
      >
        <img src={componentThreeImage} alt="component-image" />
        <div className="image-details">
          <h3 className="image-heading">CMO</h3>
          <span className="image-description">Clinton Li</span>
        </div>
      </div>
    </div>
  );
};
export default TeamImage;
