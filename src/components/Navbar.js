import React from 'react'

import logo from '../logo.svg'
import '../App.css'

const Navbar = () => {
  return (
    <nav
      class='navbar navbar-expand-lg navbar-dark bg-primary'
      style={{ height: '10vh' }}
    >
      <div class='container-fluid d-flex justify-content-start'>
        <a class='navbar-brand' href='#'>
          <div>
            <img src={logo} className='App-logo' alt='logo' />
          </div>
        </a>
        <div>
          <ul class='navbar-nav d-flex flex-row'>
            <li class='nav-item px-1'>
              <a class='nav-link active' aria-current='page' href='#'>
                Account
              </a>
            </li>
            <li class='nav-item px-1'>
              <a class='nav-link active' aria-current='page' href='#'>
                Chart
              </a>
            </li>
            <li class='nav-item px-1'>
              <a class='nav-link active' aria-current='page' href='#'>
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
