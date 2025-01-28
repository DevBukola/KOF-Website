import React from "react";
import "./index.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Events() {
  return (
    <div className="events-wrapper">
      <h1>Our Past Events</h1>
      <div className="events">
        <div className="operation">
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
              <p>Operation feed the orphans</p>
            </div>
          </div>
          <div>
            <Link>
              <FaArrowRight className="arrow" />
            </Link>
          </div>
        </div>
        <div className="operation">
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
            <Link>
              <FaArrowRight className="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
