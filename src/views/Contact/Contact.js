import './../Contact/Contact.css'
import Footer from '../../components/footer/footer'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Home/logo.jpg'

const Contact = () => {
  return (<>
   <div className="media-container">
        <div className='social-media  py-3'>
          <a href='https://www.facebook.com/profile.php?id=100026333352542'><i className="fa-brands fa-facebook-f"></i></a> 
          <a href='https://www.instagram.com/harshalpatil003/?hl=en'> <i className="fa-brands fa-instagram"></i></a>
          <i className="fa-brands fa-twitter"><a href=''></a></i>
          <i className="fa-brands fa-linkedin-in"><a href=''></a></i>
        </div>
      </div>
   <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid list-inline ">
          <a class="navbar-brand" href=""><li><img src={logo} className='logo' /></li></a>

          <div class="collapse navbar-collapse " id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className=''><Link to="/" className='nevigation-menu'>Home</Link></li>
              <li><Link to="/about" className='nevigation-menu'>About</Link></li>
              <li><Link to="/products" className='nevigation-menu'>Product</Link></li>
              <li><Link to="/contact" className='nevigation-menu'>Contact</Link></li>
              <li><Link to="/signup" className='nevigation-menu'>signup</Link></li>
              <li><button className='btn btn-warning login-btn nevigation-menu'>Login</button></li>
            </ul>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

        </div>
      </nav>
    <h1 className='contact-head'>CONTACT US</h1>


    <div className='contact-main'>



      <form>
        <label for="name"></label>
        <input type="text" id="name" complete placeholder="Name" required className="name-customer"></input>
        <label for="EMAIL"></label>
        <input type="email" id="EMAIL" required placeholder="Email" className="email-customer"></input><br />
        <label for="mess"></label>
        <textarea name="text" id="mess" cols="80" rows="3" complete placeholder="Message" required
          className="message-customer"></textarea><br /><br />
        <button type="submit" class="button" value="button">Send</button><br /><br />
      </form>


    </div>
<Footer/>


  </>)
}

export default Contact