import React from "react";

import { BsPlay } from "react-icons/bs";
import Play from "../Play/Play";

import "./PlayNow.css";

const playNow = [
  {
    id: 1,
    title: "Assassin's Creed Valhalla",
    image: "img/playNow/Valhalla.jpeg",
    discription:
      "In Assassin's Creed Valhalla, become Eivor, a legendary Viking raider on a quest for glory. Explore a dynamic and beautiful open world set against the brutal backdrop of England's Dark Ages. Raid your enemies, grow your settlement, and build your political power in the quest to earn a place among the gods in Valhalla.",
  },
  {
    id: 5,
    title: "A Memoir Blue ",
    image: "img/playNow/blue.jpeg",
    discription:
      "Shadowrun Returns is a tactical role-playing game developed and published by Harebrained Schemes. It takes place in the science fantasy setting of the Shadowrun tabletop role-playing game.",
  },
  {
    id: 3,
    title: "Teenage Mutant Ninja Turtles: Shredder's Revenge",
    image: "img/playNow/turtles.jpeg",
    discription:
      "From Cloisters Interactive, A Memoir Blue is an interactive poem about a superstar athlete and the all-encompassing love between mother and daughter. A unique aesthetic combining hand-drawn and 3D art brings Miriam's magical-realist journey to life, as she swims into the depths of her memories.",
  },
  {
    id: 4,
    title: "OMORI",
    image: "img/playNow/omori.jpeg",
    discription:
      "Omori (stylized as OMORI) is a 2020 role-playing video game developed and published by indie studio Omocat. In the story, the player controls a hikikomori boy named Sunny and his dream world alter-ego Omori. They explore both the real world and a surreal dream world to overcome their fears and secrets.",
  },
  {
    id: 2,
    title: "Shadowrun Returns",
    image: "img/playNow/Returns.jpeg",
    discription:
      "Shadowrun Returns is a tactical role-playing game developed and published by Harebrained Schemes. It takes place in the science fantasy setting of the Shadowrun tabletop role-playing game.",
  },
];

function PlayNow() {
  return (
    <div>
      <h1>
        Play now <BsPlay size={18} />
      </h1>

      <div className="play__wrapper">
        {playNow.map((play) => (
          <Play play={play} key={play.id} />
        ))}
      </div>
    </div>
  );
}

export default PlayNow;
