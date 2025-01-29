import React from "react";
import "./index.css";
import Community from "../../components/Programpage/Community";
import Space from "../../components/Programpage/Space";
import { SafeSpace } from "../../constants";
import Contribution from "../../components/Aboutpage/Contribution";
import Events from "../../components/Homepage/Events";

function OurProgram() {
  return (
    <div id="program-wrapper">
      <Community />
      <div className="space-container">
        <div className="about-us-space">
          <div className="line-space"></div>
          <p className="about-space">PROJECTS WE HAVE DONE</p>
        </div>
        <div>
          <h2 className="space">
            We are creating a space where people can live in a better world
          </h2>
        </div>
      </div>
      <div className="scroll-container-program">
        <div className="program-cards">
          {SafeSpace.map((space) => (
            <Space
              key={space.id}
              img={space.img}
              header={space.header}
              paragraph={space.paragraph}
            />
          ))}
        </div>
      </div>
        <Contribution />
      <div className="e">
        <Events />
      </div>
    </div>
  );
}

export default OurProgram;
