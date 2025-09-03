import React from "react";
import { useParams } from "react-router-dom";
import productDetails from "../data/ProductsData";
import "./Products.css";

import { FaInstagram, FaYoutube, FaWhatsapp, FaPhone } from "react-icons/fa";

const Products = () => {
  const { productId } = useParams();
  const product = productDetails[productId];

  return (
    <div className="product-container">
      <h1>{product.name}</h1>
      <img src={product.img} alt="img" className="product-img" />
      <p>{product.description}</p>
      <h3>₹{product.price}</h3>

      <div className="social-icons">
        <a
          href="https://www.instagram.com/aarogya_kadapa?igsh=NWlqZWlpajJlY2Fl"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-card instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://youtube.com/@aarogyakadapa?si=xe7rGbmBKu-u3lYe"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-card youtube"
        >
          <FaYoutube />
        </a>

        <a
          href="https://wa.me/919581452787"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-card whatsapp"
        >
          <FaWhatsapp />
        </a>

        <a href="tel:+919581452787" className="icon-card call">
          <FaPhone />
        </a>
      </div>

      <div className="product-actions">
         <a href="tel:+919581452787" className="order-btn">
           Place Order
         </a>
        <a href="tel:+919581452787" className="call-btn">
          <FaPhone /> Call Now
        </a>
      </div>
    </div>
  );
};

export default Products;  