import React from "react";
import "./TeamCard.css";
function TeamCard({ img, name, role }) {
  return (
    <div className="team-wrapper">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

export default TeamCard;
