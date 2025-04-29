import { React } from 'react'
import { WrenchScrewdriverIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";
import { skills, softskills } from "../data";

function Skills() {

  return (
    <section id="skills">
      <div className="container px-10 py-10 mx-auto">
        <div className="text-center">
        <WrenchScrewdriverIcon className="w-10 inline-block mb-4 text-main-text"/>
          <h1 className="jersey-25 sm:text-5xl text-4xl font-medium title-font text-stronghold-platinum mb-4">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill.name} className="cursor-default p-2 sm:w-1/2 xl:w-1/4 w-full">
              <div className="bg-stronghold-jet rounded flex p-4 h-full items-center transition ease-in-out duration-300 hover:bg-stronghold-red hover:-translate-y-1 hover:scale-105">
                <img src={skill.icon} alt={`${skill.name} Logo`} className="w-6 h-6 flex-shrink-0 mr-4"/>
                <span className="jersey-25 text-xl title-font font-medium text-stronghold-platinum">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-stronghold-red flex flex-wrap sm:pt-2 lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {softskills.map((skill) => (
            <div key={skill} className="cursor-default p-2 sm:w-1/2 w-full">
              <div className="bg-stronghold-jet group rounded flex p-4 h-full items-center transition ease-in-out duration-300 hover:bg-stronghold-red hover:-translate-y-1 hover:scale-105">
                <ClipboardDocumentCheckIcon className="text-stronghold-red w-6 h-6 flex-shrink-0 mr-4 transition ease-in-out duration-300 group-hover:text-stronghold-platinum"/>
                <span className="jersey-25 text-xl title-font font-medium text-stronghold-platinum">
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