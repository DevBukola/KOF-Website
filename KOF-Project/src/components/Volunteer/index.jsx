import React from "react";
import "./index.css";
import { IoCloseOutline } from "react-icons/io5";

function Volunteer({ onClose }) {
  return (
    <div className="volunteer-modal">
      <div className="close-button" onClick={onClose}>
        <IoCloseOutline className="close-icon" />
      </div>
      <div className="volunteer-text">
        <h1>Join as a volunteer</h1>
        <p>
          Be part of the sefless act. Give your time and energy to help people,
          and make a positive impact in the community.
        </p>
      </div>
      <form>
        <div className="name-wrapper">
          <div className="name">
            <label for="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              class="underline-input"
              placeholder="Type your first name"
            />
          </div>
          <div className="name">
            <label for="first-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              class="underline-input"
              placeholder="Type your last name"
            />
          </div>
        </div>
        <div className="email">
          <label for="first-name">Email Address</label>
          <input
            type="text"
            id="email"
            class="underline-input"
            placeholder="Enter your email address"
          />
        </div>
        <div className="message">
          <label for="message">Why do you wish to join as a volunteer?</label>
          <textarea
            id="message"
            class="message-input"
            placeholder="Type your message"
          ></textarea>
        </div>
        <button className="message-submit">Send message</button>
      </form>
    </div>
  );
}
export default Volunteer;
