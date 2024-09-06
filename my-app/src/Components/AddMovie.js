import React, { useState } from 'react';
import '../AddMovie.css';
const AddMovie = ({ addMovie }) => {
    const [inputs, setInputs] = useState({
        Title: '',
        Description: '',
        imageURL: '',
        Rating: ''
    });

    const handleInputs = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div class="form-container">
        <h3>Add Movie </h3>
        <div class="form-group">
        <label style={{ color: 'green' }}>Title:</label>

           <input type="text" placeholder="Title" name="Title" onChange={handleInputs} />
        </div>
        <div class="form-group">
            <label style={{ color: 'green' }}>Description:</label>
            <input type="text" placeholder="Description" name="Description" onChange={handleInputs} />
        </div>
        <div class="form-group">
            <label style={{ color: 'green' }}>Image URL:</label>
            <input type="text" placeholder="Image URL" name="imageURL" onChange={handleInputs} />
        </div>
        <div class="form-group">
            <label style={{ color: 'green' }}>Rating:</label>
            <input type="text" placeholder="Rating" name="Rating" onChange={handleInputs} />
        </div>
        <button onClick={() => addMovie(inputs)}>Submit</button>
    </div>
    
    );
};

export default AddMovie;
