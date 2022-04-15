import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faMinusSquare,
} from "@fortawesome/free-regular-svg-icons";
function Faq() {
  // if you want to add more questions just add another false here or vice versa
  const [open, setOpen] = useState([false, false, false]);

  //function to check which faq is opened
  const clickHandler = (e) => {
    const num = e.target.dataset.num;
    setOpen((prev) => {
      let arr = [...prev];
      let newArr = arr.map((elem, index) => {
        if (index == num) {
          return !elem;
        } else {
          return elem;
        }
      });
      return newArr;
    });
  };
  return (
    <div id="faq" className="faq">
      <Fade top duration={1500}>
        <div className="heading-div">
          <h1 className="small">Frequently Asked Questions</h1>
        </div>
      </Fade>

      <div className="faq-div">
        <Rotate bottom left duration={1200} delay={100}>
          <div className="faq-q-div">
            <div
              data-num={0}
              onClick={clickHandler}
              className={`faq-btn ${open[0] ? "border-radius" : ""}`}
            >
              <p className={`${open[0] ? "active-btn" : ""}`}>
                When does Gods of Asgard launch?
              </p>
              {open[0] ? (
                <FontAwesomeIcon
                  className={`${open[0] ? "active-btn" : ""}`}
                  icon={faMinusSquare}
                />
              ) : (
                <FontAwesomeIcon icon={faPlusSquare} />
              )}
            </div>
            <div className={`faq-answer ${open[0] ? "active" : ""}`}>
              <p className="answer">May 31st, 2022 </p>
            </div>
          </div>
        </Rotate>
        <Rotate bottom left duration={1200} delay={500}>
          {" "}
          <div className="faq-q-div">
            <div
              data-num={1}
              onClick={clickHandler}
              className={`faq-btn ${open[1] ? "border-radius" : ""}`}
            >
              <p className={`${open[1] ? "active-btn" : ""}`}>
                What blockchain will Gods of Asgard be launched on?
              </p>
              {open[1] ? (
                <FontAwesomeIcon
                  className={`${open[1] ? "active-btn" : ""}`}
                  icon={faMinusSquare}
                />
              ) : (
                <FontAwesomeIcon icon={faPlusSquare} />
              )}
            </div>
            <div className={`faq-answer ${open[1] ? "active" : ""}`}>
              <p className="answer">
                Avalanche blockchain. All of our custom smart contracts will be
                audited by CertiK
              </p>
            </div>
          </div>
        </Rotate>
        <Rotate bottom left duration={1200} delay={1000}>
          {" "}
          <div className="faq-q-div">
            <div
              data-num={2}
              onClick={clickHandler}
              className={`faq-btn ${open[2] ? "border-radius" : ""}`}
            >
              <p className={`${open[2] ? "active-btn" : ""}`}>
                How can i play?
              </p>
              {open[2] ? (
                <FontAwesomeIcon
                  className={`${open[2] ? "active-btn" : ""}`}
                  icon={faMinusSquare}
                />
              ) : (
                <FontAwesomeIcon icon={faPlusSquare} />
              )}
            </div>
            <div className={`faq-answer ${open[2] ? "active" : ""}`}>
              <p className="answer">
                To play Gods of Asgard, you need at least one of the four God
                NFT's from our collection. To obtain an NFT you can mint the NFT
                through our dApp, purchase on the secondary marketplace NFTrade,
                or rent an NFT through our renting marketplace.
              </p>
            </div>
          </div>
        </Rotate>

        {
          // when you add a new faq make sure to increment the value in the brackets
        }
      </div>
    </div>
  );
}

export default Faq;
