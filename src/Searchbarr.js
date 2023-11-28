import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../src/Searchbar.css';
import InputAdornment from '@mui/material/InputAdornment';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbarr() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (query.trim() !== '') {
        try {
          const response = await axios.get(`https://api.example.com/search?query=${query}`);
          setResults(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        setResults([]); // Clear results if the query is empty
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="bar">
      <InputBase
        className="search_bar"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
      <button className="s_but">Search</button>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}
