import { React } from 'react'
import { CubeTransparentIcon } from "@heroicons/react/24/solid";
import IconGitHub from './icons/github'
import { projects as actualProjects } from "../data";

function Projects({overrideProjects = null}) {

  const projects = overrideProjects || actualProjects // overrides for testing

    return (
        <section id="projects" className="text-gray-400 body-font" data-testid="projects-section">
          <div className="container px-10 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-10">
              <div data-testid="section-title">
                <CubeTransparentIcon className="hover:animate-spin-slow mx-auto inline-block w-10 mb-4" />
                <h1 className="jersey-25 sm:text-5xl text-4xl font-medium title-font mb-4 text-white">
                  Some of my Projects
                </h1>
              </div>
              <p className="xl:w-2/3 pb-4 mx-auto leading-relaxed text-base" data-testid="section-description">
              With over five years of experience as a frontend developer, I have honed my skills across a variety of high-visibility projects.
              At Chewy, my responsibilities included developing and enhancing critical pages such as the <a className="text-indigo-400" href="https://www.chewy.com/b/food-332">Search/Browse</a>, <a className="text-indigo-400" href="https://www.chewy.com/american-journey-protein-grains/dp/136721">Product Detail Page (PDP)</a>,
              and <a className="text-indigo-400" href="https://www.chewy.com/">home</a> pages. Additionally, I specialized as a frontend analytics developer, collaborating extensively with multiple teams to gather
              user insights and conduct robust A/B testing using Optimizely.
              </p>
              <p className="xl:w-2/3 mx-auto leading-relaxed text-base pt-4 border-t border-custom-red" data-testid="section-description-2">
              When I’m not working, I love exploring new skills and experimenting with different projects. 
              I’ve built apps with React, crafted dynamic websites on WordPress, and also dabbled in graphic and logo design with Photoshop and Illustrator.
               Below is a mix of my work that shows my range and passion for digital design.
              </p>
            </div>
            <div className= "flex flex-wrap -m-4" data-testid="projects-list">
              {projects.map((project) => (
                <a
                  target="_blank" 
                  rel="noreferrer"
                  href={project.link}
                  key={project.image}
                  className="sm:w-1/2  w-100 p-4"
                  data-testid="project-item"
                >
                  <div className="flex rounded border-2 border-gray-600 relative transition ease-in-out duration-300 hover:shadow-project-shadow">
                    <img
                      alt="gallery"
                      className="absolute rounded inset-0 w-full h-full object-cover object-center"
                      src={project.image}
                      data-testid="project-image"
                    />
                    <div className="px-8 py-10 relative z- w-full bg-gray-900 ease-in-out duration-300 opacity-0 hover:opacity-100">
                      {project.code ? 
                      <a className="absolute top-0 left-0 w-12" href={project.code} target="_blank" rel="noreferrer" data-testid="github-link"><IconGitHub /></a>
                      : <></>}
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1" data-testid="project-subtitle">
                        {project.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3" data-testid="project-title">
                        {project.title}
                      </h1>
                      <p className="leading-relaxed" data-testid="project-description">{project.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Projects;
