import { Link, Outlet } from 'react-router-dom';
import './Hom.css';
import biryani1 from './Images/biryani1.jpg';
import biryani2 from './Images/biryani2.jpg';

function Home1() {
    return (
        <div>



<div class="button1">
    <button type="submit" class="order-button"><Link to={'contact'}>Contact</Link></button>
    </div>
            <div class="button1"><button type="submit" class="order-button"><Link to={'order'}>Order Now</Link></button></div>


            <section class="offer-section">

                <h2>Offers</h2>
                <div class="offer-tab" id="offerTab">
                    <p>Buy One Get One if Order On saturday</p>
                </div>
            </section>

            <section class="biryanis-section">
                <h2>Our Biryani Selection</h2>
                <div class="price-container">
                    <p class="price">300 </p>
                </div>
                <div class="biryani-grid">
                    <img src={biryani1} alt="Biryani 1" />
                    <img src={biryani2} alt="Biryani 2" />

                </div>
            </section>

            <section class="offer-section">
                <div class="floating-statement">
                    <p>Indulge in the pleasure of our delectable biryani, where every bite is a guarantee of both taste and customer
                        satisfaction for your hard-earned money.</p>
                </div>
            </section>

            <script src="script.js"></script>
            <Outlet/>
        </div>
    )
}
export default Home1;