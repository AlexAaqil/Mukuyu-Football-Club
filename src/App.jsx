import "./assets/css/styles.scss";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./containers/home";
import Fixtures from "./containers/fixtures";
import Players from "./containers/players";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fixtures" element={<Fixtures />} />
        <Route path="/players" element={<Players />} />
      </Routes>
    </Router>
  );
}
