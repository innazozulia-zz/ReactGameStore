import React from "react";

import "./CartItem.css";

function CartItem({ price, title, id }) {
  return (
    <div className="cart__wrapper">
      <span className="cart__title">{title}</span>
      <span>{price} $</span>
    </div>
  );
}

export default CartItem;
