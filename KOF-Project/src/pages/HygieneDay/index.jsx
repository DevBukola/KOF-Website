import React from "react";
import "./index.css";
import Contribution from "../../components/Aboutpage/Contribution";

function HygieneDay() {
  return (
    <div id="touch-to-learn-wrapper">
      <h1 className="header">
       World Menstrual Hygiene Day
      </h1>
      <div className="project-summary">
        <h1 className="project-summary-header">Project Summary</h1>
        <p>
          The Kof is proud to commemorate World Menstrual Hygiene Day by
          organizing a Training Workshop for Adolescent Girls focused on
          menstrual hygiene management. This initiative reflects the
          foundation's unwavering commitment to empowering young girls and
          promoting health, dignity, and equality.
        </p>
        <p>
          This impactful workshop provides essential education on menstrual
          health, aiming to:
        </p>
        <p>
          Break the stigma and myths surrounding menstruation. Equip adolescent
          girls with knowledge to manage their periods confidently and
          hygienically. Promote sustainable practices through the introduction
          and distribution of reusable pads.
        </p>
      </div>
      <div className="touch-to-learn-images">
        <img
          className="touch-img animated-img"
          src="/hygiene1.png"
          alt=""
          loading="lazy"
        />
        <img
          className="touch-img animated-img"
          src="/hygiene2.png"
          alt=""
          loading="lazy"
        />
        <img
          className="touch-img animated-img"
          src="/hygiene3.png"
          alt=""
          loading="lazy"
        />
      </div>
      <Contribution />
    </div>
  );
}

export default HygieneDay;
