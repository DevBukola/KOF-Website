import React from "react";
import "./index.css";

const Project = ({ img, id }) => {
  return (
    <div className="project-images">
      <img src={img} alt="" />
    </div>
  );
};

export default Project;
