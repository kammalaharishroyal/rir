import CartComponent from "../components/CartComponent";
import img from "../Images/pizza.jpeg"
import "../components.css/cartComponent.css"

function Cart(){
    return(
       <>
        <CartComponent  image={img} price="100" quantity="1" productId="123" productName="birayni"/>
        <CartComponent  image={img} price="100" quantity="1" productId="123" productName="birayni"/>
        <CartComponent  image={img} price="100" quantity="1" productId="123" productName="birayni"/>
        <CartComponent  image={img} price="100" quantity="1" productId="123" productName="birayni"/>
       </>
    )
}
export default Cart;