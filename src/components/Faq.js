import React, { useState } from 'react';

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "What is PUBG?",
      answer: "PUBG (PlayerUnknown's Battlegrounds) is a popular online multiplayer battle royale game where players fight to be the last person standing on a shrinking map."
    },
    {
      question: "How do I improve my aim in PUBG?",
      answer: "Improving your aim in PUBG involves practicing regularly, adjusting your sensitivity settings, and using aim training maps to enhance precision."
    },
    {
      question: "What are the best weapons in PUBG?",
      answer: "Some of the best weapons in PUBG include the M416 for its versatility, the Kar98k for long-range sniping, and the AKM for high damage output."
    },
    {
      question: "How do I win more matches in PUBG?",
      answer: "Winning more matches in PUBG requires a combination of good strategy, map knowledge, and effective communication with your team. Always stay aware of the shrinking play area and plan your moves accordingly."
    },
    {
        question: "Can I play PUBG on mobile?",
        answer: "Yes, PUBG Mobile is a version of the game optimized for smartphones, available on both iOS and Android platforms."
      },
      {
        question: "What are the system requirements for PUBG on PC?",
        answer: "PUBG on PC requires a minimum of an Intel Core i5-4430 or AMD FX-6300 processor, 8GB RAM, and a DirectX 11 compatible GPU such as the NVIDIA GeForce GTX 960 2GB or AMD Radeon R7 370 2GB."
      },
      {
        question: "How often does PUBG receive updates?",
        answer: "PUBG receives regular updates that introduce new content, balance changes, and bug fixes, typically on a monthly or bi-monthly basis."
      },
      {
        question: "Is there a ranking system in PUBG?",
        answer: "Yes, PUBG features a ranking system where players can progress through different tiers by earning points based on their performance in matches."
      }
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {/* <h2 className="text-4xl font-extrabold text-center text-white mb-8 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-lg shadow-md">PUBG FAQs</h2> */}
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-800 text-white shadow-md rounded-lg p-6">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <svg className={`w-6 h-6 transform transition-transform ${openQuestion === index ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {openQuestion === index && (
              <div className="mt-3 text-gray-300">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
