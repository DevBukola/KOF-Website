import "./index.css";
import Volunteer from "../../Volunteer";
import Donation from "../../Donation";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Movement = () => {
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
    <div data-aos="flip-right" className="movement-wrapper">
      <div className="movement-image">
        <img src="/frame4.png" alt="movement" />
          </div>
      <div className="movement-text">
        <h1>Join us as we put a smile on people's face</h1>
        <p>
          Be part of the sefless act. Give your time and energy to help people,
          and make a positive impact in the community.
        </p>
        <button onClick={handleJoinButtonClick}>Be part of the movement</button>
      </div>
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
    </div>
  );
};

export default Movement;
