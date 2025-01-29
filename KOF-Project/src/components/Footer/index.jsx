import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="footer-container">
      <div className="logo-image">
        <img src="/logo2.png" alt="" />
      </div>
      <div className="lists">
        <div className="home">
          <li>
            <Link className="active">Home</Link>
          </li>
          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <Link>Our Program</Link>
          </li>
          <li>
            <Link>Volunteer</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </div>
        <div className="more">
          <li>
            <Link className="active">More</Link>
          </li>
          <li>
            <Link>Projects</Link>
          </li>
          <li>
            <Link>Events</Link>
          </li>
          <li>
            <Link>Donate</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
        </div>
        <div className="connect">
          <li>
            <Link className="active">Connect</Link>
          </li>
          <li>
            <Link>Facebook</Link>
          </li>
          <li>
            <Link>Instagram</Link>
          </li>
          <li>
            <Link>Twitter</Link>
          </li>
          <li>
            <Link>LinkedIn</Link>
          </li>
        </div>
      </div>
      <div className="newsletter">
        <h1>Subscribe to get the latest updates</h1>
        <div className="subscription">
          <div className="email">Email</div>
          <button className="subscribe">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
