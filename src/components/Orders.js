import Order from "./CartComponent";
import img from "../Images/pizza.jpeg";
import "../components.css/order.css";

function Orders(){
    return(
      <>
       <Order  image={img} price="100" quantity="1" productId="123" productName="birayni"/>
       <Order  image={img} price="100" quantity="1" productId="123" productName="birayni"/>
       <Order  image={img} price="100" quantity="1" productId="123" productName="birayni"/>
       <Order  image={img} price="100" quantity="1" productId="123" productName="birayni"/>
       <Order  image={img} price="100" quantity="1" productId="123" productName="birayni"/>
      </>
    )
}
export default Orders;