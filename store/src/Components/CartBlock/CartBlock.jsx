import React from "react";

import "./CartBlock.css";
import { CgShoppingCart } from "react-icons/cg";
// import { GiConsoleController } from "react-icons/gi";
import { useSelector } from "react-redux";
import CartMenu from "../CartMenu/CartMenu";
import ItemsInCart from "../ItemsInCart/ItemsInCart";
// import ConsoleInCart from "../ConsoleInCart/ConsoleInCart";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

function CartBlock() {
  const items = useSelector((state) => state.cart.itemsInCart);
  const itemsConsole = useSelector((state) => state.console.consoleInCart);

  const totalConsole = itemsConsole.reduce(
    (acc, console) => (acc += console.price),
    0
  );
  const totalPrice = items.reduce((acc, game) => (acc += game.price), 0);
  const [isCartMenuVisible, setIsCartMenuVisible] = React.useState(false);
  const navigate = useNavigate();

  const handelClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate(`/order`, { replace: true });
  }, [navigate]);

  return (
    <div className="cart__block">
      <ItemsInCart quantity={items.length + itemsConsole.length} />
      <CgShoppingCart
        size={25}
        className="cart__block-icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 || totalConsole > 0 ? (
        <span className="cart__block-price">{totalPrice + totalConsole} $</span>
      ) : null}
      {isCartMenuVisible && (
        <CartMenu
          items={items}
          itemsConsole={itemsConsole}
          onClick={handelClick}
        />
      )}
    </div>
  );
}

export default CartBlock;
