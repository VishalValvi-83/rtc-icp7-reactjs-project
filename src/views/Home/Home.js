
import React from 'react'
import '../../views/Home/Home.css'
import banner from '../Home/banner.jpg'
import { Link } from 'react-router-dom'
import logo from '../Home/logo.jpg'
const Home = () => {
  return (
    <>
      <div className="media-container">
        <div className='social-media  py-3'>
          <i className="fa-brands fa-facebook-f"><a href=''></a> </i>
          <i className="fa-brands fa-twitter"><a href=''></a></i>
          <i className="fa-brands fa-instagram"><a href=''></a></i>
          <i className="fa-brands fa-linkedin-in"><a href=''></a></i>
        </div>
      </div>
      {/* <div className='header my-4'>
        <ul className='d-flex list-inline align-items-center mx-auto'>
      
        </ul>
      </div> */}
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid list-inline ">
          <a class="navbar-brand" href=""><li><img src={logo} className='logo' /></li></a>
          
          <div class="collapse navbar-collapse " id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className=''><Link to="" className='nevigation-menu'>Home</Link></li>
              <li><Link to="" className='nevigation-menu'>About</Link></li>
              <li><Link to="" className='nevigation-menu'>Product</Link></li>
              <li><Link to="" className='nevigation-menu'>Contact</Link></li>
              <li><Link to="" className='nevigation-menu'>signup</Link></li>
              <li><button className='btn btn-warning login-btn nevigation-menu'>Login</button></li>
            </ul>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

        </div>
      </nav>
      <div className='banner-section'>
        <div className='banner-text'>
          <p className='our'>Our</p>
          <p className='latest'>Latest</p>
          <p className='product'>Products</p>
          <button className='btn btn-warning product-btn'><a href=''>see more Products</a> </button>
        </div>
      </div>
      <div className='choose-section my-5'>
        <p className='choose-us'>Why <span className='black-text'>Choose Us</span></p>
        <p className='text'>Fastest repair service with best price!</p>
      </div>
    </>
  )
}

export default Home