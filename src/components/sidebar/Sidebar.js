import React from "react";
import "./sidebar.scss";
import Lone from "./assets/logoOne.svg";
import Ltwo from "./assets/logoTwo.svg";


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={Lone} alt="logo" />
        <img src={Ltwo} alt="secondLogo" />
      </div>
      <div className="middle">
        
      </div>

      <div className="bottom"></div>
    </div>
  );
}

export default Sidebar;
