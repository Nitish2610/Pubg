// src/components/SponsorCard.js
import React from 'react';

function SponsorCard({ imageSrc, title, description }) {
  return (
    <div className="w-60 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2 hover:scale-105 transition-transform duration-300">
      <img src={imageSrc} alt={title} className="rounded-t-lg h-50" />
      <p className="text-2xl font-bold text-white mt-2">{title}</p>
      <p className="text-md font-bold text-gray-500 text-center mt-1">{description}</p>
    </div>
  );
}

export default SponsorCard;
