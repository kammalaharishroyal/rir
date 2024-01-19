import { Link, Outlet } from "react-router-dom";
import "../components.css/homeheaderlayout.css";
import spoon from "../Images/spoon_logo.jpeg";

function HomeHeaderLayout(){
    return(
        <>
        <div className="homeheaderlayout-tittle"><h1>RIR HOME FOODS</h1> <img src={spoon}/></div>
       <div className="homeheaderlayout-nav-bar">
       <Link to='/'><button>Home</button></Link>
        <Link to='orders'><button>Orders</button></Link>
        <Link to='cart'><button>Cart</button></Link>
        <Link to='register'><button>Register</button></Link>
        <Link to='login'><button>Login</button></Link>
        <Link to='contact'><button>Contact</button></Link>
       </div>
        
      

        
        <Outlet/>
        
        </>
    )
}
export default HomeHeaderLayout;