// src/ImageSlider.js
import { useState ,useEffect} from 'react';
import pubgImage1 from '../assets/pubg.jpg';
import pubgImage2 from '../assets/pubg10.jpg';
import pubgImage3 from '../assets/pubg11.jpg';
import pubgImage4 from '../assets/pubg12.jpg';

const images = [pubgImage1, pubgImage2, pubgImage3,pubgImage4];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto">
      {/* Slider Images */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-[600px] transition-all duration-500 ease-in-out"
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-yellow-600' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
