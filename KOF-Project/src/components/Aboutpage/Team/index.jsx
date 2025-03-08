import React from "react";
import "./index.css";
import { useEffect, useRef } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { teamMembers } from "../../../constants";

const TeamMembers = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);
  return (
    <div id="team-wrapper">
      <div className="team">
        <h1>Meet our team</h1>
        <p>
          At KOF, our dedicated team are committed to making a positive impact
          to the community.
        </p>
      </div>
      <div className="scroll-container" ref={scrollRef}>
        <div className="team-details">
          {[...teamMembers, ...teamMembers].map((member) => (
            <div key={member.id} className="detail">
              <img src={member.img} alt="" />
              <h3 className="name">{member.teamName}</h3>
              <h5 className="post">{member.post}</h5>
              <div className="socials">
                <a href={member.socialMedia.facebook}>
                  <FaFacebook />
                </a>
                <a href={member.socialMedia.twitter}>
                  <FaTwitter />
                </a>
                <a href={member.socialMedia.linkedin}>
                  <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
