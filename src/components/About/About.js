import React from 'react'
import './About.css'
import aboutImg from '../../assets/about.jpg'
const About = () => {
  return (
    <div className='about-container'>
      <img src = {aboutImg} alt = "aboutImage"/>
      <p>FruitBox brings you the freshest, handpicked fruits directly from trusted farms to your doorstep. We offer seasonal varieties, curated combo packs, and exclusive discounts to make healthy living affordable and enjoyable. With easy online ordering and reliable home delivery, FruitBox ensures that every family has access to nutritious and delicious fruits, every single day.</p>
      
    </div>
  )
}

export default About
