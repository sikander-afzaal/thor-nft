import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import discord from "../../assets/icons/discord.svg";
import twitter from "../../assets/icons/twitter.svg";
import circles from "../../assets/icons/circles.svg";
import Fade from "react-reveal/Fade";
function Footer() {
  return (
    <Fade bottom>
      <div className="footer">
        <div className="logo-div">
          <img src={logo} alt="" />
        </div>
        <h1>Join The Community</h1>

        <div className="foot-nav">
          <a href="#" className="foot-links">
            Home
          </a>
          <a href="#" className="foot-links">
            About
          </a>
          <a href="#" className="foot-links">
            Roadmap
          </a>
          <a href="#" className="foot-links">
            Team
          </a>
          <a href="#" className="foot-links">
            Faq
          </a>
        </div>
        <h2>Powered by Thor Financial</h2>
        <div className="verified">
          <FontAwesomeIcon icon={faCheck} />
          <p>verified on etherscan</p>
        </div>
        <div className="social-div">
          <img src={discord} alt="" />
          <img src={twitter} alt="" />
          <img src={circles} alt="" />
        </div>
      </div>
    </Fade>
  );
}

export default Footer;
