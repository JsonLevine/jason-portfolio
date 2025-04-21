import React, { useState } from 'react';

function Accordion({ title, children }) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group border-stronghold-jet rounded ">
      <button
        className={`hover:rounded ${ isOpen ? 'rounded-t' : 'rounded'} transition ease-in-out duration-300 bg-stronghold-jet group-hover:bg-stronghold-red hover:-translate-y-1 hover:scale-110 flex items-center justify-between w-full p-4`}
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
        className={`group-hover:border-stronghold-red border-stronghold-onyx rounded-bl rounded-br border-b-2 border-l-2 border-r-2 max-h-full bg-stronghold-jet bg-opacity-80 text-stronghold-platinum overflow-hidden transition ease-in-out duration-300 ${
          isOpen ? 'visible' : 'hidden'
        }`}
      >
        <div className="text-left p-4">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;