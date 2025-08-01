import React from 'react'
import { 
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  DevicePhoneMobileIcon,
  MapPinIcon,
  InboxArrowDownIcon,
  UserCircleIcon,
  ArrowTopRightOnSquareIcon
 } from "@heroicons/react/24/solid";
 import { Tooltip } from 'react-tooltip'

function Contact() {

  /**
   * Copies the email address to the clipboard
   *
   * @returns {void}
   */
  function copyEmail() {
    navigator.clipboard.writeText("jason.levine131@gmail.com");
  }

  return (
    <section id="contact" tabIndex={0} aria-label='Contact Section' className="relative" data-testid="contact-section">
      <div className="container px-5 pb-10 mt-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="m-auto sm:mr-0 xl:w-1/3 md:w-1/3 w-3/4 rounded-lg overflow-hidden p-4 flex items-start justify-start relative">
          <img
            width="100%"
            height="100%"
            className="inset-0 rounded shadow-project-shadow"
            src="/assets/pickleball.png"
            alt="Me playing pickleball at my own wedding"
          />
        </div>
        <div className="xl:w-1/3 md:w-2/3 lg:w-1/2 flex flex-col md:mr-auto w-full md:py-4 mt-4 md:mt-0 rounded">
          <div className="container px-5 mx-auto text-left">
            <div className="flex justify-center">
              <ChatBubbleLeftRightIcon className="text-main-text h-12 w-10 inline mb-4"/>
              <p className="text-stronghold-platinum jersey-25 md:text-5xl text-4xl mb-1 font-medium title-font ml-4">
                Let's connect!
              </p>
            </div>
            <div className="bg-stronghold-eerie-black bg-opacity-70 justify-evenly rounded flex p-4 mb-4 items-center">
              <div className="flex items-center">
                <MapPinIcon className="text-stronghold-red-accessible w-6 h-6 flex-shrink-0 mr-4"/>
                <span className="title-font text-stronghold-platinum">
                  <h2 className="title-font font-semibold text-stronghold-platinum tracking-widest text-xs">
                    LOCATION
                  </h2>
                  <p className="font-thin mt-1">
                    Boston, MA
                  </p>
                </span>
              </div>
              <div className="border-l border-stronghold-red w-px md:h-8"></div>
              <div className="flex items-center">
                <DevicePhoneMobileIcon className="text-stronghold-red-accessible w-6 h-6 flex-shrink-0 mr-4"/>
                <span className="title-font text-stronghold-platinum">
                  <h2 className="title-font font-semibold text-stronghold-platinum tracking-widest text-xs">
                    PHONE
                  </h2>
                  <p className="font-thin leading-relaxed">(774) 249-5018</p>
                </span>
              </div>
            </div>
            <a href="https://www.linkedin.com/in/jasonllevine/" target="_blank" rel="noreferrer" className="group bg-stronghold-jet rounded flex p-4 mb-4 items-center transition ease-in-out duration-300 hover:ring-4 hover:ring-chewy-blue">
              <UserCircleIcon className="text-chewy-blue-accessible w-6 h-6 flex-shrink-0 mr-4"/>
              <span className="title-font text-stronghold-platinum">
                <h2 className="title-font font-semibold text-stronghold-platinum tracking-widest text-xs">
                  LINKEDIN
                </h2>
                <span className="text-link-blue mt-1">
                  linkedin.com/in/jasonllevine 
                </span>
              </span>
              <ArrowTopRightOnSquareIcon className="text-stronghold-platinum ml-auto group-hover:text-link-blue w-6 h-6 inline-block group-hover:-translate-y-1 group-hover:scale-125 transition ease-in-out duration-300"/>
            </a>
            <span 
              data-testid="email-container" 
              data-tooltip-id="copiedTooltip" 
              onClick={copyEmail} 
              className="group cursor-pointer bg-stronghold-jet rounded flex p-4 mb-4 items-center transition ease-in-out duration-300 hover:ring-4 hover:ring-stronghold-platinum">
              <InboxArrowDownIcon className="text-stronghold-platinum w-6 h-6 flex-shrink-0 mr-4"/>
              <span className="title-font text-stronghold-platinum">
               <h2 className="title-font font-semibold text-stronghold-platinum tracking-widest text-xs">
                  EMAIL
                </h2>
                <span className="text-link-blue leading-relaxed">
                  jason.levine131@gmail.com
                </span>
                <Tooltip id="copiedTooltip" content="copied to clipboard!" openOnClick/>
              </span>
              <ClipboardDocumentCheckIcon className="text-stronghold-platinum ml-auto group-hover:text-link-blue w-6 inline-block group-hover:-translate-y-1 group-hover:scale-125 transition ease-in-out duration-300"/>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
