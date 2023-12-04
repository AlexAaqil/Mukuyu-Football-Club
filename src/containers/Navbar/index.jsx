import { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "./navbar.scss";


export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
      <nav>
        <div className="container">
          <a href="/" className="brand">
            Mukuyu FC
          </a>

          <div className="nav_links">
            <button
            className="btn"
            onClick={handleShowNavbar}>
              {showNavbar ? <FaTimes /> : <FaBars />}
            </button>

            <ul className={`links ${showNavbar ? "active" : ""}`}>
              <li>
                <a href="/fixtures">FIXTURES</a>
              </li>
              <li>
                <a href="/players">PLAYERS</a>
              </li>
              <li>
                <a href="#footer">CONTACTS</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
