import React from "react";
import "./PlayCover.css";

function PlayCover({ image = "" }) {
  return (
    <div
      className="play__cover"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
}

export default PlayCover;
