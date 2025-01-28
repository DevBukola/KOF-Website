import React from "react";
import "./index.css";
import Donation from "../../Donation";
import Volunteer from "../../Volunteer";
import { useState } from "react";

const Contribution = () => {
  const [donateSelected, setDonateSelected] = useState(false);
  const [volunteerSelected, setVolunteerSelected] = useState(false);

  const handleDonateClick = () => {
    setDonateSelected(true);
    setVolunteerSelected(false);
  };

  const handleVolunteerClick = () => {
    setVolunteerSelected(true);
    setDonateSelected(false);
  };

  const closeModal = () => {
    setDonateSelected(false);
    setVolunteerSelected(false);
  };
  return (
    <div id="background-container">
      <div className="background">
        <div className="cta-wrapper">
          <h2 className="contribute">
            You can contribute to provide a place for children with special
            needs!
          </h2>
          <div className="cta">
            <button className="volunteer" onClick={handleVolunteerClick}>
              Join as a volunteer
            </button>
            <button className="donate" onClick={handleDonateClick}>
              Donate
            </button>
          </div>
          {donateSelected && <Donation onClose={closeModal} />}
          {volunteerSelected && <Volunteer onClose={closeModal} />}
        </div>
      </div>
    </div>
  );
};

export default Contribution;
