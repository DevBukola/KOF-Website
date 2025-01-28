import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Empowerment from "../../components/Homepage/Empowerment";
import Responsibilities from "../../components/Homepage/Responsibilities";
import { DifferenceCards } from "../../constants";
import { ProjectImages } from "../../constants";
import Project from "../../components/Homepage/Project";
import Movement from "../../components/Homepage/Movement";
import Events from "../../components/Homepage/Events";

function HomePage() {
  return (
    <div className="homepage-container">
      <Empowerment />
      <div className="responsibilities-wrapper">
        <div className="difference">
          <h1>How We Make a Difference </h1>
          <div className="difference-bars">
            <div className="difference-bar"></div>
            <div className="difference-bar"></div>
            <div className="difference-bar"></div>
          </div>
        </div>
        <div className="scroll-container">
          <div className="cards">
            {DifferenceCards.map((item) => (
              <Responsibilities
                key={item.id}
                icon={item.icon}
                header={item.header}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="project-wrapper">
        <div className="project">
          <h3>Explore Our Project</h3>
          <p>
            Learn the story of those who we've helped, and made an impact
            through.
          </p>
        </div>
        <div className="scroll-container">
          <div className="project-card">
            {ProjectImages.map((prod) => (
              <Project key={prod.id} img={prod.img} />
            ))}
          </div>
        </div>
        <div className="discover-container">
          <p className="discover">
            {" "}
            <Link to="">Discover more</Link>
          </p>
        </div>
      </div>
      <Movement />
      <Events />
    </div>
  );
}

export default HomePage;
