import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./album.scss";
import { User } from "../../App";

function Album() {
  const { data, error } = React.useContext(User);
  return (
    <div>
      <div className="album">
        <div className="sidebarContainer">
          <Sidebar />
        </div>
        <div className="albumContainer">
          <Navbar />
          {data.map((item) => (
            <div key ={item.key}>
              <h1> {item.title}</h1>
              <img src={item.share.image} alt='title' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Album;
