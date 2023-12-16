import { Link } from 'react-router-dom';
import './orde.css';
function Order(){
    function handleQuantity(event){
        console.log(event.value)
    }
    return(
        <div>
             <Link to={'/'}><button>Home</button></Link> 


    <main className="order-main">
        <h2>Place Your Order</h2>
       
        <form action="#" method="post">
            <label for="food-item">Select Food Item:</label>
            <select id="food-item" name="food-item" required>
                <option value="burger">Biryani</option>
             
               
            </select>

            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" onChange={handleQuantity} name="quantity" min="1" required/>

            <label for="delivery-address">Delivery Address:</label>
            <input type="text" id="delivery-address"  name="delivery-address" required/>
            <input type="text"   />
            <div class="upload-section">
                <label for="payment-screenshot">Upload Payment Screenshot:</label>
                <input type="file" id="payment-screenshot" name="payment-screenshot" accept="image/*"/>
            </div>
            <button type="submit">Place Order</button>

            <p class="offer-info">Special Offer: Buy 1 Get 1 free if ordered on Saturday!</p>
        </form>
    </main>


        </div>
    )
}

export default Order;