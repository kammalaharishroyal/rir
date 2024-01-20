import pizza from '../Images/pizza.jpeg'
import React, { useState } from 'react';
import "../components.css/homebody.css";

function HomeBody () {
    const [cart, setCart] = useState([]);
  const menuItems = [
    {
      id: 1,
      name: 'Pizza',
      price: '$10.99',
      imageUrl: {pizza}, // Replace with the actual image URL or import the image
    },
    {
      id: 2,
      name: 'Burger',
      price: '$8.99',
      imageUrl: 'burger.jpg', // Replace with the actual image URL or import the image
    },
    {
        id: 3,
        name: 'Burger',
        price: '$8.99',
        imageUrl: 'burger.jpg', // Replace with the actual image URL or import the image
      },{
        id: 2,
        name: 'Burger',
        price: '$8.99',
        imageUrl: 'burger.jpg', // Replace with the actual image URL or import the image
      }
      ,{
      id: 2,
      name: 'Burger',
      price: '$8.99',
      imageUrl: 'burger.jpg', // Replace with the actual image URL or import the image
    }
    // Add more menu items as needed
  ];
  const addToCart=(item)=>{
    setCart([...cart,item])


  }

  return (
    <div className="food-delivery-container">
      {menuItems.map((item) => (
        <div key={item.id} className="food-item">
          <img src={pizza} alt={item.name} className="food-image" />
          <div className="food-details">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
            <button className="buy-now-btn">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeBody;