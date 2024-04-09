import React from 'react'
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function Navbar() {
    return (
        <header className="bg-custom-red md:sticky top-0 z-10">
          <div className="container mx-auto flex flex-wrap p-5 flex-col sm:flex-row items-center">
            <a className="title-font font-medium text-white mb-4 sm:mb-0">
              <a href="#about" className="ml-3 text-xl">
                Jason Levine
              </a>
            </a>
            <nav className="sm:mr-auto sm:ml-4 sm:py-1 sm:pl-4 sm:border-l-2 sm:border-gray-700	flex flex-wrap items-center text-white justify-center">
              <a href="#projects" className="mr-5 hover:text-gray-800">
                Projects
              </a>
              <a href="#skills" className="mr-5 hover:text-gray-800">
                Skills
              </a>
              <a href="#testimonials" className="mr-5 hover:text-gray-800">
                Testimonials
              </a>
            </nav>
            <a
              href="#contact"
              className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none focus:bg-gray-700 hover:bg-gray-700 rounded text-custom-red mt-4 sm:mt-0">
              Hire Me
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
          </div>
        </header>
      );
}

export default Navbar