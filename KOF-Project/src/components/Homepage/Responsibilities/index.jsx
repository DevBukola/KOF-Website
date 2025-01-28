import React from "react";
import './index.css'

const Responsibilities = ({ icon, header, label }) => {
  return (
        <div className="responsibility-wrapper">
          <div className="responsibility">
            <img className="icon" src={icon} alt="" />
            <h3 className="card-header">{header}</h3>
            <p className="card-label">{label}</p>
          </div>
        </div>
  );
};

export default Responsibilities;
