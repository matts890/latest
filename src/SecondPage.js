import React from 'react';

const SecondPage = ({ goBack }) => {
  return (
    <div>
      <p>This is the Second Page!</p>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default SecondPage;
