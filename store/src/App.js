import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Header/Header";
import Opportunities from "./Components/Opportunities/Opportunities";
import GamePass from "./Components/GamePass/GamePass";
import Consoles from "./Components/Consoles/Consoles";
import SingIn from "./Components/SingIn/SingIn";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Opportunities />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="game__pass" element={<GamePass />} />
        <Route path="consoles" element={<Consoles />} />
        <Route path="Sing__in" element={<SingIn />} />
      </Routes>
    </div>
  );
}

export default App;
