import "./fixtures.scss";
import Navbar from "../Navbar/";
import Footer from "../Footer/";

import { Link, Outlet } from "react-router-dom";

export default function Fixtures() {
  return (
    <section className="Fixtures">
      <Navbar />

      <div className="fixtures_navbar">
        <ul>
          <li>
            <Link to=".">Fixtures</Link>
          </li>
          <li>
            <Link to="results">Results</Link>
          </li>
          <li>
            <Link to="tables">Tables</Link>
          </li>
        </ul>
      </div>

      <div className="container">
        <Outlet />
      </div>

      <Footer />
    </section>
  );
}
