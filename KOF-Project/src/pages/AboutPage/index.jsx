import React from "react";
import "./index.css";
import Organization from "../../components/Aboutpage/Organization";
import AboutVideo from "../../components/Aboutpage/AboutVideo";
import TeamMembers from "../../components/Aboutpage/Team";
import Contribution from "../../components/Aboutpage/Contribution";
import Events from "../../components/Homepage/Events";

function AboutKOF() {
  return (
    <div>
      <Organization />
      <AboutVideo />
      <TeamMembers />
      <Contribution />
      <div className="e">
        <Events />
      </div>
    </div>
  );
}

export default AboutKOF;
