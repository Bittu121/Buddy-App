import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.css";
import smileIcon from "../../assets/images/Frame_14.svg";
import searchIcon from "../../assets/images/searchicon.svg";
import watch from "../../assets/images/watch.svg";

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="slider-container">
      <div className="slider-item first-item">
        <img src={smileIcon} alt="smile-icon" className="icon" />
        <span className="buddy-text">Meet Your Buddy</span>
        <p>
          Connect with a live local who will show you the time of your life -
          from their experiences, to yours.
        </p>
      </div>
      <div className="slider-item second-item">
        <img src={searchIcon} alt="search-icon" className="icon" />
        <span className="smart-search-text">Smart Search</span>
        <p>
          Filter by location, availability, interests, language, rating and more
          - whether you’re going out or staying in, your Buddy will know just
          what to do!
        </p>
      </div>
      <div className="slider-item third-item">
        <img src={watch} alt="watch-image" className="icon" />
        <span className="always-available-text">Always Available</span>
        <p>
          Our ThAI Buddy is trained to give you the best travel experience,
          available 24/7 and is conveniently, located next to its human
          counterparts
        </p>
      </div>
    </Slider>
  );
}

export default AutoPlay;
