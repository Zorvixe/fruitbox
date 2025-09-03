import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaYoutube, FaWhatsapp, FaPhone } from 'react-icons/fa'
import bananaImg from "../assets/banana.jpeg";
import orangeImg from "../assets/orange.jpeg";
import grapesImg from "../assets/grapes.jpeg";
import papayaImg from "../assets/papaya.jpeg";
import logoImg from '../assets/logoimg.png';  
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section-about">
           <h2 className="footer-logo">
               <img src={logoImg} alt="FruitBox Logo" className="arogya-logo" />
              FruitBox
              </h2>
          <p>
            Fresh, organic, and hand-picked fruits delivered straight to your doorstep. 
            Stay healthy and enjoy nature’s sweetness every day with FruitBox!
          </p>

          <div className="social-iconss">
                      <a
              href="https://www.instagram.com/aarogya_kadapa?igsh=NWlqZWlpajJlY2Fl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@aarogyakadapa?si=xe7rGbmBKu-u3lYe" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://wa.me/919581452787" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="tel:+919581452787">
              <FaPhone />
            </a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products/mini">Products</Link></li>
            <li><Link to="/plans">Plans</Link></li>
          </ul>
        </div>
 
        <div className="footer-section fruits">
          <h2>Our Fruits</h2>
          <ul className="fruit-list">
            <li><img src= {grapesImg} alt="Grapes" /> Grapes</li>
            <li><img src={orangeImg} alt="Orange" /> Orange</li>
            <li><img src= {papayaImg} alt="Papaya" /> Papaya</li>
            <li><img src= {bananaImg} alt="Banana" /> Banana</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FruitBox. All Rights Reserved. Designed, Developed & Maintained by Zorvixe Technologies</p>
      </div>
    </footer>
  )
}

export default Footer
