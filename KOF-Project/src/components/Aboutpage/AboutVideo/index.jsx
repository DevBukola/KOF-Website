import React from "react";
import "./index.css";

function AboutVideo() {
  return (
    <div id="video-section-wrapper">
      <div className="video-section">
        <img src="/frame5.png" alt="" />
      </div>
      <div className="mission-wrapper">
        <div className="mission">
          <h5>OUR MISSION</h5>
          <h3>
            We empower individuals and community through quality experience.
          </h3>
          <p>
            We strive to create an environment where every person, regardless of
            background or ability, has equal access to resources and platforms
            that enable them to contribute meaningfully to society, fostering a
            culture of social responsibility, inclusion, and positive community
            impact.
          </p>
        </div>
        <div className="mission">
          <h5>OUR VISION</h5>
          <h3>
            To create an equitable society where everyone has the opportunity to
            thrive
          </h3>
          <p>
            We envision a world where inclusivity is the standard, civic
            engagement is a shared responsibility, and every individual can
            actively participate in shaping their community’s future. Our goal
            is to create sustainable, equitable opportunities for all, ensuring
            that no one is left behind in the journey toward a more engaged and
            inclusive society.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutVideo;
