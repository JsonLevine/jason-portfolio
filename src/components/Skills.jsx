import React from 'react'
import { CpuChipIcon, WrenchScrewdriverIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";
import { skills, softskills } from "../data";

function Skills() {
    return (
        <section id="skills">
          <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-10">
              <WrenchScrewdriverIcon className="w-10 inline-block mb-4" />
              <h1 className="jersey-25 sm:text-5xl text-4xl font-medium title-font text-white mb-4">
                Skills &amp; Technologies
              </h1>
              <p className="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-base">
                {/* Description for skills? */}
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {skills.map((skill) => (
                <div key={skill} className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center hover:ring-4 hover:ring-green-400/50">
                    <CpuChipIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-white">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {softskills.map((skill) => (
                <div key={skill} className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center hover:ring-4 hover:ring-red-400/50">
                    <ClipboardDocumentCheckIcon className="text-red-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-white">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Skills