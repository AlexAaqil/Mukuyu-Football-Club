import "./gallery.scss";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./sliderData";

function App() {
  return (
    <section className="Gallery">
      <div className="container">
        <h1>Gallery</h1>
        <ImageSlider slides={SliderData} />
      </div>
    </section>
  );
}

export default App;
