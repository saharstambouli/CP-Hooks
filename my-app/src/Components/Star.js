// Star.js
import React from 'react';

const Star = ({ filled, onClick }) => (
  <span onClick={onClick} style={{ cursor: 'pointer', color: filled ? '#ffc107' : '#e4e5e9' }}>
    ★
  </span>
);

export default Star;
