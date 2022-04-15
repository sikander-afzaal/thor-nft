import React from "react";
import "./NftCard.css";
function NftCard({ img, desc }) {
  return (
    <div className="wrapper-character">
      <img src={img} alt="" />
      <p className="pop-text">{desc}</p>
    </div>
  );
}

export default NftCard;
