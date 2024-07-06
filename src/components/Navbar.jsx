import React from 'react';
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function Navbar() {
  return (
    <header className="bg-custom-red md:sticky top-0 z-10">
      <div className="container mx-auto flex sm:flex-wrap p-5 flex-row justify-between items-center">
        <a href="#" className="jersey font-medium text-white text-4xl/8" data-testid="logo">
          Jason  <br className="sm:hidden" />Levine
        </a>
        <nav className="text-lg block mr-auto ml-4 py-1 pl-4 border-l-2 border-gray-700 flex flex-wrap items-center text-white justify-center">
          <a href="#projects" className="mr-5 ease-in duration-200 hover:scale-110 hover:text-gray-800" data-testid="projects-link">
            Projects
          </a>
          <a href="#skills" className="mr-5 ease-in duration-200 hover:scale-110 hover:text-gray-800" data-testid="skills-link">
            Skills
          </a>
        </nav>
        <a
          target="_blank"
          href="./assets/Jason_Levine_Resume.pdf"
          className="transition ease-in-out duration-300 hover:stroke-custom-red hover:scale-110 jersey text-xl hidden sm:block inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none focus:bg-gray-700 hover:bg-gray-700 rounded text-custom-red sm:mt-0"
          data-testid="resume-button"
        >
          Resume
        </a>
        <a
          href="#contact"
          className="transition ease-in-out duration-300 hover:scale-110 md:hidden inline-flex items-center bg-white border-0 py-1 px-3 ml-4 jersey text-xl focus:outline-none focus:bg-gray-700 hover:bg-gray-700 rounded text-custom-red sm:mt-0"
          data-testid="hire-me-button"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
