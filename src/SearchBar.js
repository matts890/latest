import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
     <div class="search">
      <input
        type="text"
        placeholder="Search..."

        value={searchTerm}
        onChange={handleInputChange}
      />
      
      
      </div>
          
    </form>
  );
};

export default SearchBar;
