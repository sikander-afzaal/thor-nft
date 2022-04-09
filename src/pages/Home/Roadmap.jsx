import React from "react";
import hammer from "../../assets/icons/hammer.svg";
function Roadmap() {
  // let milkRef = React.useRef();
  let bottle = React.useRef();
  let lineRef = React.useRef();

  let box = React.useRef();
  let box2 = React.useRef();
  let box3 = React.useRef();
  let box4 = React.useRef();
  let box5 = React.useRef();

  React.useEffect(() => {
    const handler = () => {
      const bottleTop = bottle.current.getBoundingClientRect().top;
      const boxTop = box.current.getBoundingClientRect().top;
      const box2Top = box2.current.getBoundingClientRect().top;
      const box3Top = box3.current.getBoundingClientRect().top;
      const box4Top = box4.current.getBoundingClientRect().top;
      if (bottleTop > boxTop) {
        // milkRef.current.style.height = "20px";
      } else {
        box.current.style.backgroundColor = "transparent";
        // milkRef.current.style.height = "10px";
      }

      if (bottleTop > box2Top) {
        // milkRef.current.style.height = "50px";
      }

      if (bottleTop > box3Top) {
        // milkRef.current.style.height = "80px";
      }

      if (bottleTop > box4Top) {
        // milkRef.current.style.height = "90px";
      }
    };
    document.addEventListener("scroll", handler);

    return () => {
      document.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div id="roadmap" className="roadmap-wrapper">
      <div className="container-wrapper">
        <div className="roadmap">
          <h1>Roadmap</h1>
          <div className="roadmap-content-wrapper">
            <div className="roadmap-content" ref={lineRef}>
              <div className="roadmap-box bot" ref={bottle}>
                <div className="bottle">
                  <img src={hammer} alt="" />
                </div>
              </div>

              <div className="roadmap-box" ref={box}>
                <div className="roadmap-box-content left">
                  <h1 className="fs-48px teko pink weight-7 lh-42px mb-10px">
                    Q1
                  </h1>
                  <p className="fs-18px dark-blue lh-26px weight-5">
                    Announcements
                  </p>
                  <ul>
                    <li>Gameplay</li>
                    <li>Mint</li>
                    <li>Tokenomics</li>
                  </ul>
                </div>
              </div>
              <div className="roadmap-box" ref={box2}>
                <div className="roadmap-box-content right">
                  <h1 className="fs-48px teko pink weight-7 lh-42px mb-10px">
                    Q2
                  </h1>
                  <p className="fs-18px dark-blue lh-26px weight-5">
                    White paper
                  </p>
                  <p className="fs-18px dark-blue lh-26px weight-5">
                    Private beta
                  </p>
                  <p className="fs-18px dark-blue lh-26px weight-5">NFT mint</p>
                  <p className="fs-18px dark-blue lh-26px weight-5">
                    Game release
                  </p>
                </div>
              </div>
              <div className="roadmap-box" ref={box3}>
                <div className="roadmap-box-content left">
                  <h1 className="fs-48px teko pink weight-7 lh-42px mb-10px">
                    Q3
                  </h1>
                  <p className="fs-18px dark-blue lh-26px weight-5">
                    PvP update
                  </p>
                  <p className="fs-18px dark-blue lh-26px weight-5">
                    Balance changes
                  </p>
                </div>
              </div>
              <div className="roadmap-box" ref={box4}>
                <div className="roadmap-box-content right">
                  <h1 className="fs-48px teko pink weight-7 lh-42px mb-10px">
                    Q4
                  </h1>
                  <p className="fs-18px dark-blue lh-26px weight-5">
                    VR update
                  </p>
                  <p className="fs-18px dark-blue lh-26px weight-5">
                    and more...
                  </p>
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
