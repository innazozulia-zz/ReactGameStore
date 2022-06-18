import React from "react";

import "./Consoles.css";

function Consoles() {
  return (
    <div className="consoles__wrapper">
      <h1>Choose your console</h1>
      <div className="consoles">
        <div className="console">
          <span className="console__title">XBOX SERIES X 1TB</span>
          <img src="img/consoles/item-1.webp" alt="XBOX SERIES X 1TB" />
        </div>
        <div className="console">
          <span className="console__title">XBOX SERIES S 512GB WHITE</span>
          <img src="img/consoles/item-2.webp" alt="XBOX SERIES S 512GB WHITE" />
        </div>
        <div className="console">
          <span className="console__title">
            XBOX SERIES S 512GB WHITE and 2 gamepads
          </span>
          <img
            src="img/consoles/item-3.webp"
            alt="XBOX SERIES S 512GB WHITE and 2 gamepads"
          />
        </div>
        <div className="console">
          <span className="console__title">
            XBOX SERIES X 1TB and 2 gamepads
          </span>
          <img
            src="img/consoles/item-4.webp"
            alt="XBOX SERIES S 512GB WHITE  and 2 gamepad"
          />
        </div>
        <div className="console">
          <span className="console__title">
            XBOX SERIES X 1TB and 2 gamepads
          </span>
          <img
            src="img/consoles/item-5.webp"
            alt="XBOX SERIES S 512GB WHITE  and 2 gamepad"
          />
        </div>
        <div className="console">
          <span className="console__title">XBOX ONE X BLACK 1TB</span>
          <img src="img/consoles/item-6.webp" alt="XBOX ONE X BLACK 1TB" />
        </div>
        <div className="console">
          <span className="console__title">XBOX ONE S WHITE 500GB</span>
          <img src="img/consoles/item-7.webp" alt="XBOX ONE S WHITE 500GB" />
        </div>

        <div className="console">
          <span className="console__title">
            XBOX ONE CYBERPUNK 2077 LIMITED EDITION X 1TB YELLOW BLUE
          </span>
          <img
            src="img/consoles/item-8.webp"
            alt=" XBOX ONE CYBERPUNK 2077 LIMITED EDITION X 1TB YELLOW BLUE"
          />
        </div>
      </div>
    </div>
  );
}

export default Consoles;
