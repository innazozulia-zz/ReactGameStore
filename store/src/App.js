import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Header/Header";
import Opportunities from "./Components/Opportunities/Opportunities";
import GamePass from "./Components/GamePass/GamePass";
import Consoles from "./Components/Consoles/Consoles";
import SingIn from "./Components/SingIn/SingIn";
import GamePage from "./Components/GamePage/GamePage";
import { store } from "./redux/store";
import Order from "./Components/Order/Order";
import PlayNow from "./Components/PlayNow/PlayNow";

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
          <Route path="play_now" element={<PlayNow />} />
          <Route path="Sing__in" element={<SingIn />} />
          <Route exact path="app/:title" element={<GamePage />} />
          <Route path="order" element={<Order />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
