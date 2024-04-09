import React from 'react'
import { ChatBubbleLeftRightIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 pb-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:w-100 p-4 flex items-start justify-start relative">
          <img
            width="100%"
            height="100%"
            className="inset-0 rounded ring-4 ring-custom-red/50 ring-offset-4 ring-offset-gray-900 hover:ring-custom-red"
            src="/assets/contact.png"
          />
        </div>
        <div className="md:w-1/2 flex flex-col md:ml-auto w-full md:py-4 mt-4 lg:mt-8 md:mt-0 rounded">
          <div className="container px-5 mx-auto text-center sm:text-left">
            <ChatBubbleLeftRightIcon className="w-10 inline-block mb-4" />
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font mb-8">
              Lets connect!
            </h2>
            <div className="bg-gray-800 bg-opacity-40 p-8 rounded">
              <div className="inline-flex items-start">
                <div className= "mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    LINKEDIN
                  </h2>
                  <a className="text-indigo-400 mt-1" href="https://www.linkedin.com/in/jasonllevine/">
                    linkedin.com/in/jasonllevine 
                    <ArrowTopRightOnSquareIcon className="w-5 inline-block mb-1" />
                  </a>
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                    EMAIL
                  </h2>
                  <a className="text-indigo-400 leading-relaxed" href="mailto:jason.levine131@gmail.com">
                    jason.levine131@gmail.com
                    <ArrowTopRightOnSquareIcon className="w-5 inline-block mb-1" />
                  </a>
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                    LOCATION
                  </h2>
                  <p className="mt-1">
                    Stoughton, MA
                  </p>
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">(774) 249-5018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact