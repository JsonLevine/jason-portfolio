import { React } from 'react'
import { UserPlusIcon } from "@heroicons/react/24/solid";

function About() {
  function scrollToSectionBottom(section) {
    document.getElementById(section).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest"});
  }

    return (
        <section id="about" data-testid="about-section">
          <div className="container mx-auto flex px-10 pt-20 pb-10 md:flex-row flex-col items-center">
            <div className="lg:ml-8 lg:flex-grow md:w-1/2 xl:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font jersey-25 sm:text-6xl text-5xl mb-4 font-medium text-stronghold-platinum">
                <span className="text-stronghold-imperial-red">Jason Levine</span>
                <br className="inline-block"/>
              </h1>
              <span className="jersey md:border-l md:pl-4 md:border-double md:border-gray-500 mb-4 text-gray-300 sm:text-2xl text-xl">Frontend Software Engineer</span>
              {/* <p className="mb-8 leading-relaxed">
              I specialize in creating <span className="jersey text-xl text-stronghold-platinum">engaging</span>, <span className="jersey text-xl text-stronghold-platinum">accessible</span> websites. My keen eye for detail ensures every project 
              I touch is crafted with <span className="jersey text-xl text-stronghold-platinum">precision</span>. I'm known for my candid communication
              style, always ready to share insights that <span className="jersey text-xl text-stronghold-platinum">drive projects forward</span>. Beyond coding, I take great pleasure in <span className="jersey text-xl text-stronghold-platinum">mentoring junior developers</span>,
              helping them grow into skilled professionals.
              </p> */}
              <p className="mb-8 leading-relaxed">
              I’m passionate about crafting <span className="jersey text-xl text-stronghold-platinum">meaningful</span>, <span className="jersey text-xl text-stronghold-platinum">user-friendly</span> digital experiences. 
              With a strong attention to detail, I take pride in making sure every project I work 
              on is <span className="jersey text-xl text-stronghold-platinum">thoughtful and impactful.</span> I’m known for my straightforward communication, always 
              eager to share ideas and <span className="jersey text-xl text-stronghold-platinum">collaborate</span> to move projects forward. I also love <span className="jersey text-xl text-stronghold-platinum">mentoring and 
              supporting junior developers</span>, helping them grow both personally and professionally.
              </p>
              <div className="flex flex-col xl:flex-row justify-center mb-4">
                <div>
                  {/* <a
                    target="_blank"
                    href="./assets/Jason_Levine_Resume.pdf"
                    className="justify-center w-full transition ease-in-out duration-300 hover:stroke-stronghold-imperial-red hover:-translate-y-1 hover:scale-110 jersey text-2xl inline-flex text-stronghold-platinum bg-stronghold-imperial-red border-0 py-2 px-6 focus:outline-none focus:bg-gray-700 rounded">
                    Resume
                  </a> */}
                  {/* Commented out since it doesn't match Resume format currently */}
                  {/* <a
                    target="_blank"
                    href="./assets/Jason_Levine_CV.pdf"
                    className="transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 jersey text-2xl ml-8 inline-flex text-gray-400 bg-stronghold-gunmetal border-0 py-2 px-6 focus:outline-none focus:bg-gray-700 hover:bg-gray-700 hover:text-stronghold-platinum rounded">
                    CV
                  </a> */}
                </div>
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
