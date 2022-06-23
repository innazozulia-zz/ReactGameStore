import React from "react";

import Console from "../Console/Console";

import "./Consoles.css";

const consoles = [
  {
    id: 1,
    title: "Xbox series x 1TB",
    image: "img/consoles/item-1.webp",
    price: 980,
  },
  {
    id: 2,
    title: "Xbox series S 512GB white",
    image: "img/consoles/item-2.webp",
    price: 780,
  },
  {
    id: 3,
    title: "  Xbox series S 512GB white and 2 gamepads",
    image: "img/consoles/item-3.webp",
    price: 1000,
  },
  {
    id: 4,
    title: "  Xbox Sseries X 1TB and 2 gamepads",
    image: "img/consoles/item-4.webp",
    price: 1200,
  },
  {
    id: 5,
    title: "  Xbox series X 1TB and 2 gamepads",
    image: "img/consoles/item-5.webp",
    price: 1150,
  },
  {
    id: 6,
    title: "Xbox one X black 1TB",
    image: "img/consoles/item-6.webp",
    price: 750,
  },
  {
    id: 7,
    title: "Xbox one S white 500G",
    image: "img/consoles/item-7.webp",
    price: 850,
  },
  {
    id: 8,
    title: "Xbox one Cyberpunk 2077 Limoted Edition X 1TB ",
    image: "img/consoles/item-8.webp",
    price: 1250,
  },
];

function Consoles() {
  return (
    <div className="consoles__wrapper">
      <h1>Choose your console</h1>
      <div className="consoles">
        {consoles.map((console) => (
          <Console console={console} key={console.id} />
        ))}
      </div>
    </div>
  );
}

export default Consoles;
