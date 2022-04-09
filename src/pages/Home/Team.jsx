import React from "react";
import team1 from "../../assets/team/team (1).png";
import team2 from "../../assets/team/team (2).png";
import team3 from "../../assets/team/team (3).png";
import team4 from "../../assets/team/team (4).png";
import team5 from "../../assets/team/team (5).png";
function Team() {
  return (
    <div className="team">
      <h1>Core Team</h1>
      <div className="team-grid">
        <div className="team-wrapper">
          <img src={team3} alt="" />
          <h2>David Dotan</h2>
          <p>
            Founder <br /> <span className="hidden">hidden</span>
          </p>
        </div>
        <div className="team-wrapper">
          <img src={team4} alt="" />
          <h2>TiSci</h2>
          <p>
            Founder and <br /> Lead Developer
          </p>
        </div>
        <div className="team-wrapper">
          <img src={team5} alt="" />
          <h2>aaronft</h2>
          <p>
            {" "}
            Project and <br /> Community Manager
          </p>
        </div>
        <div className="team-wrapper">
          <img src={team1} alt="" />
          <h2>Db009</h2>
          <p>
            Unity <br /> Developer
          </p>
        </div>
        <div className="team-wrapper">
          <img src={team2} alt="" />
          <h2>0xTom</h2>
          <p>
            Solidity <br /> Developer
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
