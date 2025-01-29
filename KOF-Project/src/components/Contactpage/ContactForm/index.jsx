import React from "react";
import "./index.css";

function ContactForm() {
  return (
    <div id="contact-form-wrapper">
      <form>
        <div className="contact-name-wrapper">
          <div className="contact-name">
            <label for="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              class="underline-input"
              placeholder="John"
            />
          </div>
          <div className="contact-name">
            <label for="first-name">Doe</label>
            <input
              type="text"
              id="last-name"
              class="underline-input"
              placeholder="Type your last name"
            />
          </div>
        </div>
        <div className="contact-email-wrapper">
          <div className="contact-email">
            <label for="first-name">Email Id</label>
            <input
              type="text"
              id="email"
              class="underline-input"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className="contact-email">
            <label for="subject">Subject</label>
            <input
              type="text"
              id="email"
              class="underline-input"
              placeholder=""
            />
          </div>
        </div>
        <div className="volunteer-message">
          <label for="message">Message</label>
          <textarea
            id="message"
            class="message-input"
            placeholder="Type your message"
          ></textarea>
        </div>
        <div className="contact-submit-div">
          <button className="contact-submit">Submit message</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
