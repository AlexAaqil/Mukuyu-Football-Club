import { useState } from "react";
import PropTypes from "prop-types";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaCircle } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const goToSlide = (slideIndex) => {
    setCurrent(slideIndex);
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
            <FaArrowAltCircleLeft
              className="icon left-arrow"
              onClick={prevSlide}
            />
            <FaArrowAltCircleRight
              className="icon right-arrow"
              onClick={nextSlide}
            />
            <span>{index+1}/{slides.length}</span>
            {index === current && (
              <img src={slide.image} alt="travel image" className="image" />
            )}
          </div>
        ))}
      </div>

      <div className="dots">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className="dot"
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
