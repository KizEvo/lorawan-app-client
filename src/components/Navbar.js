import React from 'react'

import logo from '../logo.svg'
import { Link } from 'react-router-dom'
import '../App.css'
//import '../styling/Navbar.css'

const Navbar = () => {
  return (
    <nav
      className='navbar navbar-expand-lg navbar-dark bg-primary'
      style={{ height: '10vh' }}
    >
      <div className='container-fluid d-flex justify-content-start'>
        <a className='navbar-brand' href='#'>
          <div>
            <img src={logo} className='App-logo' alt='logo' />
          </div>
        </a>
        <div>
          <ul className='navbar-nav d-flex flex-row'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/status">Status</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
