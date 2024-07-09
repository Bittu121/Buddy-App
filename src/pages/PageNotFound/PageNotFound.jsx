import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PageNotFound.module.css"
const PageNotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className={styles.pageNotFoundContainer}>
        <h1 className="PageNotFoundHeading">404 - Not Found</h1>
        <button onClick={handleClick} id="PageNotFoundBtn">
          Go to Home page
        </button>
      </div>
    </>
  );
};

export default PageNotFound;
