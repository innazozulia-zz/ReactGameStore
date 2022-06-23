import React from "react";

import { useDispatch, useSelector } from "react-redux";

import "./GameBuy.css";
import Button from "../Button/Button";
import {
  setItemInCart,
  deleteItemFromCart,
} from "../../redux/slices/gameSlice";

function GameBuy({ game }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);

  const handelClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };

  return (
    <div className="game__buy">
      <span className="game__buy-price">{game.price} $</span>
      <Button
        type={isItemInCart ? "secondary" : "primary"}
        onClick={handelClick}
      >
        {isItemInCart ? "Your game in cart" : "Buy"}
      </Button>
    </div>
  );
}

export default GameBuy;
