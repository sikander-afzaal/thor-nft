import React from "react";
// React Reveal Library
// import RubberBand from "react-reveal/RubberBand";
// import Fade from "react-reveal/Fade";
// Assets
// import traitImg from "../../assets/traits.jpg";
import artImg from "../../assets/images/abt_art.png";

const About = () => {
  return (
    <>
      <div className="traits" id="traits">
          <div className="shadow_div"></div>
          <div className="shadow_div sh_div2"></div>
        <div className="t_container">
          <div className="t_left">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div>
              {/* <RubberBand duration={1200} delay={1000}> */}
                <h2>Welcome <br /> Asgardians! </h2>
              {/* </RubberBand> */}
              {/* <img loading="lazy" className="down" src={down} alt="down" /> */}
            </div>
            {/* <Fade duration={1200} delay={1000}> */}
              <p>
              Ready your weapons, the battle for the 9 realms will begin on May 1st, 2022. Gods of Asgard is a P2E NFT Battle-Royale game built on the Avalanche blockchain.
              </p>
            {/* </Fade> */}
          </div>
          <div className="t_right">
            <img loading="lazy" src={artImg} alt="..." />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
