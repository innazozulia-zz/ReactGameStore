import React from "react";

import "./GameGenre.css";

function GameGanre({ genre }) {
  return <span className="game__item-genre-name">{genre}</span>;
}

export default GameGanre;
