import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../Home/Home.css";
import mailIcon from "../../assets/images/mail.svg";
import leftArrow from "../../assets/images/leftarrow.png";
import rightArrow from "../../assets/images/rightarrow.png";
import bellIcon from "../../assets/images/bell.svg";
import ambulanceIcon from "../../assets/images/noto_ambulance.svg";
import governmentIcon from "../../assets/images/government.svg";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";

import SlickSlider from "./SlickSlider";
import TravelSection from "./TravelSection";
import PhoneImage from "./PhoneImage";
import RobotSection from "./RobotSection";
import EmergencySection from "./EmergencySection";
import Video from "./Video";
import StoreIcon from "./StoreIcon";
import useIsMobile from "../useIsMobile";

const Home = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const validateForm = () => {
    if (!email) {
      toast.error("Please enter your email address.", {
        position: "top-center",
      });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-center",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        const responseData = await response.json();
        toast.success(responseData.message, {
          position: "top-center",
        });
        setEmail("");
      } else {
        const responseData = await response.json();
        toast.error(responseData.message || "Failed to submit form.", {
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error("Error: " + error.message, {
        position: "top-center",
      });
    }
  };

  const isMobile = useIsMobile();
  return (
    <>
      <div className="main-container">
        {/* Traveling Section heading */}
        <div className="traveling-container">
          <div className="traveling-contact">
            <p className="traveling-contact-title">Traveling? Buddy Up!</p>
            {isMobile ? (
              <p className="traveling-contact-description">
                Enabling authentic and personalized travel experiences by
                connecting travellers with passionate local guides in Thailand.
              </p>
            ) : (
              <p className="traveling-contact-description">
                Enabling authentic and personalized travel
                <br /> experiences by connecting travellers with
                <br /> passionate local guides in Thailand.
              </p>
            )}
          </div>
          <form onSubmit={handleSubmit} className="home-form-container">
            <div className="input-field">
              <img src={mailIcon} alt="mail-icon" id="mail-icon" />
              <input
                type="text"
                required
                placeholder=" Your Email"
                id="input-box"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <button
              type="submit"
              className="signup-button"
              id="home-page-signup-button"
            >
              <p className="signup-button-text">SIGN UP FOR UPDATES</p>
              {/* SIGN UP FOR UPDATES */}
            </button>
          </form>
        </div>

        <SlickSlider />

        {/* Travel Section */}
        <TravelSection />

        {/* iphone-image */}
        <PhoneImage />

        {/* home-image-container */}
        <div className="home-image-container">
          <div className="images-container-first">
            <img src={image2} alt="iphone-image" className="first-image" />
            <div className="iphone-text-content">
              <p className="iphone-text">Find your buddy!</p>

              {isMobile ? (
                <h1 className="iphone-heading" style={{ whiteSpace: "nowrap" }}>
                  Explore l
                  <span
                    style={{
                      borderBottom: "3px solid green",
                      borderRadius: "3px",
                    }}
                  >
                    ike a local, wit
                  </span>
                  h a local
                </h1>
              ) : (
                <h1 className="iphone-heading">
                  Explore like a local,
                  <br />{" "}
                  <span
                    style={{
                      borderBottom: "3px solid green",
                      borderRadius: "3px",
                    }}
                  >
                    with
                  </span>{" "}
                  a local
                </h1>
              )}

              {isMobile ? (
                <p className="iphone-description">
                  Buddy App enables you to experience new live expert guidance,
                  conveniently in your pocket.
                </p>
              ) : (
                <p className="iphone-description">
                  Buddy App enables you to experience new places with
                  <br /> live expert guidance, conveniently in your pocket.
                </p>
              )}
            </div>
          </div>

          <div className="images-container-second">
            <div className="iphone-new-text-content">
              <p className="iphone-new-text">Make new connections!</p>

              {isMobile ? (
                <h1 className="iphone-heading">
                  You've a
                  <span
                    style={{
                      borderBottom: "2px solid green",
                      borderRadius: "3px",
                    }}
                  >
                    got a friend, a
                  </span>
                  nywhere
                </h1>
              ) : (
                <h1 className="iphone-heading">
                  You've got a friend,
                  <br />{" "}
                  <span
                    style={{
                      borderBottom: "3px solid green",
                      borderRadius: "3px",
                    }}
                  >
                    anyw
                  </span>
                  here
                </h1>
              )}

              {isMobile ? (
                <p className="iphone-new-description">
                  Buddy App connects you with a guide who shares your interests,
                  speaks your language, and is is eager to show you the world
                  from their perspective.
                </p>
              ) : (
                <p className="iphone-new-description">
                  Buddy App connects you with a guide who shares your
                  <br /> interests, speaks your language, and is eager to show
                  you
                  <br /> the world from their perspective.
                </p>
              )}
            </div>
            <img
              src={image3}
              alt="iphone-pro-max-image"
              className="second-image"
            />
          </div>
        </div>

        {/* Robot Section */}
        <RobotSection />

        {/* Emergency Section */}
        <EmergencySection />

        {/* Card Section */}
        <div className="card">
          <div className="card-shadow">
            <div className="card-content">
              <img src={bellIcon} alt="bell-icon" className="bell-icon" />
              <div className="tourist-card-details">
                <div className="tourist-card-title">
                  <h2>Tourist Police</h2>
                </div>
                <div className="tourist-card-description">
                  <p>
                    The Office of the Tourist Police's mission is to increase
                    the confidence of tourists in their safety. They are
                    available 24/7 to assist foreign travelers with legal and
                    safety issues.
                  </p>
                </div>
              </div>
            </div>
            <div className="vertical-line"></div>
            <div className="card-content">
              <img
                src={ambulanceIcon}
                alt="ambulance-icon"
                className="ambulance-icon"
              />
              <div className="ambulance-card-details">
                <div className="ambulance-card-title">
                  <h2>Hospitals</h2>
                </div>
                <div className="ambulance-card-description">
                  <p>
                    Whether it's for a medical emergency or a check-up, the
                    contact information for the top local hospitals will be at
                    your fingertips.
                  </p>
                </div>
              </div>
            </div>
            <div className="vertical-line"></div>
            <div className="card-content">
              <img
                src={governmentIcon}
                alt="government-icon"
                className="government-icon"
              />
              <div className="government-card-details">
                <div className="government-card-title">
                  <h2>Embassies</h2>
                </div>
                <div className="government-card-description">
                  <p>
                    In case of emergencies such as accidents, illness, or
                    natural disasters, your embassy can provide assistance. They
                    also can provide legal support, assist with lost documents,
                    and provide travel advisories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section  */}
        <Video />

        {/* Store Icons */}
        <StoreIcon />
      </div>
    </>
  );
};

export default Home;
