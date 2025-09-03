import { useEffect } from "react"
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import productDetails from "../data/ProductsData";
import miniBoxImg from '../assets/minibox.jpg';
import fullBoxImg from '../assets/fullbox.jpg';

import "./Plans.css";

const Plans = () => {
  const plans = ["weeklyPlan", "monthlyPlan"];

  useEffect(() => {
    document.title = "Plans | Aarogya Kadapa"
  }, [])

  return (
    <div className="plans-container">
      <h1 className="plans-title">Our Plans</h1>

      <div className="our-services">
        <div className="service-card">
          <Link to="/products/mini">
            <img src={miniBoxImg} alt="Mini Box" />
          </Link>
          <p className="price">₹60</p>
          <Link to="/products/mini">
            <button>Order Now</button>
          </Link>
        </div>

        <div className="service-card">
          <Link to="/products/full">
            <img src={fullBoxImg} alt="Full Box" />
          </Link>
          <p className="price">₹80</p>
          <Link to="/products/full">
            <button>Order Now</button>
          </Link>
        </div> 
      </div>

      <div className="plans-list">
        {plans.map((planKey) => {
          const plan = productDetails[planKey];
          return (
            <div key={planKey} className="plan-card">
              <div className="plan-details">
                <h2>{plan.name}</h2>
                <img src={plan.img} alt={plan.name} className="plan-image" />
                <h5 className="plan-note">
                  Note: <span>Sunday is Holiday</span>
                </h5>
                <p className="plan-price">₹{plan.price}</p>
              </div>

              <div className="fruit-list">
                <h4 className="ingredients-title">Ingredients</h4>
                {plan.fruits.map((fruit, index) => (
                  <div className="fruit-item" key={index}>
                    <img src={fruit.img} alt={fruit.name} />
                    <span>{fruit.name}</span>
                  </div>
                ))}
                <p>{plan.description}</p>

                <div className="product-actions">
                  <a href="tel:+919581452787" className="order-btn">
                    Place Order
                  </a>
                  <a href="tel:+919581452787" className="call-btn">
                    <FaPhone /> Call Now
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
