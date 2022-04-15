import React from "react";
import hammerLeft from "../../assets/icons/hammer-left.svg";
import hammerRight from "../../assets/icons/hammer-right.svg";
function Siege() {
  return (
    <div className="siege">
      <img src={hammerLeft} alt="" className="hammer-left" />
      <img src={hammerRight} alt="" className="hammer-right" />
      <div className="content box">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <p>
          Mysterious forces have begun laying siege upon the realms of
          Yggdrasil, the tree of worlds. Odin has called upon the Gods of Asgard
          to take the Bifrost and maintain order in the nine realms
        </p>
      </div>
    </div>
  );
}

export default Siege;
