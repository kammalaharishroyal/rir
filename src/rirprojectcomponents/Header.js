import { Link } from "react-router-dom";

function Header(){
    return(
        <>

        <header className='header'>
        <h1>RIR Home Foods</h1>
        

         </header>
         <nav className="Header-nav">
         <h2><Link to={'order'}>Order</Link></h2>
         <h2>Contact</h2>
         <h2>About</h2>
         
         </nav>
         </>
    )
}

export default Header;