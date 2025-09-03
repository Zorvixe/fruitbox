import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from './components/About/About.js'
import Footer from "./components/Footer";
import Plans from "./components/Plans";
import Products from "./components/Products";
import ScrollToTop from "./components/ScrollToTop"; 
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />   
      <div className="app-container">
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:productId" element={<Products />} />
            <Route path="/plans" element={<Plans />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
