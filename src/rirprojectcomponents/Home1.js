import './Hom.css'
function Home1(){
    return (
        <div>


  <header className='header'>
    <h1>RIR Biryani</h1>

  </header>
  <div class="button1"><button type="submit" class="order-button">Order Now</button></div>


  <section class="offer-section">
    <h2>Offers</h2>
    <div class="offer-tab" id="offerTab">
      <p>Buy One Get One if Order On saturday</p>
    </div>
  </section>

  <section class="biryanis-section">
    <h2>Our Biryani Selection</h2>
    <div class="biryani-grid">
      <img src="biryani1.jpg" alt="Biryani 1"/>
      <img src="biryani2.jpg" alt="Biryani 2"/>

    </div>
  </section>

  <section class="order-section">
    <h2>Place Your Order</h2>
    <form id="orderForm">
      <label for="deliveryDay">Select Delivery Day:</label>
      <select id="deliveryDay" name="deliveryDay">
        <option value="sunday">Sunday</option>
      
      </select>

      <label for="deliveryTime">Select Delivery Time:</label>
      <input type="time" id="deliveryTime" name="deliveryTime"/>

      <button type="submit" class="order-button">Order Now</button>
    </form>
  </section>
  <section class="offer-section">
    <div class="floating-statement">
      <p>Indulge in the pleasure of our delectable biryani, where every bite is a guarantee of both taste and customer
        satisfaction for your hard-earned money.</p>
    </div>
  </section>

  <script src="script.js"></script>
  </div>
    )
}
export default Home1;