import React, { useState } from "react";
import Items from "./Items";
import "./Accordian.css";
import accordionData from "../../data.json";
const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="accordian-heading-container">
        <h1>Frequently asked questions</h1>
        <p className="accordian-container-description">
          Everything you need to know about the product and billing.
        </p>
        <div className="accordion-container">
          {accordionData.map((item, index) => (
            <Items
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordian;
