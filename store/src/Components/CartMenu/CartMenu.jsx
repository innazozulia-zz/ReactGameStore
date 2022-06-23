import React from "react";

import "./CartMenu.css";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import CartConsole from "../CartConsole/CartConsole";

function CartMenu({ items, itemsConsole, onClick }) {
  const totalPrice = items.reduce((acc, game) => (acc += game.price), 0);
  const totalConsole = itemsConsole.reduce(
    (acc, console) => (acc += console.price),
    0
  );

  const games =
    items.length > 0
      ? items.map((game) => (
          <CartItem
            key={game.title}
            price={game.price}
            title={game.title}
            id={game.id}
          />
        ))
      : "Cart is empty";

  const consoles =
    itemsConsole.length > 0
      ? itemsConsole.map((console) => (
          <CartConsole
            price={console.price}
            title={console.title}
            id={console.id}
            key={console.id}
          />
        ))
      : "Cart is empty";

  return (
    <div className="cart__menu">
      <div className="cart__menu-games-list">
        {games}
        {consoles}

        {/* {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.title}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
          : "Your cart is empty"} */}
      </div>

      {items.length > 0 || totalConsole > 0 ? (
        <div className="cart__menu-arrange">
          <div className="cart__menu-total">
            <span>Total:</span>
            <span>{totalPrice + totalConsole} $</span>
          </div>
          <Button
            type="primary"
            size="m"
            onClick={onClick}
            className="order__btn"
          >
            Order
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default CartMenu;
