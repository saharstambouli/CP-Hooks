import ReactStars from  "react-star-rating-component";
import React from "react";

const Rating = ({ value, onChange }) => {
  return (
    <ReactStars
      count={5}
      value={value}
      onChange={onChange}
      size={24}
      activeColor="#ffd700"
    />
  );
};

export default Rating;
