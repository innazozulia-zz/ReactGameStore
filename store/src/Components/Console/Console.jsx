import React from "react";

import { useDispatch, useSelector } from "react-redux";
import ConsoleCover from "../ConsoleCover/ConsoleCover";
import Button from "../Button/Button";
import {
  setConsoleInCart,
  deleteConsoleFromCart,
} from "../../redux/slices/consolesSlice";

import "./Console.css";

function Concole({ console }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.console.consoleInCart);
  const isConsoleInCart = items.some((items) => items.id === console.id);
  const handelClick = (e) => {
    e.stopPropagation();
    if (isConsoleInCart) {
      dispatch(deleteConsoleFromCart(console.id));
    } else {
      dispatch(setConsoleInCart(console));
    }
  };

  return (
    <div>
      <h1 className="console__title">{console.title}</h1>
      <div>
        <ConsoleCover image={console.image} />
      </div>
      <div className="console__price">{console.price} $</div>
      <Button
        type={isConsoleInCart ? "secondary" : "primary"}
        onClick={handelClick}
        // className="console__buy"
      >
        {isConsoleInCart ? "Your conlose in cart" : "Buy console"}
      </Button>
    </div>
  );
}

export default Concole;
