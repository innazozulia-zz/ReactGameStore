import React from "react";

import { useSelector } from "react-redux";
import OrderGame from "../OrderGame/OrderGame";
import OrderConsole from "../OrderConsole/OrderConsole";

import "./Order.css";

function Order() {
  const items = useSelector((state) => state.cart.itemsInCart);
  const itemsConsole = useSelector((state) => state.console.consoleInCart);

  const totalPrice = items.reduce((acc, game) => (acc += game.price), 0);

  if (items.length < 1 || itemsConsole.length < 1) {
    return <h1> Your cart is empty</h1>;
  }

  const totalConsole = itemsConsole.reduce(
    (acc, console) => (acc += console.price),
    0
  );

  const gameItems = items.map((game) => (
    <OrderGame game={game} key={game.id} console={console} />
  ));

  const consoleItems = itemsConsole.map((console) => (
    <OrderConsole console={console} key={console.id} />
  ));

  return (
    <div className="order">
      <div className="order__left">
        {gameItems}
        {consoleItems}
      </div>
      <div className="order__right">
        <div className="order__total-price">
          <span>
            Total : {items.length} {items.length === 1 ? "game" : "games"}{" "}
            {/* Total: {items.length}
            {items.length < 1 ? "" : items.length === 1 ? "game" : "games"} */}
            {itemsConsole.length}{" "}
            {itemsConsole.length === 1 ? "console" : "consoles"}
            {""} cost {totalPrice + totalConsole} {""} $
          </span>
        </div>
      </div>
    </div>
  );
}

export default Order;
