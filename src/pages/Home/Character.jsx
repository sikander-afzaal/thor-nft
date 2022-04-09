import React from "react";
import ch1 from "../../assets/characters/ch1.png";
import ch2 from "../../assets/characters/ch2.png";
import ch3 from "../../assets/characters/ch3.png";
import ch4 from "../../assets/characters/ch4.png";
function Character() {
  return (
    <div className="character">
      <h1>Gods of Asgard</h1>
      <div className="wrapper-grid">
        <div className="wrapper-character">
          <img src={ch1} alt="" />
          <h2>Heimdall</h2>
        </div>
        <div className="wrapper-character">
          <img src={ch4} alt="" />
          <h2>Freya</h2>
        </div>
        <div className="wrapper-character">
          <img src={ch3} alt="" />
          <h2>Thor</h2>
        </div>
        <div className="wrapper-character">
          <img src={ch2} alt="" />
          <h2>Odin</h2>
        </div>
      </div>
    </div>
  );
}

export default Character;
