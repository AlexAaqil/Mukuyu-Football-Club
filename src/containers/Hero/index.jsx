import "./hero.scss"

import images from "../../assets/images/images";

export default function Hero() {
  return (
    <section id="hero" className="Hero">
      <div className="container">
        <div className="text">
          <h1>
            <span>Mukuyu</span> Football Club
          </h1>
          <p>Legendary Football</p>
        </div>
        <img src={images.logo} alt="logo" />
      </div>
    </section>
  );
}
