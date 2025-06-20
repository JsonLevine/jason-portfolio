import React, { useState } from 'react';

function Navbar() {

  const [isRed, setIsRed] = useState(true);

  //  Scrolls the page to the specified section
  //  @param {string} section - The ID of the section to scroll to
  //  @returns {void}
  function scrollToSection(section) {
    document.getElementById(section).scrollIntoView({ behavior: "smooth", block: "start"});
  }

  return (
    <header className="bg-stronghold-red md:sticky top-0 z-10 border-b-2 xl:px-8 border-stronghold-onyx">
      <div className="container mx-auto flex sm:flex-wrap p-5 flex-row justify-between items-center">
        <div>
          <a href="#" onClick={() => setIsRed(!isRed)} className="group w-12 ml-auto block jersey font-medium text-stronghold-white text-4xl/8" data-testid="logo">
            <img
              className="rounded border-2 border-stronghold-eerie-black"
              src={`${isRed ? '/assets/corner-logo.png' : '/assets/corner-logo-dark.png'}`}
              alt="JL Site Logo"
            />
          </a>
        </div>
        <nav className="text-lg mr-auto ml-4 py-1 pl-4 border-l-2 border-stronghold-onyx flex flex-wrap items-center text-stronghold-white justify-center">
          <a 
            onClick={() => scrollToSection("projects")}
            tabIndex='0'
            className="jersey text-2xl cursor-pointer mr-5 ease-in duration-200 focus:text-stronghold-eerie-black hover:scale-110 hover:text-stronghold-eerie-black" data-testid="projects-link">
            Projects
          </a>
          <a 
            onClick={() => scrollToSection("skills")}
            tabIndex='0'
            className="jersey text-2xl cursor-pointer mr-5 ease-in duration-200 focus:text-stronghold-eerie-black hover:scale-110 hover:text-stronghold-eerie-black" data-testid="skills-link">
            Skills
          </a>
        </nav>
        <a
          target="_blank"
          href="./assets/Jason_Levine_Resume_PM.pdf"
          className="transition ease-in-out duration-300 focus:bg-stronghold-onyx hover:bg-stronghold-onyx hover:scale-110 jersey text-xl inline-flex items-center bg-stronghold-white border-0 py-1 px-3 focus:outline-none rounded text-stronghold-red sm:mt-0"
          data-testid="resume-button"
        >
          Resume
        </a>
      </div>
    </header>
  );
}

export default Navbar;
