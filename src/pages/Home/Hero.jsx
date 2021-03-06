import React from "react";
import CountDown from "../../components/CountDown/CountDown";
// assets
import discord from "../../assets/icons/discord.svg";
import twitter from "../../assets/icons/twitter.svg";
import circles from "../../assets/icons/circles.svg";
import logo from "../../assets/images/logo.svg";
import Fade from "react-reveal/Fade";
const Hero = () => {
  return (
    <>
      <div id="home" className="hero">
        <Fade top>
          <img src={logo} alt="logo " className="logo-hero" />
        </Fade>
        <Fade bottom big cascade>
          <div className="hero_container">
            <CountDown />

            <button className="mint">
              <p>MINT</p>
            </button>

            <div className="social-div-hero">
              <a target={"blank"} href="https://discord.gg/thornodes">
                <img src={discord} alt="..." />
              </a>
              <a target={"blank"} href="https://twitter.com/_ThorFinancial">
                <img src={twitter} alt="..." />
              </a>
              <a target={"blank"} href="https://thornodes.medium.com/">
                <img src={circles} alt="..." />
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Hero;
