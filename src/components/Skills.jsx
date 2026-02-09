import { React } from 'react'
import { WrenchScrewdriverIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";
import { skills, softskills } from "../data";

function Skills() {

  return (
    <section id="skills" tabIndex={0} aria-label='Skills Section' className="mt-10">
      <div className="container px-10 py-10 mx-auto">
        <div className="text-center">
        <WrenchScrewdriverIcon className="w-10 inline-block mb-4 text-main-text"/>
          <h1 className="jersey-25 sm:text-5xl text-4xl font-medium title-font text-stronghold-platinum mb-4">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="flex flex-wrap w-4/5 mx-auto sm:mb-2">
          {skills.map((skill) => (
            <div key={skill.name} className="p-2 sm:w-1/2 xl:w-1/4 w-full">
              <div className="bg-stronghold-eerie-black bg-opacity-70 rounded flex h-full items-center">
                <img src={skill.icon} alt={`${skill.name} Logo`} className="w-6 h-6 flex-shrink-0 mr-4"/>
                <span className="jersey-25 text-xl title-font font-medium text-stronghold-platinum">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-stronghold-red flex flex-wrap sm:pt-2 w-4/5 mx-auto">
          {softskills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 xl:w-1/4 w-full">
              <div className="bg-stronghold-eerie-black bg-opacity-70 rounded flex h-full items-center">
                <ClipboardDocumentCheckIcon className="text-stronghold-red-accessible w-6 h-6 flex-shrink-0 mr-4"/>
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
