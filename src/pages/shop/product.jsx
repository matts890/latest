import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props,item) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState('medium');
  const cartItemCount = cartItems[id];
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setSelectedQuantity(parseInt(event.target.value, 10));
  };

  return (
    <div className="item-detail-overlay">
      <div className="item-detail-content">
        <div className="item-detail-image">
          <img src={productImage} alt={productName} />
        </div>
        <div className="item-detail-info">
          <h2>{productName}</h2>
          <p>${price}</p>
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
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
              Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
            <button className="closeBttn" onClick={props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
