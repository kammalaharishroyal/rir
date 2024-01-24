import React, { useState, useEffect } from 'react';
import img from "../Images/pizza.jpeg";
import CartComponent from './CartComponent';
function Cart()  {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/addcart/'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once, similar to componentDidMount

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Render your component with the fetched data
  return (
    <div>
      <h1 >Cart</h1>
      {
        data.map(x=>
            <CartComponent key={x.cartId}  image={img} price={x.price} quantity={0}  productId={x.pid} productName={x.name}/>
        )
      }
     
    </div>
  );
};

export default Cart;
