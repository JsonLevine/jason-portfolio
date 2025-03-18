import { React } from 'react'
import { CubeTransparentIcon, IdentificationIcon } from "@heroicons/react/24/solid";
import IconGitHub from './icons/github'
import { projects as actualProjects } from "../data";
import Accordion from "./Accordion.jsx"

function Projects({overrideProjects = null}) {

  const projects = overrideProjects || actualProjects // overrides for testing

    return (
        <section className="text-gray-400 body-font" data-testid="projects-section">
          <div className="container xl:px-40 px-10 py-10 mx-auto text-center">
            <div className="flex flex-col w-full mb-10">
              <div data-testid="section-title">
                <IdentificationIcon className="mx-auto inline-block w-10 mb-4" />
                <h1 className="jersey-25 sm:text-5xl text-4xl font-medium title-font mb-4 text-stronghold-platinum">
                  Professional Experience
                </h1>
              </div>
              <p className="mb-4 pb-4 mx-auto leading-relaxed text-base" data-testid="section-description">
              Recently, I have been making the transition to Project Management/Technical Project Management.
              Prior to that, I worked for over 7 years as a frontend-leaning fullstack software engineer.
              Expand the sections below for some highlites of my career so far.
              </p>
              <div className= "flex flex-col lg:flex-row justify-between" data-testid="jobs-list">
                <div className="lg:w-1/2 p-4">
                  <Accordion title="Project Management">
                    <ul>
                      <li><strong className="jersey text-2xl text-stronghold-imperial-red">Currently</strong>, I am working toward a Certified Associate in Project Management (CAPM) certification with <a className="text-indigo-400" href="https://www.pmi.org">pmi.org</a>. Estimated completion 4/1/2025.</li>
                      <li className="mt-2 border-t-2 border-blue-500">at <span className=" jersey text-2xl text-blue-500">Chewy:</span></li>
                      <li> •	I managed a cross-team backlog of tickets in JIRA and contributed heavily to analytics document creation & organization within Confluence</li>
                      <li> •	In addition, I organized regular product demos, provided frequent updates to stakeholders, and coordinated/ran regular agile ceremonies for the analytics team in order to streamline feature development</li>
                      <li className="mt-2 border-t-2 border-orange-500">at <span className=" jersey text-2xl text-orange-500">Optum:</span></li>
                      <li> •	I volunteered as a manager for new hires in our technology development program. </li>
                      <li> •	In addition, I was an active member of the Optum branch of Toastmasters International (an educational organization that teaches public speaking and leadership skills) </li>
                    </ul>
                  </Accordion>
                </div>
                <div className="lg:w-1/2 p-4" >
                  <Accordion title="Frontend Development">
                    <ul>
                      <li><strong className="jersey text-2xl text-stronghold-imperial-red">Currently</strong>, I am working on developing an online React course in partnership with newline.co.  I am also continuously updating this site, and taking courses to keep my frontend skills up to date</li>
                      <li className="mt-2 border-t-2 border-blue-500">at <span className=" jersey text-2xl text-blue-500">Chewy:</span></li>
                      <li>  •	My responsibilities included developing and enhancing critical pages such as the <a className="text-indigo-400" href="https://www.chewy.com/b/food-332">Search/Browse</a>, <a className="text-indigo-400" href="https://www.chewy.com/american-journey-protein-grains/dp/136721">Product Detail Page (PDP)</a>,
                        and <a className="text-indigo-400" href="https://www.chewy.com/">home</a> pages.</li>
                      <li>  •	Additionally, I specialized as a frontend analytics developer, collaborating extensively with multiple teams to gather user insights and conduct robust A/B testing using Optimizely.</li>
                      <li className="mt-2 border-t-2 border-orange-500">at <span className=" jersey text-2xl text-orange-500">Optum:</span></li> 
                      <li>  •	I led the continuous planning and implementation of new features for Optum's internal placement tool.</li>
                      <li>  •	I frequently held live user-testing sessions with stakeholders to gather feedback.</li>
                    </ul>
                  </Accordion>
                </div>
              </div>
              <div id="projects" data-testid="section-title">
                <CubeTransparentIcon className="hover:animate-spin-slow mx-auto inline-block w-10 mb-4 mt-20" />
                <h1 className="jersey-25 sm:text-5xl text-4xl font-medium title-font mb-4 text-stronghold-platinum">
                  Side Projects
                </h1>
              </div>
              <p className="mx-auto leading-relaxed text-base pt-4 " data-testid="section-description-2">
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
                  className="sm:w-1/2 p-4"
                  data-testid="project-item"
                >
                  <div className="flex rounded border-2 border-gray-600 relative transition ease-in-out duration-300 hover:shadow-project-shadow">
                    <img
                      alt="gallery"
                      className="absolute rounded inset-0 w-full h-full object-cover object-top"
                      src={project.image}
                      data-testid="project-image"
                    />
                    <div className="px-8 py-10 relative z- w-full bg-stronghold-eerie-black ease-in-out duration-300 opacity-0 hover:opacity-100">
                      {project.code ? 
                      <a className="absolute top-0 left-0 w-12" href={project.code} target="_blank" rel="noreferrer" data-testid="github-link"><IconGitHub /></a>
                      : <></>}
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1" data-testid="project-subtitle">
                        {project.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-stronghold-platinum mb-3" data-testid="project-title">
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
