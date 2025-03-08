import React from "react";
import "./index.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Events() {
  return (
    <div className="events-wrapper">
      <h1>Our Past Events</h1>
      <div className="events">
        <Link to="/program/touch-to-learn">
          <div data-aos="fade-up" className="operation">
            <div className="operation-date">
              <div className="dates">
                <h4 className="date">01</h4>
                <h6 className="month">OCT</h6>
              </div>
              <div className="operation-text">
                <div className="past">
                  <h2>PAST EVENTS</h2>
                  <div className="line"></div>
                </div>
                <p>
                  Touch to Learn: Promoting Braille Education For Students With
                  Disabilities.
                </p>
              </div>
            </div>
            <div>
              <Link to="/program/touch-to-learn">
                <FaArrowRight className="arrow" />
              </Link>
            </div>
          </div>
        </Link>
        <Link to="/program/menstrual-hygiene-day">
          <div data-aos="zoom-in" className="operation">
            <div className="operation-date">
              <div className="dates">
                <h4 className="date">25</h4>
                <h6 className="month">APR</h6>
              </div>
              <div className="operation-text">
                <div className="past">
                  <h2>PAST EVENTS</h2>
                  <div className="line"></div>
                </div>
                <p>World Menstrual Hygiene Day - 2024</p>
              </div>
            </div>
            <div>
              <Link to="/program/menstrual-hygiene-day">
                <FaArrowRight className="arrow" />
              </Link>
            </div>
          </div>
        </Link>
        <Link to="/program/Community-Engagement-On-LGA-Reforms-and-Advocacy">
          <div data-aos="zoom-in" className="operation">
            <div className="operation-date">
              <div className="dates">
                <h4 className="date">25</h4>
                <h6 className="month">NOV</h6>
              </div>
              <div className="operation-text">
                <div className="past">
                  <h2>PAST EVENTS</h2>
                  <div className="line"></div>
                </div>
                <p>
                  Community Engagement on Local Government Reforms and Advocacy
                </p>
              </div>
            </div>
            <div>
              <Link to="/program/Community-Engagement-On-LGA-Reforms-and-Advocacy">
                <FaArrowRight className="arrow" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Events;
