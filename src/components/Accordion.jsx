import React, { useState } from 'react';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" border-gray-600 bg-stronghold-gunmetal rounded
    transition ease-in-out duration-300 hover:bg-stronghold-imperial-red hover:text-stronghold-platinum hover:-translate-y-1 hover:scale-105">
      <button
        className="flex items-center justify-between w-full p-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <span className="jersey text-2xl text-center">{title}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={` bg-stronghold-space-cadet overflow-hidden transition-max-height duration-300 ${
          isOpen ? 'max-h-full' : 'max-h-0'
        }`}
      >
        <div className="text-left p-4">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;