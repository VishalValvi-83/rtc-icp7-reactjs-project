import './../Contact/Contact.css'
import React from 'react'

const Contact = () => {
  return (<>
  <h1 className='contact-head'>CONTACT US</h1>
    
    
    <div className='contact-main'>

      

      <form>
        <label for="name"></label>
        <input type="text" id="name" complete placeholder="Name" required className="name-customer"></input>
        <label for="EMAIL"></label>
        <input type="email" id="EMAIL" required placeholder="Email" className="email-customer"></input><br/>
        <label for="mess"></label>
        <textarea name="text" id="mess" cols="80" rows="3" complete placeholder="Message" required
      className="message-customer"></textarea><br/><br/>
      <button type="submit" class="button" value="button">Send</button><br/><br/>
      </form>


      </div>



            </>)
}

            export default Contact