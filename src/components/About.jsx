import { React } from 'react'
import { UserPlusIcon } from "@heroicons/react/24/solid";
import websitePortrait from '../assets/Website_portrait.png';

function About({useReducedMotion}) {

  /**
   * Scrolls the page to the bottom of the specified section
   * 
   * @param {string} section - The ID of the section to scroll to
   * @returns {void}
   */   
  function scrollToSectionBottom(section) {
    document.getElementById(section).scrollIntoView({ behavior: useReducedMotion ? "instant" : "smooth", block: "end", inline: "nearest" });
    
    // After scrolling, set focus to the section for accessibility  
    document.getElementById(section).focus({ preventScroll: true });
  }


  return (
    <section id="about" tabIndex={0} aria-label='About Me Section' data-testid="about-section">
      <div className="container mx-auto md:mt-24 flex px-10 pt-20 pb-10 md:flex-row flex-col items-center">
        <div className="bg-stronghold-eerie-black bg-opacity-70 lg:ml-8 md:w-1/2 xl:pl-40 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          <h1 className="title-font jersey-25 2xl:text-8xl lg:text-7xl text-6xl mb-4 font-medium text-stronghold-platinum">
            <span className="text-stronghold-red-accessible">Jason Levine</span>
            <br className="inline-block"/>
          </h1>
          <span className="jersey md:border-l md:pl-4 border-stronghold-red text-stronghold-platinum sm:text-3xl text-2xl">Technical Product Manager</span>
          <span className="h-4 w-full bg-gradient-to-r from-stronghold-red to-transparent"></span>
          <span className="jersey md:border-l md:pl-4 border-stronghold-red text-stronghold-platinum sm:text-3xl text-2xl"> Frontend Software Engineer</span>              
         {/* Old Bio */}
         {/* <span className="bg-stronghold-eerie-black bg-opacity-70 text-stronghold-platinum my-4">I believe the most effective product managers are the ones who can seamlessly <span className="font-bold text-stronghold-red-accessible">bridge the gap between product and development</span>, and that's the intersection I specialize in.
            My extensive background in <span className="font-bold text-stronghold-red-accessible">software engineering</span>, <span className="font-bold text-stronghold-red-accessible">web analytics</span>, and <span className="font-bold text-stronghold-red-accessible">A/B testing</span> has given me a unique 
            mindset when driving products through development.  I can always see things from the customer's viewpoint, which lets me have a keen eye
            for <span className="font-bold text-stronghold-red-accessible">anticipating risk</span>, and making <span className="font-bold text-stronghold-red-accessible">data-driven decisions</span> when moving through difficult challenges.
          </span> */}
          <span className="bg-stronghold-eerie-black bg-opacity-70 text-stronghold-platinum my-4">
          I’m a <span className="font-bold text-stronghold-red-accessible">Technical Product Manager</span> with a background in <span className="font-bold text-stronghold-red-accessible">frontend engineering</span>, <span className="font-bold text-stronghold-red-accessible">web analytics</span>, and <span className="font-bold text-stronghold-red-accessible">experimentation</span>.
           I specialize in bridging product and development teams, translating customer needs into clear technical plans, 
           and shipping <span className="font-bold text-stronghold-red-accessible">data-driven features</span>. My engineering experience helps me anticipate risks early, communicate effectively with developers, and keep projects moving from idea to launch.
          </span>
          <div className="flex flex-col xl:flex-row justify-center mb-4">
            <div className="flex justify-center">
              <button
                data-testid="connect-with-me-button"
                onClick={() => scrollToSectionBottom("contact")}
                tabIndex='0'
                className="group cursor-pointer transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 jersey text-2xl inline-flex bg-stronghold-jet border-0 py-2 px-6 focus:outline-none focus:bg-stronghold-red hover:bg-stronghold-red text-stronghold-platinum rounded"
                aria-label='Scroll to Contact Section'>
                <UserPlusIcon className="h-8 w-4 mr-2 transition ease-in-out duration-300 text-stronghold-platinum"/>
                Connect With Me
              </button>
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Pixel graphic of me and my dog, Riley"
            src={websitePortrait}
          />
        </div>
      </div>
    </section>
  );
}

export default About
