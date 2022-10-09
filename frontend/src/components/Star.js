import React from "react";
import "./Star.css";

const Star = ({ value }) => {
  return (
    <span className="star">
      <i
        className={
          value >= 1
            ? "fa-solid fa-star"
            : value >= 0.5
            ? "fa-solid fa-star-half-stroke"
            : "fa-regular fa-star"
        }
      ></i>
    </span>
  );
};

export default Star;
