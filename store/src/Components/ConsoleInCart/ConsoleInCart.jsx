import React from "react";

function ConsoleInCart({ quantity = 0 }) {
  return quantity > 0 ? (
    <div className="console__incart">{quantity}</div>
  ) : null;
}

export default ConsoleInCart;
