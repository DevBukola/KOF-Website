import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Empowerment from "../../components/Homepage/Empowerment";
import Responsibilities from "../../components/Homepage/Responsibilities";
import { DifferenceCards } from "../../constants";
import { ProjectImages } from "../../constants";
import Project from "../../components/Homepage/Project";
import Movement from "../../components/Homepage/Movement";
import Events from "../../components/Homepage/Events";
import Contribution from "../../components/Aboutpage/Contribution";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const wrapperRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
      setScrollPosition((prev) => prev + 200);
    }
  };

  return (
    <div className="homepage-container">
      <Empowerment />
      <div className="responsibilities-wrapper">
        <div data-aos="flip-right" className="difference">
          <h1>How We Make a Difference </h1>
          <div className="difference-bars">
            <div className="difference-bar"></div>
            <div className="difference-bar"></div>
            <div className="difference-bar"></div>
          </div>
        </div>
        <div className="carousel-container">
          <button className="scroll-button left" onClick={scrollLeft}>
            {"<<"}
          </button>
          <div className="carousel-wrapper" ref={wrapperRef}>
            {DifferenceCards.map((item) => (
              <Responsibilities
                key={item.id}
                icon={item.icon}
                header={item.header}
                label={item.label}
              />
            ))}
          </div>
          <button className="scroll-button right" onClick={scrollRight}>
            {">>"}
          </button>
        </div>
      </div>
      <div className="project-wrapper">
        <div className="project">
          <h3 data-aos="flip-right">Explore Our Project</h3>
          <p data-aos="flip-left">
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
            <Link to="/program">Discover more</Link>
          </p>
        </div>
      </div>
      <Movement />
      <Contribution />
      <Events />
    </div>
  );
};

export default HomePage;
