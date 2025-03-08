import React, { useEffect } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Space = ({ img, id, header, paragraph }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="space-wrapper">
      <div className="safespace-card">
        <div data-aos="fade-up" className="image">
          <img src={img} alt="" />
        </div>
        <div data-aos="flip-left" className="detail">
          <h3>{header}</h3>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Space;
