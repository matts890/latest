import React, { useState } from 'react';
import { PRODUCTS } from "../../products";
import Searchbarr from '../../Searchbarr';
import '../Menu.css';
import Location from '../../Components/Location';
import "./shop.css";
import Sidebar from '../../Components/Sidebar';
import { Item } from '../../Components/Item';
import { Product } from "./product";

export const Shop = () => {
  const [items] = useState(PRODUCTS)
  const [sortedItems, setSortedItems] = useState([...items]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleSort = (option) => {
    switch (option) {
      case 'asc':
        setSortedItems([...items].sort((a, b) => a.price - b.price));
        break;
      case 'desc':
        setSortedItems([...items].sort((a, b) => b.price - a.price));
        break;
      case 'vegetarian':
        setSortedItems([...items].filter((item) => item.type === 'vegetarian'));
        break;
      case 'nonvegetarian':
        setSortedItems([...items].filter((item) => item.type === 'nonvegetarian'));
        break;
      case 'rating':
        setSortedItems([...items].sort((a, b) => b.rating - a.rating));
        break;
      default:
        break;
    }
  };
  const handleCategoryChange = (category) => {
    if (category === 'all') {
      setSortedItems([...items]);
    } else {
      setSortedItems([...items].filter((item) => item.category === category));
    }
    setSelectedCategory(category);
  };
  
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseItemDetail = () => {
    setSelectedItem(null);
  };

  return (
    <section>
      <section className='sect container_bar'>
        <Location />
        <Searchbarr />
      </section>

      <div className='offer_box'>
        <div className='offer'>
          <p className='offer-text'>Special Offer: Buy 2, Get 1 Free!</p>
        </div>
        <div className='offer'>
          <p className='offer-text'>Special Offer: Potato stew with salad for $11.99 only</p>
        </div>
      </div>

      {/* Category dropdown */}
      <div className='category-dropdown'>
        <label htmlFor='category'>Select Category:</label>
        <select
          id='category'
          onChange={(e) => handleCategoryChange(e.target.value)}
          value={selectedCategory || 'all'}
        >
          <option value='all'>All Categories</option>
          <option value='soup'>Soup</option>
          <option value='salad'>Salad</option>
          <option value='maindish'>Main Dish</option>
          <option value='Rice Dish'>Rice Dish</option>
          <option value='Pasta'>Pasta</option>
          {/* Add more categories as needed */}
        </select>
      </div>

      <div className='menu-container'>
        <Sidebar handleSort={handleSort} />
        <div className='items'>
          {sortedItems.map((item, index) => (
            <Item
              key={index}
              Image={item.productImage}
              title={item.productName}
              price={`$${item.price.toFixed(2)}`}
              type={item.type}
              rating={item.rating}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>
      </div>

      {selectedItem && (
        <Product data={selectedItem} onClose={handleCloseItemDetail} />
      )}
    </section>
  );
};
