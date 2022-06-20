import React from "react";

import "./CartBlock.css";
import { CgShoppingCart } from "react-icons/cg";
import { useSelector } from "react-redux";
import CartMenu from "../CartMenu/CartMenu";
import ItemsInCart from "../ItemsInCart/ItemsInCart";

function CartBlock() {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = items.reduce((acc, game) => (acc += game.price), 0);
  const [isCartMenuVisible, setIsCartMenuVisible] = React.useState(false);

  return (
    <div className="cart__block">
      <ItemsInCart quantity={items.length} />
      <CgShoppingCart
        size={25}
        className="cart__block-icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart__block-price">{totalPrice} $</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
}

export default CartBlock;
