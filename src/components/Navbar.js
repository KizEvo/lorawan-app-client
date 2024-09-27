import React from 'react'

import logo from '../logo.svg'
import '../App.css'

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
            <li className='nav-item px-1'>
              <a className='nav-link active' aria-current='page' href='#'>
                Account
              </a>
            </li>
            <li className='nav-item px-1'>
              <a className='nav-link active' aria-current='page' href='#'>
                Chart
              </a>
            </li>
            <li className='nav-item px-1'>
              <a className='nav-link active' aria-current='page' href='#'>
                Analytic
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
