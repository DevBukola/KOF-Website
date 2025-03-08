import React from "react";
import "./index.css";
import Contribution from "../../components/Aboutpage/Contribution";

function CommunityAdvocacy() {
  return (
    <div id="touch-to-learn-wrapper">
      <h1 className="header">
        Community Engagement on Local Government Reforms and Advocacy
      </h1>
      <div className="project-summary">
        <h1 className="project-summary-header">Project Summary</h1>
        <p>
          The Kof is at the forefront of promoting civic engagement and
          accountability through its Community Engagement on Local Government
          Reforms and Advocacy initiative in Ekiti Local Government. This
          program is designed to empower citizens with the knowledge and tools
          they need to actively participate in governance and ensure
          transparency in the management of local resources.
        </p>
        <p>
          Through this initiative, the foundation Educates citizens on their
          rights and responsibilities in holding their local government
          leadership, particularly the Local Government Chairman, accountable.
        </p>
      </div>
      <div className="touch-to-learn-images">
        <img
          className="touch-img animated-img"
          src="/Advocacy1.png"
          alt=""
          loading="lazy"
        />
        <img
          className="touch-img animated-img"
          src="/Advocacy2.png"
          alt=""
          loading="lazy"
        />
        <img
          className="touch-img animated-img"
          src="/Advocacy3.png"
          alt=""
          loading="lazy"
        />
      </div>
      <Contribution />
    </div>
  );
}

export default CommunityAdvocacy;
