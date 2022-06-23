import React from "react";

import "./ConsoleCover.css";

function ConsoleCover({ image = "" }) {
  return (
    <div
      className="console__cover"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
}

export default ConsoleCover;
