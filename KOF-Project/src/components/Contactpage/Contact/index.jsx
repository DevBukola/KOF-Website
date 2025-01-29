import React from "react";
import "./index.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact-wrapper">
      <div className="contact">
        <div className="reach-us">
          <div className="reach-line"></div>
          <div className="reach">CONTACT US</div>
        </div>
        <div className="message">
          <h1>We'd love to hear from you</h1>
          <p>
            Have any question in mind or want to enquire? Please feel free to
            contact us through the form or the following details.
          </p>
        </div>
      </div>
      <div className="address">
        <div className="number">
          <h3>Phone number:</h3>
          <h5>09032814861, 09096735364</h5>
        </div>
        <div className="location">
          <h3>Office address:</h3>
          <p>Ilorin, Kwara State, Nigeria.</p>
        </div>
        <div className="email">
          <h3>Email:</h3>
          <p>kehindeogundelefoundation4@gmail.com</p>
        </div>
        <div className="social-handles">
          <a href="">
            {" "}
            <FaFacebook />
          </a>
          <a href="">
            <FaTwitter />
          </a>
          <a href="">
            {" "}
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
