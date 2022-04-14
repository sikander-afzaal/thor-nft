import React from "react";
import CountDown from "../../components/CountDown/CountDown";
// assets
import discord from "../../assets/icons/discord.svg";
import twitter from "../../assets/icons/twitter.svg";
import circles from "../../assets/icons/circles.svg";
import logo from "../../assets/images/logo.png";
const Hero = () => {
  return (
    <>
      <div id="home" className="hero">
        <img src={logo} alt="logo " className="logo-hero" />

        <div className="hero_container">
          <CountDown />
          <button className="mint">MINT</button>

          <div className="social-div-hero">
            <a href="#">
              <img src={discord} alt="..." />
            </a>
            <a href="#">
              <img src={twitter} alt="..." />
            </a>
            <a href="#">
              <img src={circles} alt="..." />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
