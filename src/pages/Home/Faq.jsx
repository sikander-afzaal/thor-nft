import React, { useState } from "react";

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
      <div className="heading-div">
        <h1 className="small teko">FAQ</h1>
      </div>
      <p className="desc-faq">Some of your Frequently Asked Questions</p>
      <div className="faq-div">
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
            <p className="answer">May 1st, 2022</p>
          </div>
        </div>
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
              Asgardians will be stored on the Avalanche network and minted
              through a custom smart contract
            </p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={2}
            onClick={clickHandler}
            className={`faq-btn ${open[2] ? "border-radius" : ""}`}
          >
            <p className={`${open[2] ? "active-btn" : ""}`}>How can I play??</p>
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
              You will need Gods of Asgard NFT to play. To obtain an NFT you can
              mint the NFT, purchase on the secondary marketplace NFTrade, or
              receive through scholarship system
            </p>
          </div>
        </div>

        {
          // when you add a new faq make sure to increment the value in the brackets
        }
      </div>
    </div>
  );
}

export default Faq;
