import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
        <h1>Welcome to SFPOPOS</h1>
            <p> Trying to find a place to study? Take your lunch? Or just spend time outside? Well look no further. Explore San Fransicos Privately Owned Public Spaces</p>
            <p>Look through our most popular spaces, or naivgate to the list button at the top of the page to see the pletera of our spaces</p>
        <h1>Most Popular Open Spaces</h1>
    <div className="carousel">
      <div className="carousel-inner">
        <div className="carousel-item">
          <img src={process.env.PUBLIC_URL + '/images/50-california-st.jpg'} alt="50 California St" />
          <div className="carousel-caption">
            <h3>50 California St</h3>
          </div>
        </div>
        <div className="carousel-item">
          <img src={process.env.PUBLIC_URL + '/images/100-pine.jpg'} alt="100 Pine St" />
          <div className="carousel-caption">
            <h3>100 Pine St</h3>
          </div>
        </div>
        <div className="carousel-item">
          <img src={process.env.PUBLIC_URL + '/images/101-california.jpg'} alt="101 California St" />
          <div className="carousel-caption">
            <h3>101 California St</h3>
          </div>
        </div>
      </div>
    </div>
    <div className='container'>
            <div className='amenities'>
                <h1>Some Amenities Included </h1>
                <ul className='items'>
                <li>
                🌲 - Enjoy fresh air and chirping birds
                </li>
                <li>
                    ☕️ - Get a cup of coffee to stay engerized
                </li>
                <li>
                    🖼 - Unwind and ponder at the sight of art pieces
                </li>
                <li>
                    🚽 - Don't be worried on your journey
                </li>
                <li>
                    🔌 - Charge you phones to take pictures, or your laptops to do work 
                </li>
                </ul>
            
            </div>
            <div className='newsletter'>
                <h1>Want to Learn More?</h1>
                <p>Sign up for our newsletter here</p>
                <Link to="/newsletter" className="newsletter-button">
                    Newsletter
                </Link>
            </div>
        </div>
    </div>
  );
}

export default Home;
