import "./awards.scss"

import images from "../../assets/images/images"

export default function Awards(){
    return (
      <section id="awards" className="Awards">
        <div className="container">
          <h1>Awards</h1>
          <div className="images">
            <img src={images.award01} alt="..." />
            <img src={images.award02} alt="..." />
            <img src={images.award03} alt="..." />
          </div>
        </div>
      </section>
    );
}