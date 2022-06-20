import React from "react";

import "./ItemsInCart.css";

function ItemsInCart({ quantity = 0 }) {
  return quantity > 0 ? <div className="items__incart">{quantity}</div> : null;
}

export default ItemsInCart;
