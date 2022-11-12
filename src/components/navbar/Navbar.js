import React from 'react'
import './Navbar.scss'
import search from './assets/search.svg'


function Navbar() {
  return (
    <nav>
      <div className="search">
          <img src={search} alt="search" />
          <input type="text" placeholder='Search artists' />
      </div>
      </nav>
  )
}

export default Navbar
