import React from 'react'
import '../Filter.css' ;
import { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Filter = ({ setKeyWords })=> {
  

const handleInputs = (e) => {
  setKeyWords(e.target.value);
};
 
  return (
    <div className='container '>
        
        <h3>Search by Title/Rating  </h3>
        <input type="text" placeholder="Title"  onChange={handleInputs} /> <br />
   
    </div>
  )
}

export default Filter ; 
