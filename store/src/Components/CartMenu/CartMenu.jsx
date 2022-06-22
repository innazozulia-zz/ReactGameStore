import React from "react";

import "./CartMenu.css";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

function CartMenu({ items, onClick }) {
  const totalPrice = items.reduce((acc, game) => (acc += game.price), 0);
  return (
    <div className="cart__menu">
      <div className="cart__menu-games-list">
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.title}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
          : "Your cart is empty"}
      </div>

      {items.length > 0 ? (
        <div className="cart__menu-arrange">
          <div className="cart__menu-total">
            <span>Total:</span>
            <span>{totalPrice} $</span>
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
