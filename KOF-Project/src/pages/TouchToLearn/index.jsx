import React from "react";
import "./index.css";
import Contribution from "../../components/Aboutpage/Contribution";

function TouchToLearn() {
  return (
    <div id="touch-to-learn-wrapper">
      <h1 className="header">
        Touch to learn: Promoting Braille Education for Students with
        Disabilities
      </h1>
      <div className="project-summary">
        <h1 className="project-summary-header">Project Summary</h1>
        <p>
          The Kehinde Ogundele Foundation is proud to lead the Touch to Learn
          initiative, a transformative program aimed at promoting Braille
          education for students with disabilities. This initiative is a vital
          part of the foundation's commitment to fostering inclusive education
          and ensuring that every student, regardless of ability, has access to
          quality learning resources.
        </p>
        <div className="touch-to-learn-point">
          <div className="circle"></div>
          <p>
            Through the Touch to Learn program, the foundation provides Braille
            materials and resources to support students with visual impairments
            in their academic journey.
          </p>
        </div>
        <div className="touch-to-learn-point">
          <div className="circle"></div>
          <p>
            Conducts Braille literacy workshops to enhance reading and writing
            skills for students with disabilities, empowering them to access
            knowledge independently.
          </p>
        </div>
        <p>
          By supporting special needs students with Braille materials and
          education, the foundation is breaking barriers to literacy, enabling
          students with visual impairments to unlock their potential and
          actively participate in society.
        </p>
      </div>
      <div className="touch-to-learn-images">
        <img
          className="touch-img animated-img"
          src="/KOF-img1.png"
          alt=""
          loading="lazy"
        />
        <img
          className="touch-img animated-img"
          src="../../frame6.png"
          alt=""
          loading="lazy"
        />
        <img
          className="touch-img animated-img"
          src="../../frame6.png"
          alt=""
          loading="lazy"
        />
      </div>
      <Contribution />
    </div>
  );
}

export default TouchToLearn;
