import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Section from '../../components/sectiionOne/Section'
import Sidebar from '../../components/sidebar/Sidebar'
import './homepage.scss'

function Homepage() {
  return (
    <div className='whole'>
      <div className="sideBarContainer">
        <Sidebar />
      </div>

      <div className="homepageContainer">
        <Navbar />
        <div className="homepage">
          
        </div>
      </div>
    </div>
  )
}

export default Homepage
