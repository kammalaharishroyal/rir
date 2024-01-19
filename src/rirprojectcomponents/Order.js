// OrdersPage.js

import React, { useState } from 'react';

const Order = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Burger', price: 10.99 },
    { id: 2, name: 'Pizza', price: 12.99 },
    // Add more menu items as needed
  ]);

  const [orderItems, setOrderItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToOrder = (item) => {
    setOrderItems([...orderItems, item]);
    setTotal(total + item.price);
  };

  const placeOrder = () => {
    // Implement logic to send the order to the server (backend)
    // This may involve making an API request
    console.log('Placing order:', orderItems);

    // Reset orderItems and total
    setOrderItems([]);
    setTotal(0);
  };

  return (
    <div>
      <h1>Restaurant Orders</h1>

      <div id="menu">
        {/* Display menu items with prices */}
        {menuItems.map(item => (
          <div key={item.id} className="menu-item" onClick={() => addToOrder(item)}>
            {item.name} - ${item.price.toFixed(2)}
          </div>
        ))}
      </div>

      <div id="order-list">
        <h2>Your Order</h2>
        <ul>
          {/* Display ordered items here */}
          {orderItems.map(item => (
            <li key={item.id}>{item.name} - ${item.price.toFixed(2)}</li>
          ))}
        </ul>
        <p>Total: ${total.toFixed(2)}</p>
        <button onClick={placeOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default Order;
