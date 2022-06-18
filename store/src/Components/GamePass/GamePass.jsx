import React from "react";
import { SiXbox } from "react-icons/si";

import "./GamePass.css";

function GamePass() {
  return (
    <div className="game__pass-wrapper">
      <div className="game__pass-title">
        <SiXbox size={45} />
        <span>Game Pass</span>
      </div>
      <div className="game__pas-description">
        <span>
          PC and Xbox Game Pass logo Play hundreds of high-quality PC and Xbox
          games with friends including new day one titles and get an EA Play
          membership. With games added all the time, you always have something
          new to play.
        </span>
        <p>Join now to get your first 3 months for $1</p>
        <button className="btn__join">JOIN for 1$</button>
        <i>
          Subscription continues automatically at $9.99/mo. unless cancelled
          through your Microsoft Account. See terms. Get help here.
        </i>
      </div>
      <div className="game__pass-add">
        <p>Discover your next favorite game</p>
        <div className="game__pass-games">
          <div className="game__pass-game">
            <img src="img/gp/i-1.png" alt="game" />
          </div>
          <div className="game__pass-game">
            <img src="img/gp/i-2.png" alt="game" />
          </div>
          <div className="game__pass-game">
            <img src="img/gp/i-3.png" alt="game" />
          </div>
          <div className="game__pass-game">
            <img src="img/gp/i-4.png" alt="game" />
          </div>
          <div className="game__pass-game">
            <img src="img/gp/i-6.png" alt="game" />
          </div>
          <div className="game__pass-game">
            <img src="img/gp/i-7.png" alt="game" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePass;
