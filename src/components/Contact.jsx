import React from 'react'
import { 
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  DevicePhoneMobileIcon,
  MapPinIcon,
  InboxArrowDownIcon,
  UserCircleIcon
 } from "@heroicons/react/24/solid";
 import { Tooltip } from 'react-tooltip'

function Contact() {
  function copyEmail() {
    navigator.clipboard.writeText("jason.levine131@gmail.com");
  }
  function copyLinkedin() {
    navigator.clipboard.writeText("");
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 pb-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="md:w-1/2 w-3/4 bg-gray-900 rounded-lg overflow-hidden p-4 flex items-start justify-start relative">
          <img
            width="100%"
            height="100%"
            className="inset-0 rounded shadow-project-shadow"
            src="/assets/contact.png"
          />
        </div>
        <div className="md:w-1/2 flex flex-col md:ml-auto w-full md:py-4 mt-4 lg:mt-8 md:mt-0 rounded">
          <div className="container px-5 mx-auto text-left">
            <div className="flex ">
              <ChatBubbleLeftRightIcon className="w-10 inline mb-4" />
              <p className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font ml-4">
                Lets connect!
              </p>
            </div>
            <div className="bg-gray-800 rounded flex p-4 mb-4 items-center hover:ring-4  hover:ring-custom-red">
              <MapPinIcon className="text-custom-red w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font text-white">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  LOCATION
                </h2>
                <p className="mt-1">
                  Stoughton, MA
                </p>
              </span>
            </div>
            <div className="bg-gray-800 rounded flex p-4 mb-4 items-center hover:ring-4 hover:ring-blue-500">
              <UserCircleIcon className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font text-white">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  LINKEDIN
                </h2>
                <a className="text-indigo-400 mt-1" href="https://www.linkedin.com/in/jasonllevine/">
                  linkedin.com/in/jasonllevine 
                </a>
              </span>
            </div>
            <div className="bg-gray-800 rounded flex p-4 mb-4 items-center hover:ring-4  hover:ring-gray-200">
              <InboxArrowDownIcon className="text-gray-200 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font text-white">
               <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="leading-relaxed">
                  jason.levine131@gmail.com
                </a>
                <button data-tooltip-id="copiedTooltip" onClick={copyEmail}>
                  <Tooltip id="copiedTooltip" content="copied to clipboard!" openOnClick/>
                  <ClipboardDocumentCheckIcon className="ml-4 text-indigo-400 w-6 inline-block mb-1" />
                </button>
              </span>
            </div>
            <div className="bg-gray-800 rounded flex p-4 mb-4 items-center hover:ring-4  hover:ring-custom-red">
              <DevicePhoneMobileIcon className="text-custom-red w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font text-white">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  PHONE
                </h2>
                <p className="leading-relaxed">(774) 249-5018</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact