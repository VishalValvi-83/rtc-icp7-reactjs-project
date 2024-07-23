import React from 'react'
import Footer from '../../components/footer/footer'
import pc_layout from "./pc_layout.png"
import "./../../components/computer-services/c-services.css"
import "./../About/About.css"
import { Link } from 'react-router-dom'
import logo from "../Home/logo.jpg"

const About = () => {
  return (
  <>
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
      <div>
        <div className="about">
          <div className="container">
            <div className="row">
              <dir className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div >
                  <figure><img className='about-img' src={pc_layout} /></figure>
                </div>
              </dir>
              <dir className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div >
                  <h3 className="about_box">Who is Lighten</h3>
                  <p > It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</p>
                  <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
              </dir>
            </div>
          </div>
        </div>
      </div>
<Footer/>

    </>

  )
}

export default About