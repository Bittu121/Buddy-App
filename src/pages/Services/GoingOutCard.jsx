import React from "react";
import styles from "../Services/GoingOutCard.module.css";
import image1 from "../../assets/images/ga.svg";
import arrowImage from "../../assets/images/Group_65.png";
const GoingOutCard = () => {
  return (
    <>
      <div className={styles.navigationSection}>
        <div className={styles.category}>
          <div className={styles.assistanceArrow}>
            <p style={{ color: "rgba(92, 173, 100, 1)" }}>
              Dining Recommendations
            </p>
            <img src={arrowImage} alt="arrowImage" />
          </div>
          <div className={styles.assistanceArrow}>
            <p style={{ color: "rgba(92, 173, 100, 1)", marginLeft: "5px" }}>
              Entertainment & Nightlife
            </p>
            <img src={arrowImage} alt="arrowImage" />
          </div>
          <div className={styles.assistanceArrow}>
            <p style={{ color: "rgba(92, 173, 100, 1)", marginLeft: "5px" }}>
              Shopping Assistance
            </p>
            <img src={arrowImage} alt="arrowImage" />
          </div>
          <div className={styles.assistanceArrow}>
            <p style={{ color: "rgba(92, 173, 100, 1)", marginLeft: "5px" }}>
              Cultural Experiences
            </p>
            <img src={arrowImage} alt="arrowImage" />
          </div>
          <div className={styles.assistanceArrow} id={styles.arrowMargin}>
            <p style={{ color: "rgba(92, 173, 100, 1)", marginLeft: "10px" }}>
              Nature & Adventure Activities
            </p>
            <img src={arrowImage} alt="arrowImage" />
          </div>
        </div>
        <div className={styles.goingOutSubsection}>
          <h2>Going out</h2>
          <img src={image1} alt="image" />
        </div>
      </div>
    </>
  );
};

export default GoingOutCard;
