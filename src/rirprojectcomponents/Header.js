import { Link } from "react-router-dom";
import spoon_img from './Images/spoon_logo.jpeg';
import FoodItem from "./Foodcompo";
import foodimg1 from './Images/biryani1.jpg'


function Header(){
    return(
        <>

        <header className='header'>
        <h1>RIR Home Foods</h1>
        <img src={spoon_img} className="spoon_img" />
        

         </header>
         <nav className="Header-nav">
        
         <h2> <Link to='/'>Home</Link> </h2>
         <h2><Link to='order'>orders</Link></h2>
         <h2><Link to={'contact'}>Contact</Link></h2>
         <h2><Link to={'cart'}>Cart</Link></h2>
         
         
         </nav>
         <div className="food-items" >
         <FoodItem name="Burger" price={10.99} imageUrl={foodimg1} />
         <FoodItem name="Burger" price={10.99} imageUrl={foodimg1} />
         <FoodItem name="Burger" price={10.99} imageUrl={foodimg1} />
         <FoodItem name="Burger" price={10.99} imageUrl={foodimg1} />
         <FoodItem name="Burger" price={10.99} imageUrl={foodimg1} />
         <FoodItem name="Burger" price={10.99} imageUrl={foodimg1} />
         <FoodItem name="Burger" price={10.99} imageUrl={foodimg1} />
         <FoodItem name="Burger" price={10.99} imageUrl={foodimg1} />
         <FoodItem name="Burger" price={10.99} imageUrl={foodimg1} />
         <FoodItem name="Burger" price={10.99} imageUrl={foodimg1} />

         </div>
        
         
         </>
    )
}

export default Header;