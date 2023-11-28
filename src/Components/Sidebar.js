// Sidebar.js

import "./Sidebar.css";
import React, { useState } from 'react';

const Sidebar = ({ handleSort }) => {
  const [sortOption, setSortOption] = useState('');

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSortOption(value);
    handleSort(value);
  };

  return (
    <aside className="sidebar">
      <h2>Sort By</h2>
      
      <div>
        <label>
          <input
            type="radio"
            value="rating"
            checked={sortOption === 'rating'}
            onChange={handleRadioChange}
          />
          Rating
        </label>
      </div>

      <div>
        <label>
          <input
        
            type="radio"
            value="asc"
            checked={sortOption === 'asc'}
            onChange={handleRadioChange}
          />
          Price
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="discounts"
            checked={sortOption === 'discounts'}
            onChange={handleRadioChange}
          />
          Discounts Only
        </label>
      </div>
      
      <h2>Type</h2>
      <div>
        <label>
          <input
            type="radio"
            value="vegetarian"
            checked={sortOption === 'vegetarian'}
            onChange={handleRadioChange}
          />
          Vegetarian
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="nonvegetarian"
            checked={sortOption === 'nonvegetarian'}
            onChange={handleRadioChange}
          />
          Non-Vegetarian
        </label>
      </div>
      
    </aside>
  );
};

export default Sidebar;
