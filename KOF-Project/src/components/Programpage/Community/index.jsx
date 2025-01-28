import React from "react";
import "./index.css";

function Community() {
  return (
    <div id="community-wrapper">
      <div className="about-us">
        <div className="line"></div>
        <div className="about">WHAT WE DO</div>
      </div>
      <div className="community">
        <div className="identity">
          <h1>We are the people for the community</h1>
          <p>
            At Kehinde Ogundele Foundation, we're committed to making a positive
            impact on our community. Our programs are designed to address
            pressing social issues and empower individuals to reach their full
            potential.
          </p>
        </div>
        <div className="identity-img">
          <img src="/frame6.png" alt="image" />
        </div>
      </div>
    </div>
  );
}

export default Community;
