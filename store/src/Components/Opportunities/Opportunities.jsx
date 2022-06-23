import React from "react";
import { Link } from "react-router-dom";

import "./Opportunities.css";

import { IoGameControllerOutline } from "react-icons/io5";
import { SiXbox } from "react-icons/si";
import { RiUserLine } from "react-icons/ri";
import { BsPlay } from "react-icons/bs";
import { FaTicketAlt } from "react-icons/fa";

function Opportunities() {
  return (
    <div className="opportunities__wrapper">
      <Link to="/">
        <div className="links games">
          <IoGameControllerOutline size={25} />
          <span>games</span>
        </div>
      </Link>
      <Link to="game__pass">
        <div className="links game__pass">
          <FaTicketAlt size={25} />
          <span>game pass</span>
        </div>
      </Link>

      <Link to="consoles">
        <div className="links consoles">
          <SiXbox size={25} />
          <span>consoles</span>
        </div>
      </Link>
      <Link to="play_now">
        <div className="links play">
          <BsPlay size={25} />
          <span>play</span>
        </div>
      </Link>
      <Link to="sing__in">
        <div className="links sing__in">
          <RiUserLine size={25} />
          <span>sing in</span>
        </div>
      </Link>
    </div>
  );
}

export default Opportunities;
