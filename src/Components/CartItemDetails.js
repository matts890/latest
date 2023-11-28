// CartItemDetail.js
import React from 'react';

const CartItemDetail = ({ item }) => {
  return (
    <div className="cart-item-detail">
      <div className="cart-item-detail-image">
        <img src={item.Image} alt={item.title} />
      </div>
      <div className="cart-item-detail-info">
        <h2>{item.title}</h2>
        <p>${item.price.toFixed(2)}</p>
        <p>Size: {item.size}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItemDetail;

