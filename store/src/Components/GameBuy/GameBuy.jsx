import React from "react";

import "./GameBuy.css";

import Button from "../Button/Button";

function GameBuy({ game }) {
  return (
    <div className="game__buy">
      <span className="game__buy-price">{game.price} $</span>
      <Button type="primary" onClick={() => null}>
        Buy
      </Button>
    </div>
  );
}

export default GameBuy;
