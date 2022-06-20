import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Header/Header";
import Opportunities from "./Components/Opportunities/Opportunities";
import GamePass from "./Components/GamePass/GamePass";
import Consoles from "./Components/Consoles/Consoles";
import SingIn from "./Components/SingIn/SingIn";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
