import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* {<Home />} */}
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
