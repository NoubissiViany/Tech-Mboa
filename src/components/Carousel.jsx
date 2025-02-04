import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Carousel({ items, autoplayInterval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [autoplayInterval]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="min-w-full">
              <img src={item.image} alt={item.alt} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 border bg-primary-200 text-white hover:bg-white hover:text-primary-200 hover:border-primary-200 py-2 px-3 rounded-full max-[425px]:hidden"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 border bg-primary-200 text-white hover:bg-white hover:text-primary-200 hover:border-primary-200 py-2 px-3 rounded-full max-[425px]:hidden"
      >
        &#10095;
      </button>
    </div>
  );
}

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
  autoplayInterval: PropTypes.number, // Optional prop for customizing autoplay interval
};

export default Carousel;
