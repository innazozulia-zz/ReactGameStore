import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import "./CartBlock.css";

function CartBlock() {
  return (
    <div className="cart__block">
      <CgShoppingCart size={25} className="cart__block-icon" />
      <span className="cart__block-price">price $</span>
    </div>
  );
}

export default CartBlock;
