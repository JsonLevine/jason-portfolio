import { React, useRef } from 'react'
import { useInView } from "framer-motion"
import { UserPlusIcon } from "@heroicons/react/24/solid";

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const ref2 = useRef(null)
  const isInView2 = useInView(ref2, { once: true })

    return (
        <section id="about">
          <div className="container mx-auto flex px-10 pt-20 pb-10 md:flex-row flex-col items-center">
            <div ref={ref} className={isInView ? "animate-fade-right animate-once animate-duration-[1500ms] lg:ml-8 lg:flex-grow md:w-1/2 xl:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" : "lg:ml-8 lg:flex-grow md:w-1/2 xl:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"}>
              <h1 className="title-font jersey-25 sm:text-6xl text-5xl mb-4 font-medium text-white">
                <span className="text-custom-red">Jason Levine</span>
                <br className="inline-block"/>
              </h1>
              <span className="jersey md:border-l md:pl-4 md:border-double md:border-gray-500 mb-4 text-gray-300 sm:text-2xl text-xl">Frontend Software Engineer</span>
              <p className="mb-8 leading-relaxed">
              I specialize in creating <strong className="text-gray-200">engaging</strong>, <strong className="text-gray-200">accessible</strong> websites. My keen eye for detail ensures every project 
              I touch is crafted with <strong className="text-gray-200">precision</strong>. I'm known for my candid communication
              style, always ready to share insights that <strong className="text-gray-200">drive projects forward</strong>. Beyond coding, I take great pleasure in <strong className="text-gray-200">mentoring junior developers</strong>,
              helping them grow into skilled professionals.
              </p>
              <div className="flex flex-col xl:flex-row justify-center mb-4">
                <div>
                  <a
                    target="_blank"
                    href="./assets/Jason_Levine_Resume.pdf"
                    className="transition ease-in-out duration-300 hover:stroke-custom-red hover:-translate-y-1 hover:scale-110 jersey text-2xl inline-flex text-white bg-custom-red border-0 py-2 px-6 focus:outline-none focus:bg-gray-700 rounded">
                    Resume
                  </a>
                  <a
                    target="_blank"
                    href="./assets/Jason_Levine_CV.pdf"
                    className="transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 jersey text-2xl ml-8 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none focus:bg-gray-700 hover:bg-gray-700 hover:text-white rounded">
                    CV
                  </a>
                </div>
                <div className="xl:ml-[1.7rem] mt-[1.7rem] xl:mt-0 flex justify-center">
                  <a
                    href="#contact"
                    className="transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 jersey text-2xl inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none focus:bg-gray-700 hover:bg-gray-700 hover:text-white rounded">
                    <UserPlusIcon className="w-4 mr-2 text-gray-500" />
                    Connect With Me
                  </a>
                </div>
              </div>

            </div>
            <div ref={ref2} className={isInView2 ? "animate-fade-left animate-once animate-duration-[1500ms] lg:max-w-lg lg:w-full md:w-1/2 w-5/6" : "lg:max-w-lg lg:w-full md:w-1/2 w-5/6"}>
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