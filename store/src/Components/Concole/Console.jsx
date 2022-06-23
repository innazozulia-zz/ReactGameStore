import React from "react";
import ConsoleCover from "../ConsoleCover/ConsoleCover";

import "./Console.css";

function Concole({ console }) {
  return (
    <div>
      <h1 className="console__title">{console.title}</h1>
      <div>
        <ConsoleCover image={console.image} />
      </div>
      <div className="console__price">{console.price} $</div>
      <button className="console__buy">Buy now</button>
    </div>
  );
}

export default Concole;
