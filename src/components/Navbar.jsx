import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cornerLogo from '../assets/corner-logo.png';
import cornerLogoDark from '../assets/corner-logo-dark.png';
import resume from '../assets/resume/Jason_Levine_Resume.pdf';

function Navbar({useReducedMotion}) {

  const [isRed, setIsRed] = useState(true);
  const location = useLocation()
  const navigate = useNavigate()

  /**  
   *  Scrolls the page to the specified section
   * 
   *  @param {string} section - The ID of the section to scroll to
   *  @returns {void}
   */  
  function scrollToSection(section) {
    document.getElementById(section).scrollIntoView({ behavior: useReducedMotion ? "instant" : "smooth", block: "start"})
    // After scrolling, set focus to the section for accessibility  
    document.getElementById(section).focus({ preventScroll: true });
  }

  function scrollToTop() { 
    window.scrollTo({ top: 0, behavior: useReducedMotion ? "instant" : "smooth" });
  }

  /**  
   *  Handles the click event on the logo
   *  If on the homepage, scrolls to the top and toggles the logo color.
   *  If not on the homepage, navigates to the homepage and toggles the logo color.
   * 
   *  @param {void}
   *  @returns {void}
   */  
  function handleLogoClick() {
    // If on the homepage, scroll to the top
    if (location.pathname === '/') {
      setIsRed(!isRed);
      scrollToTop();
      return;
    }

    // If not on the homepage, navigate to the homepage
    navigate('/');
    scrollToTop();

    // Toggle the logo color between red and dark
    setIsRed(!isRed);
  }

  return (
    <header className="bg-stronghold-red w-full md:fixed top-0 z-10 border-b-2 xl:px-8 border-stronghold-onyx">
      <div className="container mx-auto flex sm:flex-wrap p-5 px-8 flex-row justify-between items-center">
        <div>
          <button 
            onClick={() => handleLogoClick()} 
            className="group w-12 ml-auto block jersey font-medium text-stronghold-white text-4xl/8" 
            data-testid="logo">
            <img
              className="rounded border-2 border-stronghold-eerie-black"
              src={isRed ? cornerLogo : cornerLogoDark}
              alt="JL Site Logo"
            />
          </button>
        </div>
        { // Only show the navigation links if on the homepage
          location.pathname === '/' &&
         <nav className="text-lg mr-auto ml-4 py-1 pl-4 border-l-2 border-stronghold-onyx flex flex-wrap items-center text-stronghold-white justify-center">
          <button 
            onClick={() => scrollToSection("projects")}
            tabIndex='0'
            className="jersey text-2xl cursor-pointer mr-5 ease-in duration-200 focus:text-stronghold-eerie-black hover:scale-110 hover:text-stronghold-eerie-black" data-testid="projects-link"
            aria-label='Scroll to Projects Section'>
            Projects
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            tabIndex='0'
            className="jersey text-2xl cursor-pointer mr-5 ease-in duration-200 focus:text-stronghold-eerie-black hover:scale-110 hover:text-stronghold-eerie-black" data-testid="skills-link"
            aria-label='Scroll to Skills Section'>
            Skills
          </button>
        </nav> }
        <a
          target="_blank"
          href={resume}
          className="transition ease-in-out duration-300 hover:scale-110 focus:ring-4 ring-stronghold-eerie-black jersey text-xl inline-flex items-center bg-stronghold-white border-0 py-1 px-3 focus:outline-none rounded text-stronghold-eerie-black sm:mt-0"
          data-testid="resume-button"
          aria-label='Open Resume in new tab'
        >
          Resume
        </a>
      </div>
    </header>
  );
}

export default Navbar;
