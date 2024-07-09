import React from "react";
import styles from "../ContactUs/ContactUs.module.css";
import contactUsImage from "../../assets/images/Rectangle_4972.png";
const ContactUsImage = () => {
  return (
    <>
      <div className={styles.contactImageContainer}>
        <img src={contactUsImage} alt="ContactUs" />
      </div>
    </>
  );
};

export default ContactUsImage;
