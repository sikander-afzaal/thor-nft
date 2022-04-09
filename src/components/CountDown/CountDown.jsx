import React from "react";
import "./CountDown.css";
const CountDown = () => {
  return (
    <>
      <div className="countdown">
        <div>
          <span>00</span>
          <h2>Days</h2>
        </div>
        <div>
          <strong>:</strong>
        </div>
        <div>
          <span>00</span>
          <h2>Hours</h2>
        </div>
        <div>
          <strong>:</strong>
        </div>
        <div>
          <span>00</span>
          <h2>Minutes</h2>
        </div>
        <div>
          <strong>:</strong>
        </div>
        <div>
          <span>00</span>
          <h2>Seconds</h2>
        </div>
      </div>
    </>
  );
};

export default CountDown;
