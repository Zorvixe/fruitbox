import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import logoImg from '../assets/logoimg.png';
import carousel11 from "../assets/carousel11.jpg";
import carousel from "../assets/carousel.jpg";
import carousel8 from "../assets/carousel8.jpg";

import miniBoxImg from "../assets/minibox.jpg";
import fullBoxImg from "../assets/fullbox.jpg";

import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img src={carousel11}  alt="slide" />

        </Carousel.Item>
        <Carousel.Item>
          <img src={carousel}  alt="slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={carousel8}  alt="slide" />
        </Carousel.Item>
      </Carousel>

  <div className='text-content'>
      <img src={logoImg} alt="logo" className="logo" />
      <h1>Aarogya Kadapa</h1>
      <p>
        FruitBox is a fresh fruit delivery service offering a wide range of seasonal
        fruits, curated combo boxes, and exclusive discounts. Our mission is to provide
        customers with high-quality, nutritious fruits at affordable prices, ensuring
        health and wellness for every household. With convenient online ordering and
        reliable home delivery, FruitBox makes healthy living accessible and effortless.
      </p>

      <div className='our-services'>
        <div className='service-card'>
          <Link to="/products/mini">
            <img src={miniBoxImg} alt="Mini Box" className='image' />
          </Link>
          <p className='price'>₹60</p>
          <Link to="/products/mini">
            <button>Order Now</button>
          </Link>
        </div>
        <div className='service-card'>
          <Link to="/products/full">
            <img src={fullBoxImg} alt="Full Box" />
          </Link>
          <p className='price'>₹80</p>
          <Link to="/products/full">
            <button>Order Now</button>
          </Link>
        </div>
      </div>

      <ul className='services'>
        <li>🚚 Home Delivery - Fresh fruits delivered to your home.</li>
        <li>🥭 Wide Variety - Seasonal fruits, combos, and special offers.</li>
        <li>💳 Easy Ordering - Simple and quick online ordering process.</li>
        <li>🎁 Combo Boxes - Curated fruit boxes with great discounts.</li>
      </ul>
    </div>
    </div>
  )
}

export default Home
