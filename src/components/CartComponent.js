import "../components.css/cartComponent.css";
function CartComponent ({ image, price, quantity, productId, productName }) {
  
  const item={
    price:price,
    quantity:quantity,
    name:productName,
    pid:productId
    

  }
  


  
  function buyNow(){
    fetch('http://localhost:8080/orders/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      })
        .then(response => response.json())
   
  }
  function remove(){
    console.log('http://localhost:8080/orders/'+ `${productId}`)
    fetch('http://localhost:8080/addcart/'+ `${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      })
        .then(response => response.json())
        .then(x=>console.log("remove cart op:",x))
    

  }
    return (
      <div className="order">
        <img src={image} alt={`Product ${productName}`} className="image" />
       <div className="details">
       <p> <strong>Product ID:</strong> {productId}</p>
        <p> <strong>Product Name:</strong> {productName}</p>
        <p> <strong>Price: $</strong>{price}</p>
        <p> <strong>Quantity:</strong> {quantity}</p>
        <button onClick={()=>buyNow()}>Buy</button>
        <button onClick={()=>remove()}>remove</button>
       </div>
       
      </div>
    );
  };
  
  export default CartComponent;