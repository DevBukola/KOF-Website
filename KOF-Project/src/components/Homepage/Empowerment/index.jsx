import React, { useState } from "react";
import "./index.css";
import Donation from "../../Donation";
import Volunteer from "../../Volunteer";

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
      <div className="empower">
        <h1>Empowering Individuals, Transforming Communities.</h1>
        <p>
          We are creating a world where every person, regardless of background
          or ability, has equal access to opportunities and resources.
        </p>
        <button onClick={handleJoinButtonClick}>
          Join us in transforming lives
        </button>
      </div>
      {showOptions && (
        <div className="modal-overlay" onClick={()=> setShowOptions(false)}>
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
      <div className="empower-img">
        <img src="/KOF-img1.png" alt="Empowerment" />
      </div>
    </div>
  );
};

export default Empowerment;
