import { React } from 'react'
import { UserPlusIcon } from "@heroicons/react/24/solid";

function About() {
  function scrollToSectionBottom(section) {
    document.getElementById(section).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest"});
  }

    return (
        <section id="about" data-testid="about-section">
          <div className="container mx-auto flex px-10 pt-20 pb-10 md:flex-row flex-col items-center">
            <div className="lg:ml-8 md:w-1/2 xl:pl-40 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
              <h1 className="title-font jersey-25 2xl:text-8xl lg:text-7xl text-6xl mb-4 font-medium text-stronghold-platinum">
                <span className="text-stronghold-imperial-red">Jason Levine</span>
                <br className="inline-block"/>
              </h1>
              <span className="jersey md:border-l  md:pl-4  border-stronghold-imperial-red text-gray-300 sm:text-3xl text-2xl">Technical Project Manager</span>
              <span className="h-4 w-full bg-gradient-to-r from-stronghold-imperial-red to-transparent"></span>
              <span className="jersey md:border-l md:pl-4  border-stronghold-imperial-red mb-4 sm:text-xl text-l"> Senior Software Engineer</span>              

              <span className="mb-4">I believe the most effective project managers are the ones who can seamlessly bridge the gap between product and development - and that's the intersection I specialize in.
                My extensive background in frontend development, web analytics, and A/B testing
                has given me a unique mindset when leading projects.  I can always see things from the customer's viewpoint, which lets me have a keen eye for 
                anticipating risk, and making data-driven decisions when moving through difficult challenges.
              </span>
              <div className="flex flex-col xl:flex-row justify-center mb-4">
                <div className="flex justify-center">
                  <a
                    onClick={() => scrollToSectionBottom("contact")}
                    className="group cursor-pointer transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 jersey text-2xl inline-flex text-gray-400 bg-stronghold-space-cadet border-0 py-2 px-6 focus:outline-none focus:bg-gray-700 hover:bg-gray-700 hover:text-stronghold-platinum rounded">
                    <UserPlusIcon className="h-8 w-4 mr-2 transition ease-in-out duration-300 text-gray-500 group-hover:text-stronghold-platinum" />
                    Connect With Me
                  </a>
                </div>
              </div>

            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded "
                alt="hero"
                src="./assets/Website_portrait3.png"
              />
            </div>
          </div>
        </section>
      );
}

export default About
