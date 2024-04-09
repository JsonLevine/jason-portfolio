import React from 'react'
import { CubeTransparentIcon } from "@heroicons/react/24/solid";
import { projects } from "../data";

function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-10">
              <CubeTransparentIcon className="mx-auto inline-block w-10 mb-4" />
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                Some of my Projects
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                I've worked as a frontend developer for 7+ years now. At Chewy, I worked 
                on a number of high-visibilty pages, including the <a className="text-indigo-400" href="https://www.chewy.com/b/food-332">Search/Browse</a>, <a className="text-indigo-400" href="https://www.chewy.com/american-journey-protein-grains/dp/136721">PDP</a>, 
                and <a className="text-indigo-400" href="https://www.chewy.com/">home</a> pages.
                I also worked as a frontend analytics developer, collaborating across numerous teams
                to collect user data, and run ironclad A/B tests leveraging Optimizely.
                  <br/><br/>
                In my free time, I have dabbled in a lot of different areas.  I have built apps in React,
                designed websites using Wordpress, explored the world of graphic design/logo design with Adobe 
                Photoshop & Illustrator. Below are some samples of my work.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              {projects.map((project) => (
                <a
                  href={project.link}
                  key={project.image}
                  className="sm:w-1/2 w-100 p-4">
                  <div className="flex relative shadow-project-shadow">
                    <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src={project.image}
                    />
                    <div className="px-8 py-10 relative z- w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {project.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {project.title}
                      </h1>
                      <p className="leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Projects