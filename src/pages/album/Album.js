import React from 'react';
import ChartDetails from '../../components/chartDetails/ChartDetails';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './album.scss';

function Album() {
  return (
    <div>
        <div className="album">
            <div className="sidebarContainer">
                <Sidebar />
            </div>
            <div className="albumContainer">
                <Navbar />
                <ChartDetails />

            </div>
            
        </div>
    </div>
  )
}

export default Album