import React from "react";
import Section from "../../components/sectiionOne/Section";
import SectionTwo from "../../components/sectionTwo/SectionTwo";
import "./homepage.scss";

function Homepage() {
  return (
    <div className="whole">
        <div className="homepage">
          <Section />
          <SectionTwo />
        </div>
      </div>
  );
}

export default Homepage;
