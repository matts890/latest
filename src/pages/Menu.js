// Menu.js

import React, { useState, useContext } from 'react';
import Searchbarr from '../Searchbarr';
import './Menu.css';
import Location from '../Components/Location';
import { Item } from '../Components/Item';
import Sidebar from '../Components/Sidebar';
import ItemDetail from '../Components/ItemDetail';
import { ShopContext } from "../context/shop-context";

export default function Menu() {
  const [items] = useState([
    { Image: require('../foodimages/Zucchini.jpeg'), title: 'Zucchini', price: 6.99, type: 'nonvegetarian', rating: 4, category: 'soup' },
    { Image: require('../foodimages/Pockmarked.jpeg'), title: 'Title 2', price: 15.99, type: 'nonvegetarian', rating: 3, category: 'salad' },
    { Image: require('../foodimages/chicken.jpeg'), title: 'Title 3', price: 9.99, type: 'vegetarian', rating: 2.5, category: 'maindish' },
    {Image: require('../foodimages/chicken.jpeg'), title: 'Title 3', price: 9.99, type: 'vegetarian', rating: 2.5, category: 'maindish' },
    {Image: require('../foodimages/chicken.jpeg'), title: 'Title 3', price: 9.99, type: 'vegetarian', rating: 2.5, category: 'maindish' },
    {Image: require('../foodimages/soup.jpeg'), title: 'Title 3', price: 9.99, type: 'vegetarian', rating: 2.5, category: 'Rice Dish' },
    // Add more items with different categories
  ]);

  const [sortedItems, setSortedItems] = useState([...items]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const { addToCart} = useContext(ShopContext);
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
              Image={item.Image}
              title={item.title}
              price={`$${item.price.toFixed(2)}`}
              type={item.type}
              rating={item.rating}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>
      </div>

      {selectedItem && (
        <ItemDetail
          item={selectedItem}
          onClose={handleCloseItemDetail}
          onAddToCart={() => {
            addToCart(selectedItem);  // Use addToCart function to add the item to the cart
            handleCloseItemDetail();
          }}
        />
      )}
    </section>
  );
}