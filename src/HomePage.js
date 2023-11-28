import React from 'react';

const HomePage = ({ goToSecondPage }) => {
  return (
    <div>
      <p>Welcome to the Home Page!</p>
      <button onClick={goToSecondPage}>Go to Second Page</button>
    </div>
  );
};

export default HomePage;
