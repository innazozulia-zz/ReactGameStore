import React from "react";

import { useDispatch } from "react-redux";
import { deleteConsoleFromCart } from "../../redux/slices/consolesSlice";
import ConsoleCover from "../ConsoleCover/ConsoleCover";

import "./OrderConsole.css";

function OrderConsole({ console }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteConsoleFromCart(console.id));
  };

  return (
    <div className="order__item-console">
      <div className="order__cover-console">
        <ConsoleCover image={console.image} />
      </div>
      <div className="order__items-title-console">
        <span className="console__title">{console.title}</span>
      </div>
      <div className="order__item-price">
        <span className="console__price">{console.price} $</span>
        <svg
          onClick={handleClick}
          className="order__item-delete"
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

export default OrderConsole;
