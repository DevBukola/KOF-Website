import React from "react";
import "./index.css";
import Contact from "../../components/Contactpage/Contact";
import ContactForm from "../../components/Contactpage/ContactForm";

function ContactUs() {
  return (
    <div id="contact-container">
      <Contact />
      <ContactForm />
    </div>
  );
}

export default ContactUs;
