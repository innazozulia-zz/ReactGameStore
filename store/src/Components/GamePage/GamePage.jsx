import React from "react";

import { useSelector } from "react-redux";
import GameBuy from "../GameBuy/GameBuy";
import GameCover from "../GameCover/GameCover";
import GameGanre from "../GameGenre/GameGenre";

import "./GamePage.css";

function GamePage() {
  const game = useSelector((state) => state.games.currentGame);

  if (!game) return null;

  return (
    <div className="game__page">
      <h1 className="game__page-title">{game.title}</h1>

      <div className="game__page-left">
        <iframe
          width="90%"
          height="400px"
          src={game.video}
          title="YouTube Video"
          frameBorder="0"
        ></iframe>
      </div>
      <div className="game__page-right">
        <GameCover image={game.image} />
        <p className="game__page-description">{game.description}</p>
        <p className="game__page-makrs">
          {game.genres.map((genre) => (
            <GameGanre genre={genre} key={genre} />
          ))}
        </p>
        <div className="game__page-buy">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
}

export default GamePage;
