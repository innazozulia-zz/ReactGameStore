import React from "react";

import Console from "../Concole/Console";

import "./Consoles.css";

const consoles = [
  {
    id: 1,
    title: "XBOX SERIES X 1TB",
    image: "img/consoles/item-1.webp",
    price: 980,
  },
  {
    id: 2,
    title: "XBOX SERIES S 512GB WHITE",
    image: "img/consoles/item-2.webp",
    price: 780,
  },
  {
    id: 3,
    title: "  XBOX SERIES S 512GB WHITE and 2 gamepads",
    image: "img/consoles/item-3.webp",
    price: 1000,
  },
  {
    id: 4,
    title: "  XBOX SERIES X 1TB and 2 gamepads",
    image: "img/consoles/item-4.webp",
    price: 1200,
  },
  {
    id: 5,
    title: "  XBOX SERIES X 1TB and 2 gamepads",
    image: "img/consoles/item-5.webp",
    price: 1150,
  },
  {
    id: 6,
    title: "XBOX ONE X BLACK 1TB",
    image: "img/consoles/item-6.webp",
    price: 750,
  },
  {
    id: 7,
    title: "XBOX ONE S WHITE 500G",
    image: "img/consoles/item-7.webp",
    price: 850,
  },
  {
    id: 8,
    title: "XBOX ONE CYBERPUNK 2077 LIMITED EDITION X 1TB YELLOW BLUE",
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
