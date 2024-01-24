import pizza from '../Images/pizza.jpeg'
import React, { useEffect, useState } from 'react';
import "../components.css/homebody.css";



function HomeBody () {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/menu/'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
        console.log("menu",result)
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
  console.log("data",data);

    
  

   
  
  function handleSubmit (item) {
    console.log("item",item)
    fetch('http://localhost:8080/addcart/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      })
        .then(response => response.json())
        .then(x=>console.log("x is response",x.cartId))
       
    };
  const addToCart=(item)=>{
    setCart([...cart,item])
    handleSubmit(item)
    console.log("item")
    
    
  }
  
  console.log("cart",cart);
  function buyNow (item) {
    console.log("item:",item);
    
    fetch('http://localhost:8080/orders/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      })
        .then(response => response.json())
      
    };
 

  return (
    <div className="food-delivery-container">
      {data.map((item) => (
        <div key={item.pid} className="food-item">
          <img src={pizza} alt={item.name} className="food-image" />
          <div className="food-details">
            <h3><u>{item.name}</u></h3>
            <p>Rs.{item.price}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
            <button className="buy-now-btn" onClick={()=>buyNow(item)}>Buy Now</button>
          </div>
        </div>
      ))}
      <br/>
      
     
    </div>
  );
};

export default HomeBody;
