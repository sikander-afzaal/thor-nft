import React from "react";
import hammerLeft from "../../assets/icons/hammer-left.svg";
import hammerRight from "../../assets/icons/hammer-right.svg";
import Fade from "react-reveal/Fade";
function Siege() {
  return (
    <div className="siege">
      <Fade left>
        <img src={hammerLeft} alt="" className="hammer-left" />
      </Fade>
      <Fade right>
        <img src={hammerRight} alt="" className="hammer-right" />
      </Fade>
      <Fade delay={1000}>
        <div className="content box">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <p>
            Mysterious forces have begun laying siege upon the realms of
            Yggdrasil, the tree of worlds. Odin has called upon the Gods of
            Asgard to take the Bifrost and maintain order in the nine realms
          </p>
        </div>
      </Fade>
    </div>
  );
}

export default Siege;
