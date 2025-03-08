import React, { useState } from "react";
import "./index.css";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Donation from "../Donation";

function Navigation() {
  const location = useLocation();
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const openDonationModal = () => {
    setShowDonationModal(true);
  };

  const closeDonationModal = () => {
    setShowDonationModal(false);
  };

  const toggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen((prev) => !prev);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="navigation-container">
      <div className="logo-wrapper">
        <Link to="/home">
          <img src="/logo.png" alt="KOF-logo" />
        </Link>
      </div>
      <div
        className={`list-wrapper ${isHamburgerMenuOpen ? "show" : ""}`}
        onClick={() => setIsHamburgerMenuOpen(false)}
      >
        <ul className="navigation-list">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/about-us" ? "active" : ""}>
            <Link to="/about-us">About Us</Link>
          </li>

          <li
            className={location.pathname.startsWith("/program") ? "active" : ""}
          >
            <Link to="/program">Our Program</Link>
            {/* <div
              className="dropdown-container"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              <Link to="/program">Our Program</Link>
              {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div> */}
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className="donation-wrapper" onClick={openDonationModal}>
          <p className="donation-btn">Donate</p>
        </div>
      </div>

      {showDonationModal && <Donation onClose={closeDonationModal} />}
      <div className="mobile-hamburger" onClick={toggleHamburgerMenu}>
        <div
          className={`hamburger hamburger1 ${
            isHamburgerMenuOpen ? "active" : ""
          }`}
        ></div>
        <div
          className={`hamburger hamburger2 ${
            isHamburgerMenuOpen ? "active" : ""
          }`}
        ></div>
        <div
          className={`hamburger hamburger3 ${
            isHamburgerMenuOpen ? "active" : ""
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Navigation;
