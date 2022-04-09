import React from "react";
import gods_of_asgard from "../../assets/video/gods_of_asgard.mp4";
import CountDown from "../../components/CountDown/CountDown";
// assets
import board from "../../assets/images/board.png";
import discord from "../../assets/icons/discord-grey.svg";
import twitter from "../../assets/icons/twitter-grey.svg";
import circles from "../../assets/icons/circles-grey.svg";
import logo from "../../assets/images/logo.png";
const Hero = () => {
  return (
    <>
      <div id="home" className="hero">
        <img src={logo} alt="logo " className="logo-hero" />
        <div className="overlay"></div>
        <div className="hero_container">
          <CountDown />
          <div className="video_content">
            <video controls={false} autoPlay loop muted playsInline>
              <source src={gods_of_asgard} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="board">
          <img src={board} alt="..." />
          <div>
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
