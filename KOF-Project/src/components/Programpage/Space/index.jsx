import React from "react";
import "./index.css";

const Space = ({ img, id, header, paragraph }) => {
  return (
    <div id="space-wrapper">
      <div className="safespace-card">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="detail">
          <h3>{header}</h3>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Space;
