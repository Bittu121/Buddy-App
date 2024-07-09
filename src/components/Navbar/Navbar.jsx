import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/Group_52.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    setShowMenu(false);
  }, [currentPath]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  // const handleLinkClick = () => {
  //   if (window.innerWidth <= 768) {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }
  // };
  
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className={styles.navbarContainer}>
        <div className={styles.navbarToggle} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <div className={styles.navbarLogo}>
          <NavLink to="/" onClick={handleLinkClick}>
            <img src={logo} alt="logo" />
          </NavLink>
          <NavLink to="/" onClick={handleLinkClick}>
            <h1 className={styles.navbarHeading}>UDDY</h1>
          </NavLink>
        </div>
        <ul
          className={
            showMenu
              ? `${styles.navbarMenu} ${styles.active}`
              : styles.navbarMenu
          }
        >
          <li>
            <NavLink
              to="/"
              onClick={handleLinkClick}
              // className={currentPath === "/" ? styles.activeLink : ""}
            >
              <span
                className={`${
                  currentPath === "/" ? styles.activeLink : styles.homeText
                }`}
              >
                Home
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={handleLinkClick}
              // className={currentPath === "/about" ? styles.activeLink : ""}
            >
              <span
                className={`${
                  currentPath === "/about"
                    ? styles.activeLink
                    : styles.aboutText
                }`}
              >
                About
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              onClick={handleLinkClick}
              // className={currentPath === "/services" ? styles.activeLink : ""}
            >
              <span
                className={`${
                  currentPath === "/services"
                    ? styles.activeLink
                    : styles.servicesText
                }`}
              >
                Services
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/termsAndconditions"
              onClick={handleLinkClick}
              // className={
              //   currentPath === "/termsAndconditions" ? styles.activeLink : ""
              // }
            >
              <span
                className={` ${
                  currentPath === "/termsAndconditions"
                    ? styles.activeLink
                    : styles.termsAndConditionsText
                }`}
              >
                Terms & Conditions
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/safety"
              onClick={handleLinkClick}
              // className={currentPath === "/safety" ? styles.activeLink : ""}
            >
              <span
                className={` ${
                  currentPath === "/safety"
                    ? styles.activeLink
                    : styles.safetyText
                }`}
              >
                Safety
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              onClick={handleLinkClick}
              // className={currentPath === "/contact-us" ? styles.activeLink : ""}
            >
              <span
                className={` ${
                  currentPath === "/contact-us"
                    ? styles.activeLink
                    : styles.contactUsText
                } `}
              >
                Contact us
              </span>
            </NavLink>
          </li>
        </ul>
        <button className={styles.getTheAppButton}>Get the app</button>
      </nav>
    </>
  );
};

export default Navbar;
