import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import CartBlock from "../CartBlock/CartBlock";

function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__store-title">
          Game Store
        </Link>
      </div>
      <div className="header__cart-btn">
        <CartBlock />
      </div>
    </div>
  );
}

export default Header;
