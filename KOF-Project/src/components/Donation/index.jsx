import React from "react";
import "./index.css";
import { IoCloseOutline } from "react-icons/io5";

function Donation({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="donation-img">
          <img src="/donate.png" alt="" />
        </div>
        <div className="donation-form-wrapper">
          <div className="form">
            <button onClick={onClose} className="close-btn">
              <IoCloseOutline className="close-icon"/>
            </button>
            <h2>Make a Donation</h2>
            <p>
              Every donation count, no matter how big or small it is. Help us
              give hope to those who need it most.
            </p>
            <div className="input">
              <input type="text" placeholder="Your name" />
              <input type="text" placeholder="Your email" />
            </div>
            <h3>Payment Information</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donation;
