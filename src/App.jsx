import "./assets/css/styles.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./containers/home";

import Fixtures from "./containers/Fixtures/";
import UpComingMatches from "./containers/Fixtures/UpcomingMatches";
import MatchResults from "./containers/Fixtures/MatchResults";
import Tables from "./containers/Fixtures/Tables";

import Players from "./containers/Players";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/fixtures" element={<Fixtures />}>
          <Route index element={<UpComingMatches />} />
          <Route path="results" element={<MatchResults />} />
          <Route path="tables" element={<Tables />} />
        </Route>

        <Route path="/players" element={<Players />} />
      </Routes>
    </Router>
  );
}
