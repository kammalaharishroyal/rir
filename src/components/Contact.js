import '../components.css/contact.css'
function Contact(){
    return(
       <div className="contact">
         <section >
        <h2>Contact Us</h2>
        {/* Add your contact information and form here */}
        <p>For reservations or inquiries, please contact us at:</p>
        <address>
          Email: info@restaurant.com <br />
          Phone: +1 (123) 456-7890
        </address>
        <form>
          {/* Add your contact form fields here */}
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

       </div>
    )
}
export default Contact;