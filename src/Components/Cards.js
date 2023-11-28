import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore our diverse range of food categories.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='maindish.jpg'
              text='In the world of food, the main dish stands out, bringing together diverse flavors and ingredients across different categories.'
              label='Main Dish'
              path='/shop'
            />
            <CardItem
              src='pasta.jpg'
              text='Delight in the classic simplicity of al dente spaghetti, paired with a flavorful marinara sauce for a timeless pasta experience.'
              label='Pasta'
              path='/shop'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='soup.jpg'
              text='Savor the comforting warmth of a hearty bowl of homemade chicken noodle soup, brimming with tender vegetables and rich broth.'
              label='Soup'
              path='/shop'
            />
            <CardItem
              src='rice.jpg'
              text='Enjoy a delicious serving of fluffy white rice as the perfect accompaniment to your favorite dishes.'
              label='Rice'
              path='/shop'
            />
            <CardItem
              src='salad.jpg'
              text='Indulge in a crisp and refreshing garden salad, featuring vibrant greens, juicy tomatoes, and a zesty vinaigrette dressing.'
              label='Salad'
              path='/shop'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;