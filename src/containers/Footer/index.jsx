import "./footer.scss";

import images from "../../assets/images/images";
import {
  FaFacebook,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {
  return (
    <section id="footer" className="Footer">
      <div className="copyright">
        <div className="container">
          <div className="logo">
            <img src={images.logo} alt="Logo" />
          </div>
          <div className="a_row">
            <div className="a_column">
              <h1>Mukuyu Football Club</h1>
              <p>Legendary Football</p>
            </div>

            <div className="a_column">
              <h1>Links</h1>
              <div className="links">
                <a href="/">Home</a>
                <a href="/fixtures">Fixtures</a>
                <a href="/players">Players</a>
              </div>
            </div>

            <div className="a_column">
              <h1>For Enquiries</h1>
              <p>
                <FaEnvelope /> <a href="mailto:mukuyufootballclub@gmail.com">mukuyufootballclub@gmail.com</a>
              </p>
              <h1>Social Media</h1>
              <p>
                <FaFacebook className="icon" />
                <a
                  href="https://www.facebook.com/groups/253558956346908"
                  target="_blank"
                  rel="noreferrer"
                >
                  MUKUYU FC
                </a>
              </p>
            </div>
          </div>
        </div>
        <p className="copyright_text">&copy; 2023 | Mukuyu Football Club</p>
      </div>
    </section>
  );
}
