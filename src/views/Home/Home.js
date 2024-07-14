
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
      <div className='header my-4'>
        <ul className='d-flex list-inline align-items-center mx-auto'>
          <li><img src={logo} className='logo' /></li>
          <li className=''><Link to="" className='nevigation-menu'>Home</Link></li>
          <li><Link to="" className='nevigation-menu'>About</Link></li>
          <li><Link to="" className='nevigation-menu'>Product</Link></li>
          <li><Link to="" className='nevigation-menu'>Contact</Link></li>
          <li><Link to="" className='nevigation-menu'>signup</Link></li>
          <li><button className='btn btn-warning login-btn nevigation-menu'>Login</button></li>
        </ul>
      </div>
      <div className='banner-section'>
        <div className='banner-text'>
          <p className='our'>Our</p>
          <p className='latest'>Latest</p>
          <p className='product'>Products</p>
          <button className='btn btn-warning product-btn'><a href=''>see more Products</a> </button>
        </div>
      </div>
    </>
  )
}

export default Home