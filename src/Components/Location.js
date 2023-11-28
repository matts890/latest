import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Location.css';
import '../Searchbar.css';

const MAPBOX_API_KEY = 'YOUR_MAPBOX_API_KEY'; // Replace with your Mapbox API key

export default function Location() {
  const [showLocationInput, setShowLocationInput] = useState(false);
  const [locationValue, setLocationValue] = useState('');
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const locationInputRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (locationInputRef.current && !locationInputRef.current.contains(e.target)) {
        setShowLocationInput(false);
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  const handleButtonClick = () => {
    setShowLocationInput(!showLocationInput);
    if (showLocationInput) {
      setLocationSuggestions([]);
    }
  };

  const handleLocationInputChange = async (e) => {
    const inputValue = e.target.value;
    setLocationValue(inputValue);

    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${inputValue}.json?access_token=${MAPBOX_API_KEY}`
      );

      const suggestions = response.data.features.map((feature) => feature.place_name);
      setLocationSuggestions(suggestions);
    } catch (error) {
      console.error('Error fetching location suggestions:', error.message);
    }
  };

  const handleDoneButtonClick = () => {
    // Add any functionality you need when the "Done" button is clicked
    setShowLocationInput(false);
    // Additional logic or state updates can be added here
  };

  return (
    <div className="location-container">
      <button className="s_but loc" onClick={handleButtonClick}>
        Location
      </button>
      {showLocationInput && (
        <div className="location-input-box" ref={locationInputRef}>
          <h2 className='h'>Delivery Information</h2>
          <input
            type="text"
            value={locationValue}
            onChange={handleLocationInputChange}  //location input
            placeholder="Enter location..."
            className="location-input"
          />
          {locationSuggestions.length > 0 && (
            <ul className="location-suggestions">
              {locationSuggestions.map((suggestion, index) => (
                <li key={index} onClick={() => setLocationValue(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
          <button className="location-done-button" onClick={handleDoneButtonClick}>
            Done
          </button>
        </div>
      )}
    </div>
  );
}
