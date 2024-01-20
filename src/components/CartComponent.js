import "../components.css/cartComponent.css";
function CartComponent ({ image, price, quantity, productId, productName }) {
    return (
      <div className="order">
        <img src={image} alt={`Product ${productName}`} className="image" />
       <div className="details">
       <p> <strong>Product ID:</strong> {productId}</p>
        <p> <strong>Product Name:</strong> {productName}</p>
        <p> <strong>Price: $</strong>{price}</p>
        <p> <strong>Quantity:</strong> {quantity}</p>
       </div>
      </div>
    );
  };
  
  export default CartComponent;