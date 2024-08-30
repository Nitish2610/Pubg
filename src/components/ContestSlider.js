// // src/ContestSlider.js
// import React, { useState, useEffect } from 'react';
// import ContestCard from './ContestCard'; // Import the ContestCard component

// const ContestSlider = ({ cards, interval = 3000 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const sliderInterval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === cards.length - 1 ? 0 : prevIndex + 1
//       );
//     }, interval);

//     return () => clearInterval(sliderInterval); // Clear interval on component unmount
//   }, [cards.length, interval]);

//   return (
//     <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {cards.map((card, index) => (
//           <div className="w-full flex-shrink-0" key={index}>
//             <ContestCard
//               imageSrc={card.imageSrc}
//               title={card.title}
//               description={card.description}
//               link={card.link}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Optionally add previous/next buttons if you want manual controls */}
//       <button
//         onClick={() =>
//           setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? cards.length - 1 : prevIndex - 1
//           )
//         }
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
//       >
//         ❮
//       </button>

//       <button
//         onClick={() =>
//           setCurrentIndex((prevIndex) =>
//             prevIndex === cards.length - 1 ? 0 : prevIndex + 1
//           )
//         }
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
//       >
//         ❯
//       </button>
//     </div>
//   );
// };

// export default ContestSlider;

//-----------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import ContestCard from './ContestCard';

// const ContestSlider = ({ cards, interval = 3000 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const cardsToShow = 4; // Number of cards to show at once

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + cardsToShow >= cards.length ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? cards.length - cardsToShow : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     const sliderInterval = setInterval(handleNext, interval);
//     return () => clearInterval(sliderInterval);
//   }, [cards.length, interval]);

//   return (
//     <div className="relative w-full max-w-8xl mx-auto">
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
//       >
//         {cards.map((card, index) => (
//           <div
//             className="w-1/4 sm:w-1/2 flex-shrink-0"
//             key={index}
//             style={{ flex: `0 0 ${100 / cardsToShow}%` }}
//           >
//             <ContestCard
//               imageSrc={card.imageSrc}
//               title={card.title}
//               description={card.description}
//               link={card.link}
//             />
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={handlePrev}
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
//       >
//         ❮
//       </button>

//       <button
//         onClick={handleNext}
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
//       >
//         ❯
//       </button>
//     </div>
//   );
// };

// export default ContestSlider;



//-----------------

import React, { useState, useEffect } from 'react';
import ContestCard from './ContestCard';

const ContestSlider = ({ cards, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4); // 4 cards by default for large screens

  // Handler for next button
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow >= cards.length ? 0 : prevIndex + 1
    );
  };

  // Handler for previous button
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - cardsToShow : prevIndex - 1
    );
  };

  // Update the number of cards to show based on screen size
  const updateCardsToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setCardsToShow(2); // 2 cards for small screens
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      setCardsToShow(3); // 2 cards for medium screens
    } else {
      setCardsToShow(4); // 4 cards for large screens
    }
  };

  useEffect(() => {
    // Set up interval for auto-sliding
    const sliderInterval = setInterval(handleNext, interval);
    updateCardsToShow(); // Update cards on component mount
    window.addEventListener('resize', updateCardsToShow); // Update cards on window resize

    return () => {
      clearInterval(sliderInterval); // Clear interval on component unmount
      window.removeEventListener('resize', updateCardsToShow); // Remove event listener on component unmount
    };
  }, [cards.length, interval]);

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
      >
        {cards.map((card, index) => (
          <div
            className={`w-full ${cardsToShow === 2 ? 'md:w-1/2' : 'lg:w-1/4'} flex-shrink-0`}
            key={index}
            style={{ flex: `0 0 ${100 / cardsToShow}%` }}
          >
            <ContestCard
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
      >
        &#10094; {/* Left Arrow */}
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
      >
        &#10095; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default ContestSlider;
