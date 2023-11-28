import React from 'react';
import Typography from '@mui/material/Typography';
import "./About.css";

const backgroundImageSrc = process.env.PUBLIC_URL + '/Background2.png';

export default function About() {
  const containerStyle = {
    backgroundImage: `url(${backgroundImageSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Adjust as needed
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const titleStyle = {
    fontFamily: 'Your Font Family',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: 'black',
  };

  const paragraphStyle = {
    fontFamily: 'Your Font Family',
    marginBottom: '16px',
    color: 'black',
  };

  return (
    <div className='about' style={containerStyle}>
      <Typography variant="h1" style={titleStyle}>
        Welcome to HomeMadelivery
      </Typography>

      <Typography variant="body1" style={paragraphStyle}>
        At HomeMadelivery, we believe that good food is not just a meal; it's an experience crafted with care, passion, and a touch of home. We are not just a food delivery service – we are a community of talented home chefs dedicated to bringing the warmth and authenticity of homemade goodness to your doorstep.
      </Typography>

      <Typography variant="h5" style={titleStyle}>
        Our Story
      </Typography>
      <Typography variant="body1" style={paragraphStyle}>
        Inspired by the love and flavors found in every home kitchen, HomeMadelivery was born out of a desire to connect people through the joy of homemade meals. Our mission is simple: to redefine food delivery by putting the heart back into each dish.
      </Typography>

      <Typography variant="h5" style={titleStyle}>
        Handcrafted with Love
      </Typography>
      <Typography variant="body1" style={paragraphStyle}>
        Unlike traditional food delivery services, we're not a hub for mass-produced meals. Our platform is a celebration of the culinary talents hidden within the homes of your neighbors. Our home chefs pour their love and expertise into every dish, creating a diverse menu of healthy, homemade options just for you.
      </Typography>

      <Typography variant="h5" style={titleStyle}>
        Healthy, Wholesome, Homemade
      </Typography>
      <Typography variant="body1" style={paragraphStyle}>
        We know that good health begins with the food we eat. That's why HomeMadelivery is committed to delivering not just delicious meals but also wholesome, nutritious goodness. From fresh ingredients to mindful cooking, our home chefs prioritize your well-being without compromising on flavor.
      </Typography>

      <Typography variant="h5" style={titleStyle}>
        Supporting Local Communities
      </Typography>
      <Typography variant="body1" style={paragraphStyle}>
        By choosing HomeMadelivery, you're not just enjoying a delightful meal – you're supporting local communities. Our platform empowers home chefs to share their culinary talents, creating a vibrant network of food enthusiasts right in your neighborhood.
      </Typography>

      <Typography variant="h5" style={titleStyle}>
        How It Works
      </Typography>
    
      <Typography variant="body1" style={paragraphStyle}>
        <strong>Explore:</strong> Select your favorite dishes and place your order with a few clicks. You can customize your meal based on dietary preferences or special requests.</Typography>

      <Typography variant="body1" style={paragraphStyle}>
        <strong>Order:</strong> Browse through our diverse menu featuring a variety of homemade dishes crafted by talented home chefs in your area.
      </Typography>

      <Typography variant="body1" style={paragraphStyle}>
        <strong>Explore:</strong> Sit back and relax as we deliver your homemade feast straight to your doorstep. Our delivery is fast, reliable, and comes with a personal touch.</Typography>

      <Typography variant="body1" style={paragraphStyle}>
        <strong>Delivery:</strong> Browse through our diverse menu featuring a variety of homemade dishes crafted by talented home chefs in your area.
      </Typography>

      <Typography variant="body1" style={paragraphStyle}>
        <strong>Enjoy:</strong> Unbox the goodness and savor every bite. Our promise is a dining experience that feels like home, no matter where you are.</Typography>

      <Typography variant="body1" style={paragraphStyle}>
        Thank you for choosing HomeMadelivery. Join us on this culinary journey, and let's bring the joy of homemade food to your table.
      </Typography>

      <Typography variant="body1" style={paragraphStyle}>
        <strong>Bon appétit!</strong>
      </Typography>

      <Typography variant="body1" style={paragraphStyle}>
        HomeMadelivery
      </Typography>
    </div>
  );
}
