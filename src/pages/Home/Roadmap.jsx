import React from "react";
import hammer from "../../assets/icons/hammer.svg";
function Roadmap() {
  let Thorhammer = React.useRef();
  let lineRef = React.useRef();

  let box = React.useRef();
  let box2 = React.useRef();
  let box3 = React.useRef();

  React.useEffect(() => {
    const handler = () => {};
    document.addEventListener("scroll", handler);

    return () => {
      document.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div id="road" className="roadmap-wrapper">
      <div className="container-wrapper">
        <div className="roadmap">
          <h1>Roadmap</h1>
          <div className="roadmap-content-wrapper">
            <div className="roadmap-content" ref={lineRef}>
              <div className="roadmap-box bot" ref={Thorhammer}>
                <div className="hammer">
                  <img src={hammer} alt="" />
                </div>
              </div>

              <div className="roadmap-box" ref={box}>
                <div className="roadmap-box-content left">
                  <h1 className="margin-bot">Phase 1</h1>

                  <div className="right-box">
                    <p>Development and Launch</p>
                    <p>Full model upgrades</p>
                    <p>NFT Mint</p>
                    <p>Playable Demo</p>
                    <p>Whitepaper</p>
                    <p>Native Token Launch</p>
                    <p>Renting Marketplace</p>
                    <p>Game Launch</p>
                  </div>
                </div>
              </div>
              <div className="roadmap-box" ref={box2}>
                <div className="roadmap-box-content right">
                  <h1>Phase 2</h1>

                  <div className="right-box">
                    <p>PvP Update</p>
                    <p>Balance changes</p>
                    <p>Further game improvements</p>
                  </div>
                </div>
              </div>
              <div className="roadmap-box" ref={box3}>
                <div className="roadmap-box-content left">
                  <h1>Phase 3</h1>

                  <div className="right-box">
                    <p>Future</p>
                    <p>VR update</p>
                    <p>and more...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
