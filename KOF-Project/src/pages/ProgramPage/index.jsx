import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Contribution from "../../components/Aboutpage/Contribution";
import Events from "../../components/Homepage/Events";

function OurProgram() {
  return (
    <div id="program-wrapper">
      <div className="programs">
        <Link className="program" to="/program/touch-to-learn">
          Touch to learn: Promoting Braille Education for Students with
          Disabilities
        </Link>
        <Link className="program" to="/program/menstrual-hygiene-day">
          World Menstrual Hygiene Day
        </Link>
        <Link className="program" to="/program/Community-Engagement-on-LGA-Reforms-and-Advocacy">
          Community Engagement on Local Government Reforms and Advocacy
        </Link>
      </div>
    </div>
  );
}

export default OurProgram;
