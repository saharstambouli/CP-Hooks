import React from 'react'
import { useState } from 'react';

import '../Filter.css' ;

const Filter = ({ handleSearch }) => {
    const [inputs, setInputs] = useState({
        Title: '',
        Rating: ''
    });


    const handleInputs = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };
  return (
    <div className='container '>
        
        <h3>Search by Title/Rating  </h3>
        <input type="text" placeholder="Title" name="Title"  onChange={handleInputs} /> <br />
        <input type="text" placeholder="Rating" name="Rating"  onChange={handleInputs} /> <br />
        <button onClick={() => handleSearch(inputs)}>Filtrer </button>

   
    </div>
  )
}

export default Filter ; 
