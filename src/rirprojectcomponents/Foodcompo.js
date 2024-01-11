import React from 'react';

const FoodItem = ({ name, price, imageUrl }) => {
  const addToCart = () => {
    // Add logic for adding item to the cart
    console.log(`Added ${name} to the cart!`);
  };

  const buyNow = () => {
    // Add logic for buying the item
    console.log(`Bought ${name} now!`);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={imageUrl} alt={name} style={{ maxWidth: '100%', maxHeight: '200px' }} />
      <div style={{ marginTop: '10px' }}>
        <p>Price: ${price}</p>
        <button onClick={addToCart} style={{ marginRight: '10px' }}>
          Add to Cart
        </button>
        <button onClick={buyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default FoodItem;
