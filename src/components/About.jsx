import React from 'react'
import { UserPlusIcon } from "@heroicons/react/24/solid";


function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 xl:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Jason.
                <br className="inline-block"/>I have a <span className="text-custom-red">passion</span> for visual design
              </h1>
              <p className="mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                Laborum, voluptas natus?
              </p>
              <div className="flex justify-center mb-4">
                <a
                  target="_blank"
                  href="./assets/Jason_Levine_Resume.pdf"
                  className="inline-flex text-white bg-custom-red border-0 py-2 px-6 focus:outline-none focus:bg-gray-700 hover:bg-gray-700 rounded text-lg">
                  Résumé
                </a>
                <a
                  target="_blank"
                  href="./assets/Jason_Levine_CV.pdf"
                  className="ml-[1.7rem] inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none focus:bg-gray-700 hover:bg-gray-700 hover:text-white rounded text-lg">
                  CV
                </a>
              </div>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none focus:bg-gray-700 hover:bg-gray-700 hover:text-white rounded text-lg">
                  <UserPlusIcon className="w-4 mr-2 text-gray-500" />
                  Connect With Me
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./Coding-Riley.svg"
              />
            </div>
          </div>
        </section>
      );
}

export default About