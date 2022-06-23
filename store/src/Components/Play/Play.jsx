import React from "react";

import PlayCover from "../PlayCover/PlayCover";

import "./Play.css";

function Play({ play }) {
  return (
    <div>
      <div className="play__now-title">{play.title}</div>
      <div>
        <PlayCover image={play.image} />
      </div>
      <div className="play__now-discription">{play.discription}</div>
      <div>
        <button className="btn-play">Play now</button>
      </div>
    </div>
  );
}

export default Play;
