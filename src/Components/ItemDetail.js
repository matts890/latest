import React, { useState, useContext } from 'react';
import { ShopContext } from "../context/shop-context";
import "./ItemDetail.css";

const ItemDetail = ({ item, onClose,props }) => {
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setSelectedQuantity(parseInt(event.target.value, 10));
  };



  const handleAddToCart = () => {
    

    // Close the ItemDetail component
    onClose();
  };

  return (
    <div className="item-detail-overlay">
      <div className="item-detail-content">
        <div className="item-detail-image">
          <img src={item.Image} alt={item.title} />
        </div>
        <div className="item-detail-info">
          <h2>{item.title}</h2>
          <p>${item.price.toFixed(2)}</p>
          <div className="item-detail-options">
            <label>
              <input
                type="radio"
                value="medium"
                checked={selectedSize === 'medium'}
                onChange={handleSizeChange}
              />
              Medium
            </label>
            <label>
              <input
                type="radio"
                value="large"
                checked={selectedSize === 'large'}
                onChange={handleSizeChange}
              />
              Large
            </label>
            <select value={selectedQuantity} onChange={handleQuantityChange}>
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="item-detail-buttons">
            <button onClick={handleAddToCart}>
              Add to Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

