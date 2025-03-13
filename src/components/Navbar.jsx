import React from 'react';
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function Navbar() {

  function scrollToSectionBottom(section) {
    document.getElementById(section).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest"});
  }

  function scrollToSection(section) {
    document.getElementById(section).scrollIntoView({ behavior: "smooth", block: "start"});
  }

  return (
    <header className="bg-stronghold-imperial-red md:sticky top-0 z-10 border-b-2 border-gray-700">
      <div className="container mx-auto flex sm:flex-wrap p-5 flex-row justify-between items-center">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="jersey font-medium text-white text-4xl/8" data-testid="logo">
          Jason <br className="sm:hidden" />Levine
        </a>
        <nav className="text-lg block mr-auto ml-4 py-1 pl-4 border-l-2 border-gray-700 flex flex-wrap items-center text-white justify-center">
          <a 
            onClick={() => scrollToSection("projects")}
            className="jersey text-2xl cursor-pointer mr-5 ease-in duration-200 hover:scale-110 hover:text-gray-800" data-testid="projects-link">
            Projects
          </a>
          <a 
            onClick={() => scrollToSection("skills")}
            className="jersey text-2xl cursor-pointer mr-5 ease-in duration-200 hover:scale-110 hover:text-gray-800" data-testid="skills-link">
            Skills
          </a>
        </nav>
        <a
          target="_blank"
          href="./assets/Jason_Levine_Resume_PM.pdf"
          className="transition ease-in-out duration-300 hover:stroke-stronghold-imperial-red hover:scale-110 jersey text-xl hidden sm:block inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none rounded text-stronghold-imperial-red sm:mt-0"
          data-testid="resume-button"
        >
          Resume
        </a>
        <a
          onClick={() => scrollToSectionBottom("contact")}
          className="cursor-pointer transition ease-in-out duration-300 hover:scale-110 md:hidden inline-flex items-center bg-white border-0 py-1 px-3 ml-4 jersey text-xl focus:outline-none rounded text-stronghold-imperial-red sm:mt-0"
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
