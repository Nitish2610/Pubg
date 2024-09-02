// src/ContestCard.js
import React from 'react';

function ContestCard({ imageSrc, title, description, link }) {
  return (
    <div className="mx-6 md:w-[300px] md:h-[320px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
    transition-transform duration-300 ease-in-out hover:scale-105">
      <a href={link}>
        <img className="rounded-t-lg w-full h-40" src={imageSrc} alt={title} />
      </a>
      <div className="p-6">
        <a href={link}>
          <h5 className="mb-2 text-2xl  sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-4 font-normal sm:text-base text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href={link}
          className="inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default ContestCard;
