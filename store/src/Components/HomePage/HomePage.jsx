import React from "react";
import "./styles.css";

import GameItem from "../GameItem/GameItem";
// import Add from "../Add/Add";

const games = [
  {
    image: "img/Halo.jpeg",
    title: "Halo",
    genres: ["Shooter"],
    video: "https://www.youtube.com/watch?v=Rh_NXwqFvHc",
    price: 42,
    id: 1,
    description:
      "Halo Infinite is a 2021 first-person shooter game developed by 343 Industries and published by Xbox Game Studios. It is the sixth mainline entry in the Halo series, and the third in the 'Reclaimer Saga' following Halo 5: Guardians (2015)",
  },
  {
    image: "img/Hellblade.jpeg",
    title: "Senua's Saga: Hellblade",
    genres: ["Action Adventure", "RPG"],
    video: "https://www.youtube.com/watch?v=Rh_NXwqFvHc",
    price: 65,
    id: 2,
    description:
      "We imagine that the second game will be about her continuing to deal with her psychosis, which would take us to a bunch of Norse mythological settings. It's entirely possible that the story of Senua's Saga: Hellblade II will be about the titular character getting vengeance on the Norsemen who killed",
  },
  {
    image: "img/Dishonored.jpeg",
    title: "Dishonored",
    genres: ["Action Adventure", "Shooter"],
    video: "https://www.youtube.com/watch?v=E1HlYTukh9A",
    price: 45,
    id: 3,
    description:
      "Dishonored is an action-adventure game played from a first-person perspective with an emphasis on stealth action and the use of gadgets and the environment to eliminate opposing forces.",
  },
  {
    image: "img/Minecraft.png",
    title: "Minecraft",
    genres: ["Sandbox", "Action Adventure"],
    video: "https://www.youtube.com/watch?v=MmB9b5njVbA",
    price: 48,
    id: 4,
    description:
      "Minecraft is a 3-D computer game where players can build anything. The game which has been described as like an 'online Lego' involves building blocks and creating structures across different environments and terrains. Set in a virtual world the game involves resource gathering, crafting items, building, and combat.",
  },
  {
    image: "img/Fallout_4.webp",
    title: "Fallout 4",
    genres: ["Action role-playing", "Action Adventure"],
    video: "https://www.youtube.com/watch?v=XW7Of3g2JME",
    price: 37,
    id: 5,
    description:
      "The player assumes control of a character referred to as the 'Sole Survivor', who emerges from a long-term cryogenic stasis in Vault 111, an underground nuclear fallout shelter.",
  },
  {
    image: "img/Cyberpunk-2077.jpeg",
    title: "Cyberpunk 2077 ",
    genres: ["Action Adventure ", "Shooter", "RPG"],
    video: "https://www.youtube.com/watch?v=LembwKDo1Dk",
    price: 68,
    id: 6,
    description:
      "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.",
  },
];
console.log(games);

function HomePage() {
  return (
    <div className="home__page">
      {/* <Add /> */}
      {games.map((game) => (
        <GameItem game={game} key={game.id} />
      ))}
    </div>
  );
}

export default HomePage;
