import miniBoxImg from "../assets/minibox.jpg";
import fullBoxImg from "../assets/fullbox.jpg";
import comboBoxImg from "../assets/combobox.jpg";
import monthlyBoxImg from "../assets/monthly.jpg";

import monthlyJuice from '../assets/monthlyjuice.jpg';
import weeklyJuice from '../assets/weeklyjuice.jpeg'
import appleImg from "../assets/apple.jpeg";
import bananaImg from "../assets/banana.jpeg";
import orangeImg from "../assets/orange.jpeg";
import grapesImg from "../assets/grapes.jpeg";
import mangoImg from "../assets/mango.jpeg";
import papayaImg from "../assets/papaya.jpeg";


const productDetails = {
  mini: { 
    name: "Mini Box", 
    price: 60, 
    img: miniBoxImg, 
    description: "Perfect for single person with fresh seasonal fruits.",
    fruits: [
      { name: "Apple", img: appleImg },
      { name: "Banana", img: bananaImg },
      { name: "Orange", img: orangeImg },
      { name: "Grapes", img: grapesImg },
    ]
  },
  full: { 
    name: "Full Box", 
    price: 80, 
    img: fullBoxImg, 
    description: "Ideal for a small family with more variety.",
    fruits: [
      { name: "Apple", img: appleImg },
      { name: "Banana", img: bananaImg },
      { name: "Orange", img: orangeImg },
      { name: "Mango", img: mangoImg },
      { name: "Papaya", img: papayaImg },
      
    ]
  },
  combo: { 
    name: "Combo Box", 
    price: 100, 
    img: comboBoxImg, 
    description: "Special combo with discounts and mixed fruits.",
    fruits: [
      
      { name: "Mango", img: mangoImg },
      { name: "Grapes", img: grapesImg },
    ]
  },
  monthly: {   
    name: "Monthly Box", 
    price: 120, 
    img: monthlyBoxImg, 
    description: "Monthly subscription with fresh fruits delivered regularly.",
    fruits: [
      { name: "Apple", img: appleImg },
      { name: "Banana", img: bananaImg },
      { name: "Orange", img: orangeImg },
      { name: "Mango", img: mangoImg },
      { name: "Papaya", img: papayaImg },
   
    ]
  },

  weeklyPlan: {
    name: "Weekly Plan",
    img: weeklyJuice,
    description: "Fresh fruit juice will be delivered on Saturday.",
    price: 450,
    fruits: [
      { name: "Apple", img: appleImg },
      { name: "Banana", img: bananaImg }
    ]
  },
  monthlyPlan: {
    name: "Monthly Plan",
    img: monthlyJuice,
    description: "Fresh fruit juice will be delivered on every Saturday.",
    price: 2000,
    fruits: [
      { name: "Orange", img: orangeImg },
      { name: "Grapes", img: grapesImg }
    ]
  },
  
};

export default productDetails;  