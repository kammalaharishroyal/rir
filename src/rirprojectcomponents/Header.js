import { Link } from "react-router-dom";
import spoon_img from './Images/spoon_logo.jpeg';
import FoodItem from "./Foodcompo";

function Header(){
    return(
        <>

        <header className='header'>
        <h1>RIR Home Foods</h1>
        <img src={spoon_img} className="spoon_img" />
        

         </header>
         <nav className="Header-nav">
         <h2><Link to={'order'}>Order</Link></h2>
         <h2>Contact</h2>
         <h2>About</h2>
         
         </nav>
         <div className="food-items" >
         <FoodItem name="Burger" price={10.99} imageUrl={spoon_img} />
         <FoodItem name="Burger" price={10.99} imageUrl={spoon_img} />
         <FoodItem name="Burger" price={10.99} imageUrl={spoon_img} />
         <FoodItem name="Burger" price={10.99} imageUrl={spoon_img} />
         <FoodItem name="Burger" price={10.99} imageUrl={spoon_img} />
         <FoodItem name="Burger" price={10.99} imageUrl={spoon_img} />
         <FoodItem name="Burger" price={10.99} imageUrl={spoon_img} />
         <FoodItem name="Burger" price={10.99} imageUrl={spoon_img} />
         <FoodItem name="Burger" price={10.99} imageUrl={spoon_img} />
         <FoodItem name="Burger" price={10.99} imageUrl={spoon_img} />

         </div>
         
         </>
    )
}

export default Header;