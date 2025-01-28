import React from "react";
import "./index.css";

function Organization() {
  return (
    <div id="organization-wrapper">
      <div className="about-us">
        <div className="line"></div>
        <div className="about">KNOW ABOUT US</div>
      </div>
      <div className="organization-text">
        <h1>We are a non governmental organization</h1>
        <div className="dedication">
          <h3>
            Dedicated to promoting quality experiences, inclusion, and civic
            engagement. We believe that true progress is made when diverse
            voices come together to drive change.
          </h3>
          <p>
            Through education, advocacy, and hands-on programs, we aim to foster
            a more inclusive society where everyone has the opportunity to
            thrive and contribute to the common good. Together, we are building
            a future where civic responsibility and inclusion lead the way to a
            more just and connected world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Organization;
