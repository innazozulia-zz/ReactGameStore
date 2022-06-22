import React from "react";

import { useSelector } from "react-redux";
import OrderGame from "../OrderGame/OrderGame";

import "./Order.css";

function Order() {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = items.reduce((acc, game) => (acc += game.price), 0);
  if (items.length < 1) {
    return <h1> Your cart is empty</h1>;
  }
  return (
    <div className="order">
      <div className="order__left">
        {items.map((game) => (
          <OrderGame game={game} key={game.id} />
        ))}
      </div>
      <div className="order__right">
        <div className="order__total-price">
          <span className="total__price">
            Total: {items.length} game(s) cost(s):
            {totalPrice} $
          </span>
        </div>
      </div>
    </div>
  );
}

export default Order;
