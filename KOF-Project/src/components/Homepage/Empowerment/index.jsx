import React, { useState } from "react";
import "./index.css";
import Donation from "../../Donation";
import Volunteer from "../../Volunteer";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Empowerment = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [donateSelected, setDonateSelected] = useState(false);
  const [volunteerSelected, setVolunteerSelected] = useState(false);

  const handleJoinButtonClick = () => {
    setShowOptions(true);
  };

  const handleDonateClick = () => {
    setDonateSelected(true);
    setVolunteerSelected(false);
    setShowOptions(false);
  };

  const handleVolunteerClick = () => {
    setVolunteerSelected(true);
    setDonateSelected(false);
    setShowOptions(false);
  };

  const closeModal = () => {
    setDonateSelected(false);
    setVolunteerSelected(false);
  };
  return (
    <div className="empower-container">
      <motion.div
        className="empower"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1>Empowering Individuals, Transforming Communities.</h1>
        <p>
          We are creating a world where every person, regardless of background
          or ability, has equal access to opportunities and resources.
        </p>
        <button onClick={handleJoinButtonClick}>
          Join us in transforming lives
        </button>
      </motion.div>
      {showOptions && (
        <div className="modal-overlay" onClick={() => setShowOptions(false)}>
          <div className="options">
            <button onClick={handleDonateClick}>Do you want to donate?</button>
            <p>Or</p>
            <button onClick={handleVolunteerClick}>
              Do you want to join as a volunteer?
            </button>
          </div>
        </div>
      )}
      {donateSelected && <Donation onClose={closeModal} />}
      {volunteerSelected && <Volunteer onClose={closeModal} />}
      <div data-aos="zoom-in" className="empower-img">
        <img src="/KOF-img1.png" alt="Empowerment" />
      </div>
    </div>
  );
};

export default Empowerment;
