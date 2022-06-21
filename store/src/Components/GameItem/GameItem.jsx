import React from "react";

import "./GameItem.css";

import { useDispatch } from "react-redux";
import { setCurrentGame } from "../../redux/slices/descriptionSlice";

import { useNavigate } from "react-router-dom";
import GameCover from "../GameCover/GameCover";
import GameBuy from "../GameBuy/GameBuy";
import GameGanre from "../GameGenre/GameGenre";

function GameItem({ game }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const genreItems = game.genres;

  // const routes = [{ path: `/app/${game.title}` }];
  const routes = [{ path: `/${game.title}` }];

  const handelClick = () => {
    console.log(routes);
    dispatch(setCurrentGame(game));
    navigate(`/app/${game.title}`, { replace: true });
    // navigate(`/${game.title}`, { replace: true });
  };
  return (
    <div className="game__item" onClick={handelClick}>
      <GameCover image={game.image} />
      <div className="game__item-ditails">
        <span className="game__item-title">{game.title}</span>
        <div className="game__item-genre">
          {genreItems.map((genre) => (
            <GameGanre genre={genre} key={genre} />
          ))}
        </div>
        {/* <div className="game__item-description">{game.description}</div> */}
        <div className="game__item-btn">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
}

export default GameItem;
