import React from "react";
import vid from "../../assets/video/about-vid.mp4";

const About = () => {
  return (
    <>
      <div className="traits" id="about">
        <div className="shadow_div"></div>
        <div className="shadow_div sh_div2"></div>
        <div className="t_container">
          <div className="t_left">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div>
              <h2>
                Welcome <br /> Asgardians!
              </h2>
            </div>
            <p>
              Gods of Asgard is a P2E NFT Battle-Royale game rooted in Norse
              myhtology and powered by the Avalanche blockchain. Mysterious
              enemy forces are conspiring against the realms and disrupting the
              balance created by the Gods. Ready your weapons, the epic battle
              for the nine realms begins soon.
            </p>
          </div>
          <div className="t_right">
            <video
              onMouseEnter={(e) => {
                e.target.setAttribute("controls", "controls");
              }}
              onMouseLeave={(e) => {
                e.target.removeAttribute("controls", "controls");
              }}
              controls={false}
              autoPlay
              loop
              playsInline
            >
              <source src={vid} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
