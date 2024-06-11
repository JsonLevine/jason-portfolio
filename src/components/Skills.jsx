import { React, useRef } from 'react'
import { useInView } from "framer-motion"
import { CpuChipIcon, WrenchScrewdriverIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";
import { skills, softskills } from "../data";

function Skills() {
  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true })

  const greenSkillsRef = useRef(null)
  const areGreenSkillsInView = useInView(greenSkillsRef, { once: true })

  const redSkillsRef = useRef(null)
  const areRedSkillsInView = useInView(redSkillsRef, { once: true })
    return (
        <section id="skills">
          <div className="container px-5 py-10 mx-auto">
            <div ref={titleRef} className={isTitleInView ? "animate-fade animate-once animate-duration-[1500ms] animate-ease-in-out text-center mb-10": "text-center mb-10"}>
              <WrenchScrewdriverIcon className=" w-10 inline-block mb-4" />
              <h1 className="jersey-25 sm:text-5xl text-4xl font-medium title-font text-white mb-4">
                Skills &amp; Technologies
              </h1>
              <p className="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-base">
                {/* Description for skills? */}
              </p>
            </div>
            <div ref={greenSkillsRef} className={ areGreenSkillsInView ? "animate-fade-left animate-once animate-duration-[1500ms] animate-ease-in-out flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2" : "opacity-0 flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"}>
              {skills.map((skill) => (
                <div key={skill} className="p-2 sm:w-1/2 xl:w-1/4 w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                    <CpuChipIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-white">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div ref={redSkillsRef} className={ areRedSkillsInView ? "animate-fade-left animate-once animate-duration-[1500ms] animate-ease-in-out flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2" : "opacity-0 flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"}>
              {softskills.map((skill) => (
                <div key={skill} className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center">
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