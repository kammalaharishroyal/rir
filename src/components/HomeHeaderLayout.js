import { Link, Outlet } from "react-router-dom";
import "../components.css/homeheaderlayout.css";
import spoon from "../Images/spoon_logo.jpeg";

function HomeHeaderLayout(){
    return(
        <>
        <div className="homeheaderlayout-tittle"><h1>RIR HOME FOODS</h1> <img src={spoon} className="header-img"/></div>
       <div className="homeheaderlayout-nav-bar">
       <Link to='/'><p className="button">Home</p></Link>
        <Link to='orders'><p className="button">Orders</p></Link>
        <Link to='cart'><p className="button">Cart</p></Link>
        <Link to='register'><p className="button">Register</p></Link>
        <Link to='login'><p className="button">Login</p></Link>
        <Link to='contact'><p className="button">Contact</p></Link>
       </div>
        
      

        
        <Outlet/>
        
        </>
    )
}
export default HomeHeaderLayout;