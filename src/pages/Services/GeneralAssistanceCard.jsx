import React from "react";
import styles from "../Services/Services.module.css";
import image1 from "../../assets/images/ga.svg";
import arrowImage from "../../assets/images/Group_65.png";
const GeneralAssistanceCard = () => {
  return (
    <>
      <div className={styles.assistanceContainer}>
        <div className={styles.generalAssistance}>
          <h2>General Assistance</h2>
          <img src={image1} alt="image" />
        </div>
        <div className={styles.assistanceContainerContent}>
          <div className={styles.assistanceArrow}>
            <p>Language Assistance</p>
            <img src={arrowImage} alt="arrowImage" />
          </div>
          <div className={styles.assistanceArrow}>
            <p>Transportation Assistance</p>
            <img src={arrowImage} alt="arrowImage" />
          </div>
          <div className={styles.assistanceArrow}>
            <p>Safety & Security</p>
            <img src={arrowImage} alt="arrowImage" />
          </div>
          <div className={styles.assistanceArrow}>
            <p style={{marginLeft:"5px"}}>Customized Itineraries</p>
            <img src={arrowImage} alt="arrowImage" />
          </div>
          <div className={styles.assistanceArrow}>
            <p style={{marginLeft:"5px"}}>Local Etiquette and Customs </p>
            <img src={arrowImage} alt="arrowImage" />
          </div>
        </div>
      </div>
    </>
  );
};
export default GeneralAssistanceCard;
