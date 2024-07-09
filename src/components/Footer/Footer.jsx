import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import footerlogo from "../../assets/images/Group_59.svg";
import facebookIcon from "../../assets/images/facebook.png";
import instagramIcon from "../../assets/images/instagram.png";
import vectorIcon from "../../assets/images/vector.png";
const Footer = () => {
  const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId); 
      if (section) {
        // If allready on the page then scroll to the section
        window.scrollTo({
          top: section.offsetTop - 35,
          behavior: "smooth",
        });
      } else {
        // Wait to navigation to page complete and then scroll to the section
        setTimeout(() => {scrollToWrapper(sectionId)}, 50)
      }
  };

  function scrollToWrapper(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop - 35,
      behavior: "smooth",
    });
  }
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <NavLink to="/">
            <img src={footerlogo} alt="FooterLogo" />
          </NavLink>
          <ul className={styles.footerLinks}>
            <li>
              <NavLink to="/termsAndconditions" onClick={() => scrollToSection("termAndCondionSection")}>
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink to="/termsAndconditions" onClick={() => scrollToSection("privacyAndPolicySection")}>
              Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.socialIcons}>
          <img src={facebookIcon} alt="facebooklogo" />
          <img src={instagramIcon} alt="instagramlogo" />
          <img src={vectorIcon} alt="vectorlogo" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
