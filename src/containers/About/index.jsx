import "./about.scss";

import images from "../../assets/images/images";

export default function About() {
  return (
    <section id="about" className="About">
      <div className="container">
        <div className="text">
          <h1>OUR STORY</h1>
          <p>
            Mukuyu Football Club’s story is utterly uniques in the football
            sport, which is precisely why the club is revered and renowned all
            over the country. It’s a head-spinning tale of triumphs, tragedy and
            rich traditions often resulting in the kind of dramatic endings
            usually reserved for movies. The club has been a great club with
            honor and distinction. Managers and teams have served in this great
            club.
          </p>
        </div>
        <img src={images.team_photo} alt="Team Photo" />
      </div>
    </section>
  );
}
