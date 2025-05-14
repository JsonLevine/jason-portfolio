import { React } from 'react'
import { UserPlusIcon } from "@heroicons/react/24/solid";

function About() {

  //  Scrolls the page to the bottom of the specified section
  //  @param {string} section - The ID of the section to scroll to
  //  @returns {void}
  function scrollToSectionBottom(section) {
    document.getElementById(section).scrollIntoView( { behavior: "smooth", block: "end", inline: "nearest" } );
  }

  return (
    <section id="about" data-testid="about-section">
      <div className="container mx-auto flex px-10 pt-20 pb-10 md:flex-row flex-col items-center">
        <div className="bg-stronghold-eerie-black bg-opacity-70 lg:ml-8 md:w-1/2 xl:pl-40 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          <h1 className="title-font jersey-25 2xl:text-8xl lg:text-7xl text-6xl mb-4 font-medium text-stronghold-platinum">
            <span className="text-stronghold-red">Jason Levine</span>
            <br className="inline-block"/>
          </h1>
          <span className="jersey md:border-l md:pl-4 border-stronghold-red text-stronghold-platinum sm:text-3xl text-2xl">Technical Product Manager</span>
          <span className="h-4 w-full bg-gradient-to-r from-stronghold-red to-transparent"></span>
          <span className="jersey md:border-l md:pl-4 border-stronghold-red mb-4 sm:text-xl text-l"> Senior Software Engineer</span>              
          <span className="bg-stronghold-eerie-black bg-opacity-70 text-stronghold-platinum mb-4">I believe the most effective product managers are the ones who can seamlessly <span className="font-bold text-stronghold-red">bridge the gap between product and development</span>, and that's the intersection I specialize in.
            My extensive background in <span className="font-bold text-stronghold-red">software engineering</span>, <span className="font-bold text-stronghold-red">web analytics</span>, and <span className="font-bold text-stronghold-red">A/B testing</span> has given me a unique 
            mindset when driving products through development.  I can always see things from the customer's viewpoint, which lets me have a keen eye
            for <span className="font-bold text-stronghold-red">anticipating risk</span>, and making <span className="font-bold text-stronghold-red">data-driven decisions</span> when moving through difficult challenges.
          </span>
          <div className="flex flex-col xl:flex-row justify-center mb-4">
            <div className="flex justify-center">
              <a
                data-testid="connect-with-me-button"
                onClick={() => scrollToSectionBottom("contact")}
                tabIndex='0'
                className="group cursor-pointer transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 jersey text-2xl inline-flex bg-stronghold-jet border-0 py-2 px-6 focus:outline-none focus:bg-stronghold-red hover:bg-stronghold-red text-stronghold-platinum rounded">
                <UserPlusIcon className="h-8 w-4 mr-2 transition ease-in-out duration-300 text-stronghold-platinum"/>
                Connect With Me
              </a>
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./assets/Website_portrait3.png"
          />
        </div>
      </div>
    </section>
  );
}

export default About
