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
  function copyEmail() {
    navigator.clipboard.writeText("jason.levine131@gmail.com");
  }

  return (
    <section id="contact" className="relative" data-testid="contact-section">
      <div className="container px-5 pb-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="m-auto sm:mr-0 xl:w-1/3 md:w-1/3  w-3/4 bg-gray-900 rounded-lg overflow-hidden p-4 flex items-start justify-start relative">
          <img
            width="100%"
            height="100%"
            className="inset-0 rounded shadow-project-shadow"
            src="/assets/contact.png"
            alt="Me and my dog, Riley"
          />
        </div>
        <div className="xl:w-1/3 md:w-2/3 lg:w-1/2 flex flex-col md:mr-auto w-full md:py-4 mt-4 md:mt-0 rounded">
          <div className="container px-5 mx-auto text-left">
            <div className="flex justify-center">
              <ChatBubbleLeftRightIcon className="w-10 inline mb-4" />
              <p className="text-white jersey-25 md:text-5xl text-4xl mb-1 font-medium title-font ml-4">
                Let's connect!
              </p>
            </div>
            <div className="justify-evenly rounded flex p-4 mb-4 items-center">
              <div className="flex items-center">
                <MapPinIcon className="text-custom-red w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font text-white">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    LOCATION
                  </h2>
                  <p className="font-thin mt-1">
                    Boston, MA
                  </p>
                </span>
              </div>
              <div className="border-l border-custom-red w-px md:h-8"></div>
              <div className="flex items-center">
                <DevicePhoneMobileIcon className="text-custom-red w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font text-white">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    PHONE
                  </h2>
                  <p className="font-thin leading-relaxed">(774) 249-5018</p>
                </span>
              </div>
            </div>
            <a href="https://www.linkedin.com/in/jasonllevine/" target="_blank" rel="noreferrer" className="group bg-gray-800 rounded flex p-4 mb-4 items-center transition ease-in-out duration-300 hover:ring-4 hover:ring-blue-500">
              <UserCircleIcon className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font text-white">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  LINKEDIN
                </h2>
                <span className="text-indigo-400 mt-1">
                  linkedin.com/in/jasonllevine 
                </span>
              </span>
              <ArrowTopRightOnSquareIcon className="text-white ml-auto group-hover:text-indigo-400 w-6 h-6 inline-block group-hover:-translate-y-1 group-hover:scale-125 transition ease-in-out duration-300" />
            </a>
            <span data-testid="email-container" data-tooltip-id="copiedTooltip" onClick={copyEmail} className="group cursor-pointer bg-gray-800 rounded flex p-4 mb-4 items-center transition ease-in-out duration-300 hover:ring-4 hover:ring-gray-200">
              <InboxArrowDownIcon className="text-gray-200 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font text-white">
               <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <span className="text-indigo-400 leading-relaxed">
                  jason.levine131@gmail.com
                </span>
                <Tooltip id="copiedTooltip" content="copied to clipboard!" openOnClick/>
              </span>
              <ClipboardDocumentCheckIcon className="text-white ml-auto group-hover:text-indigo-400 w-6 inline-block group-hover:-translate-y-1 group-hover:scale-125 transition ease-in-out duration-300" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact