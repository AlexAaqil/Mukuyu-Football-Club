import { useState } from "react";
import PropTypes from "prop-types";
import { FaAngleRight, FaAngleLeft, FaCircle } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    const nextIndex = current === length - 1 ? 0 : current + 1;
    setCurrent(nextIndex);
    setActiveDot(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = current === 0 ? length - 1 : current - 1;
    setCurrent(prevIndex);
    setActiveDot(prevIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrent(slideIndex);
    setActiveDot(slideIndex);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="ImageSlider">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            <FaAngleLeft
              className="icon left-arrow"
              onClick={prevSlide}
            />
            <FaAngleRight
              className="icon right-arrow"
              onClick={nextSlide}
            />
            <span>
              {index + 1}/{slides.length}
            </span>
            {index === current && (
              <img src={slide.image} alt="Slide image" className="image" />
            )}
          </div>
        ))}
      </div>

      <div className="dots">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`dot ${slideIndex === activeDot ? "active_dot" : ""}`}
            onClick={() => goToSlide(slideIndex)}
          >
            <FaCircle />
          </div>
        ))}
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageSlider;
