import React from "react";
import styles from "../Services/ProfileCard.module.css";
import image2 from "../../assets/images/pr.svg";
import image3 from "../../assets/images/Rectangle_4971.svg";
import image4 from "../../assets/images/Rectangle_4970.png";
import image5 from "../../assets/images/Rectangle_4971_1.png";
import image6 from "../../assets/images/po.svg";
import streamLineTwoImage from "../../assets/images/streamlinetwo.png";
// import streamLineTwoImage from "../../assets/images/Vectortwo.svg";
const ProfileCard = () => {
  return (
    <>
      <div className={styles.profileContainer}>
        <div className={styles.profileContainerOne}>
          <div className={styles.profileContent}>
            <h2 className={styles.profileContentHeading}>Profile</h2>
            <img src={image2} alt="profileImage" id={styles.image2} />
          </div>
          <img src={image3} alt="profileImage" id={styles.thirdImage} />
        </div>
        <div className={styles.profileContainerTwo}>
          <div className={styles.eventContent}>
            <img src={streamLineTwoImage} alt="streamlineImage" />
            <h2>Events</h2>
            <p>
              Discover new experiences
              <br /> and more ways to do things
              <br /> you love.
            </p>
          </div>
          <img src={image4} alt="profile-image" id={styles.image4} />
          <div className={styles.verifiedProfileContent}>
            <img src={streamLineTwoImage} alt="streamlineImage"/>
            <h2>
              Verified
              <br />
              Profiles
            </h2>
            <p>
              We ensure that you connect
              <br /> with a real person.
            </p>
          </div>
        </div>
        <div className={styles.profileContainerThree}>
          <img src={image5} alt="profileImage" id={styles.fourthImage} />
          <div className={styles.securePayment}>
            <h2>Secured Payments</h2>
            {/* <p>Through App Store and Play Store.</p> */}
            <img src={image6} alt="profileImage" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
