import React from "react";
import "./StoreIcon.css";
import appStoreIcon from "../../assets/images/appstoreicon.png";
import googePlayStoreIcon from "../../assets/images/googleplaystoreicon.png";
const StoreIcon = () => {
  return (
    <>
      <div className="store-icons-container">
        <img src={appStoreIcon} alt="app-store-icon" className="store-icon" />
        <img
          src={googePlayStoreIcon}
          alt="google-play-store-icon"
          className="store-icon"
        />
      </div>
    </>
  );
};
export default StoreIcon;
