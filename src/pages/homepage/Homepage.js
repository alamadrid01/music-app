import React from "react";
import ChartList from "../../components/chartList/ChartList";
import CurrentPlayer from "../../components/currenPlayer/CurrentPlayer";
import Navbar from "../../components/navbar/Navbar";
import Section from "../../components/sectiionOne/Section";
import SectionTwo from "../../components/sectionTwo/SectionTwo";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.scss";

function Homepage() {
  return (
    <div className="whole">
      <ChartList />
      <CurrentPlayer />
      <div className="sideBarContainer">
        <Sidebar />
      </div>

      <div className="homepageContainer">
        <Navbar />
        <div className="homepage">
          <Section />
          <SectionTwo />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
