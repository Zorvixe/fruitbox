import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/fruitbox_logo.png';
import './Navbar.css';

const Navbar = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Determine if a link is active based on current path
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="nav-container">
      <div className="nav-inner">
        
        <div className="site-name">
          <Link to="/" className="logo-link">
            <img src={logoImg} alt="logo" />
          </Link>
           <h1 className='mt-2'>Fruit Box</h1>
        </div>

        <div className={`menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {/* Logo inside the mobile menu */}
          <div className="mobile-menu-logo">
            <img src={logoImg} alt="Fruit Box Logo" />
            <h2>Fruit Box</h2>
          </div>
          
          <ul className="list-items">
            <li>
              <Link 
                to="/" 
                className={isActive('/') ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={isActive('/about') ? 'active' : ''}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/products/mini" 
                className={isActive('/products') ? 'active' : ''}
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                to="/plans" 
                className={isActive('/plans') ? 'active' : ''}
              >
                Plans
              </Link>
            </li>
          </ul>
        </div>

        {/* Overlay for when menu is open on mobile */}
        {menuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
      </div>
    </nav>
  );
};

export default Navbar;