import React from "react";
import '../footer/footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
      <div className="media-contain">
        <div className='social-media  py-3 '>
          <a href='https://www.facebook.com/profile.php?id=100026333352542'><i className="fa-brands fa-facebook-f"></i></a> 
          <a href='https://www.instagram.com/harshalpatil003/?hl=en'> <i className="fa-brands fa-instagram"></i></a>
          <i className="fa-brands fa-twitter"><a href=''></a></i>
          <i className="fa-brands fa-linkedin-in"><a href=''></a></i>
        </div>
      </div>
        <div className="footer__container d-flex flex-wrap">
          <div className="contact-us">
          <h2>Contact Us</h2>

            <p>123 Shivaji Street Fifth Avenue,<br />
              Chalisgaon, India<br />
              +987 654 3210</p>
          </div>
          <div className="additional-links">
            <h2>Quick Links</h2>
            <ul className=" list-inline">
              <li><Link to="/" className="quick-links">Home</Link></li>
              <li><Link to="/about" className="quick-links">About</Link></li>
              <li><Link to="/product" className="quick-links">Product</Link></li>
              <li><Link to="/contact" className="quick-links">Contact</Link></li>
            </ul>
          </div>
          <div className="services">
          <h2>Services</h2>

            <ul className=" list-inline">
              <li>Data recovery</li>
              <li> Computer repair</li>
              <li> Mobile service </li>
              <li> Network solutions</li>
              <li> Technical support</li>
            </ul>
          </div>
          <div className="about-lighten">
          <h2>About Lighten</h2>

            <p>
              Become an LIGHTEN member<br/>
              Enjoy all the benefits of free lighten membership, <br/>
              from special discounts to exclusive services<br/>
               and offers.


            </p>
          </div>



        </div>
      </div>
    </>
  )
}
export default Footer;

