// Item.js
import React from 'react';
export const Item = ({ Image, title, price, type, rating, onClick ,category}) => {
  return (
    <div className="Item" onClick={onClick}>
      {Image && <img src={Image} alt="Food" className="im" height={200} width={220} />}
      <div>
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
};
