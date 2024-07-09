import React from "react";
// import image1 from "../../assets/images/Group_60.svg";
import image1 from "../../assets/images/image1.png";
import "./PhoneImage.css"
const PhoneImage = () => {
  return (
    <>
      <div className="iphone-image">
        <img src={image1} alt="iphone-image" />
      </div>
    </>
  );
};
export default PhoneImage;
