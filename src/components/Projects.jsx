import { React } from 'react'
import { CubeTransparentIcon, IdentificationIcon } from "@heroicons/react/24/solid";
import IconGitHub from './icons/github'
import { projects as actualProjects } from "../data";
import Accordion from "./Accordion.jsx"

function Projects({overrideProjects = null}) {

  return (
    <section className="text-stronghold-platinum body-font" data-testid="projects-section">
      <div className="container xl:px-40 px-10 py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-10">
          <div data-testid="section-title">
            <IdentificationIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="jersey-25 sm:text-5xl text-4xl font-medium title-font mb-4 text-stronghold-platinum">
              Professional Experience
            </h1>
          </div>
          <p className="bg-stronghold-eerie-black bg-opacity-70 mb-4 mx-auto leading-relaxed text-base" data-testid="section-description">
          In the last few years, I have been making the transition to Technical Product Management.
          Prior to that, I worked for over 7 years as a frontend software engineer at very well known names such as UnitedHealth Group and Chewy.
          Expand the sections below for some highlites of my career so far.
          </p>
          <div className= "flex flex-col lg:flex-row justify-between" data-testid="jobs-list">
            <div className="lg:w-1/2 p-4">
              <Accordion title="Product Management">
                <ul>
                  <li><strong className="jersey text-2xl text-stronghold-imperial-red">Currently</strong>, I am working toward a Certified Associate in Project Management (CAPM) certification with <a className="text-link-blue" href="https://www.pmi.org">pmi.org</a>. Estimated completion 5/1/2025.</li>
                  <li className="mt-2 border-t-2 border-chewy-blue">at <span className=" jersey text-2xl text-chewy-blue">Chewy:</span></li>
                  <li> •	I managed a cross-team backlog of tickets in JIRA and contributed heavily to analytics document creation & organization within Confluence.</li>
                  <li> •	Furthermore, I organized regular product demos, provided frequent updates to stakeholders, and coordinated/ran regular agile ceremonies for the analytics team in order to streamline feature development.</li>
                  <li className="mt-2 border-t-2 border-optum-orange">at <span className=" jersey text-2xl text-optum-orange">Optum (UnitedHealth):</span></li>
                  <li> •	I volunteered as a manager for new hires in our technology development program. </li>
                  <li> •	In addition, I was an active member of the Optum branch of Toastmasters International (an educational organization that teaches public speaking and leadership skills). </li>
                </ul>
              </Accordion>
            </div>
            <div className="lg:w-1/2 p-4" >
              <Accordion title="Frontend Development">
                <ul>
                  <li><strong className="jersey text-2xl text-stronghold-imperial-red">Currently</strong>, I am working on developing an online React course in partnership with newline.co.  I am also continuously updating this site, and taking courses to keep my frontend skills up to date.</li>
                  <li className="mt-2 border-t-2 border-chewy-blue">at <span className=" jersey text-2xl text-chewy-blue">Chewy:</span></li>
                  <li>  •	My responsibilities included developing and enhancing critical pages such as the <a className="text-link-blue" href="https://www.chewy.com/b/food-332">Search/Browse</a>, <a className="text-link-blue" href="https://www.chewy.com/american-journey-protein-grains/dp/136721">Product Detail Page (PDP)</a>,
                    and <a className="text-link-blue" href="https://www.chewy.com/">home</a> pages.</li>
                  <li>  •	I also functioned as the Subject Matter Expert for A/B testing & experimentation across the 20+ teams that owned pages within Chewy.com.  This involved an extensive amount of cross-team collaboration.</li>
                  <li className="mt-2 border-t-2 border-optum-orange">at <span className=" jersey text-2xl text-optum-orange">Optum (UnitedHealth):</span></li> 
                  <li>  •	I designed and built a modernized version of their internal placement tool.</li>
                  <li>  •	Afterward, I also led the continuous planning and implementation of new features for the above tool.</li>
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
          <p className="bg-stronghold-eerie-black bg-opacity-70 mx-auto leading-relaxed text-base pt-4 " data-testid="section-description-2">
          When I’m not working, I love exploring new skills and experimenting with different projects. 
          I’ve built apps with React, crafted dynamic websites on WordPress, and also dabbled in graphic and logo design with Photoshop and Illustrator.
            Below is a mix of my some of my side projects, and I will be adding more very soon.
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
              <div className="flex rounded border-2 border-stronghold-onyx relative transition ease-in-out duration-300 hover:shadow-project-shadow">
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
