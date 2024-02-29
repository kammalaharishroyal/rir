import "../components.css/cartComponent.css";
function OrderComponent ({ image, price, quantity, productId, productName }) {
  
    

    
    return (
      <div className="order">
        <img src={image} alt={`Product ${productName}`} className="image" />
       <div className="details">
        <table>
          <tr>
            <td><strong>Product ID:</strong></td>
            <td>{productId}</td>
          </tr>
          <tr>
            <td><strong>Product Name:</strong></td>
            <td>{productName}</td>
          </tr>
          <tr>
            <td> <strong>Price: $</strong></td>
            <td>{price}</td>
          </tr>
          <tr>
            <td><strong>Quantity:</strong></td>
            <td>{quantity}</td>
          </tr>
          <tr>
            <td><strong>Total</strong></td>
            <td>{price*quantity}</td>
          </tr>
        </table>
       <p>  </p>
        <p>  </p>
        <p></p>
        <p>  </p>
      
       </div>
       
      </div>
    );
  };
  
  export default OrderComponent;