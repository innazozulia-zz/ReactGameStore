import React from "react";

import { useDispatch } from "react-redux";
import { deleteConsoleFromCart } from "../../redux/slices/consolesSlice";

import "./CartConsole.css";

function CartConsole({ price, title, id }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteConsoleFromCart(id));
  };
  return (
    <div className="console__wrapper">
      <span className="cartconsole__title">{title}</span>

      <div className="close">
        <span className="cartconsole__price">{price} $</span>
        <svg
          onClick={handleClick}
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          path
          fill="#fff"
        >
          <g data-name="Layer 2">
            <g data-name="close">
              <rect
                width="24"
                height="24"
                transform="rotate(180 12 12)"
                opacity="0"
              />
              <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default CartConsole;
