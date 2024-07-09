import React from "react";
import styles from "../ContactUs/ContactUs.module.css";
import ContactUsForm from "./ContactUsForm";
import ContactUsImage from "./ContactUsImage";

const ContactUs = () => {
  return (
    <>
      <div className={styles.contactPageHeader}>
        <div className={styles.contactSection}>
          <ContactUsForm />
          <ContactUsImage />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
