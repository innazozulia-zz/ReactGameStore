import React from "react";

import "./SingIn.css";

function SingIn() {
  return (
    <div className="sing__in-form">
      <form>
        <div className="header__form">Login </div>
        <input type="text" placeholder="User" id="userName" name="email" />

        <input
          type="password"
          placeholder="Secret code"
          id="password"
          name="password"
        />
        <input className="btnForm bgblue" type="submit" value="Sing in" />
      </form>
    </div>
  );
}

export default SingIn;
