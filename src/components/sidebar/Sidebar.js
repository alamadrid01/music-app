import React from "react";
import "./sidebar.scss";
import logo from "./assets/logo.svg";
import home from "./assets/Home.svg";
import library from "./assets/library.svg";
import radio from "./assets/Radio.svg";
import video from "./assets/video.svg";
import profile from "./assets/profile.svg";
import logout from "./assets/Logout.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <button>
          <img src={logo} alt="logo" />
        </button>
      </div>
      <div className="middle">
        <button>
          <img src={home} alt="home" />
        </button>
        <button>
          <img src={library} alt="home" />
        </button>
        <button>
          <img src={radio} alt="home" />
        </button>
        <button>
          <img src={video} alt="home" />
        </button>
      </div>

      <div className="bottom">
        <button>
          <img src={profile} alt="home" />
        </button>
        <button>
          <img src={logout} alt="home" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
