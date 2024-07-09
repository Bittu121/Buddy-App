import React from "react";
import "./Items.css";
import { GoPlusCircle } from "react-icons/go";
import { FiMinusCircle } from "react-icons/fi";
const Items = ({ title, content, isOpen, onClick }) => {
  return (
    <>
      <div className="accordion-item">
        <button className="accordion" onClick={onClick}>
          {title}
          <span className="icon">
            {isOpen ? (
              <FiMinusCircle className="button-color" />
            ) : (
              <GoPlusCircle className="button-color" />
            )}
          </span>
        </button>
        {isOpen && (
          <div className="panel">
            <p>{content}</p>
          </div>
        )}
        <hr className="divider" />
      </div>
    </>
  );
};

export default Items;
