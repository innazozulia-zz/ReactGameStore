import React from "react";

import "./GameItem.css";

import GameCover from "../GameCover/GameCover";
import GameBuy from "../GameBuy/GameBuy";
import GameGenre from "../GameGenre/GameGenre";

function GameItem({ game }) {
  return (
    <div className="game__item">
      <GameCover image={game.image} />
      <div className="game__item-ditails">
        <span className="game__item-title">{game.title}</span>
        <div className="game__item-genre">{game.genres}</div>
        {/* <div className="game__item-genre">
          {game.genres.map((genre) => (
            <GameGenre genre={genre} />
          ))}
        </div> */}
        {/* <div className="game__item-description">{game.description}</div> */}
        <div className="game__item-btn">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
}

export default GameItem;
