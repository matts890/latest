import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Indulge in a world of culinary delights 
        </p>
        <p className='footer-subscription-text'>
        Your direct ticket to savoring special promotions and updates on our delectable food delivery service.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>FAQ</h2>
            <Link to='/'>Help Center</Link>
            <Link to='/'>Common Queries</Link>
            <Link to='/'>Customer Support</Link>
            <Link to='/'>Answers Hub</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
        <div className="social-icons">
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          </div>
          <br></br>
          <p>&copy; 2023 Homemadeliver. All rights reserved.</p>

        
          </div>
        
      </section>
    </div>
  );
}

export default Footer;
  
  
