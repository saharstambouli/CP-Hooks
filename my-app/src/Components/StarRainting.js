// StarRating.js
import React, { useState } from 'react';
import Star from './Star';

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          filled={index < rating}
          onClick={() => setRating(index + 1)}
        />
      ))}
    </div>
  );
};

export default StarRating;
