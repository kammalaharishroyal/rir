function OrderComponent ({ image, price, quantity, productId, productName }) {
    return (
      <div className="order">
        <img src={image} alt={`Product ${productName}`} />
        <p>Product ID: {productId}</p>
        <p>Product Name: {productName}</p>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
      </div>
    );
  };
  
  export default OrderComponent;