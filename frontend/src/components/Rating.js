import React from "react";
import Star from "./Star";

const Rating = ({ value, text }) => {
  return (
    <React.Fragment>
      <div className="rating">
        <Star value={value} />
        <Star value={value - 1} />
        <Star value={value - 2} />
        <Star value={value - 3} />
        <Star value={value - 4} />
      </div>
      <span>{text && text}</span>
    </React.Fragment>
  );
};

export default Rating;
