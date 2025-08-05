import { React } from 'react'
import { CubeTransparentIcon, IdentificationIcon } from "@heroicons/react/24/solid";
import IconGitHub from './icons/github'
import { projects as actualProjects } from "../data";
import Accordion from "./Accordion.jsx"
import Disclaimer from './Disclaimer.jsx';

function Projects({overrideProjects = null}) {

  const projects = overrideProjects || actualProjects // Overrides for testing

  return (
    <section tabIndex={0} aria-label='Professional Experience Section' className="text-stronghold-platinum body-font mt-10" data-testid="projects-section">
      <div className="container xl:px-40 px-10 py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-4">
          <div data-testid="section-title">
            <IdentificationIcon className="text-main-text mx-auto inline-block w-10 mb-4"/>
            <h1 className="jersey-25 sm:text-5xl text-4xl font-medium title-font mb-4 text-stronghold-platinum">
              Professional Experience
            </h1>
          </div>
          <p className="bg-stronghold-eerie-black bg-opacity-70 mb-4 px-4 mx-auto leading-relaxed text-base" data-testid="section-description">
          In the last few years, I have been making the transition to Technical Product Management.
          Prior to that, I worked for over 7 years as a frontend software engineer at very well known names such as UnitedHealth Group and Chewy.
          Expand the sections below for some highlites of my career so far.
          </p>
          <div className= "flex flex-col lg:flex-row justify-between" data-testid="jobs-list">
            <div className="lg:w-1/2 p-4">
              <Accordion title="Product Management">
                <ul>
                  <div className="bg-stronghold-red/20 mt-2 pb-2 border-t-2 pl-2 pr-2 border-stronghold-red ">
                    <li><strong className="jersey text-2xl text-stronghold-red-accessible">Currently:</strong></li>
                    <li><span className="text-stronghold-red-accessible">•</span> I am working toward a Certified Associate in Project Management (CAPM) certification with <a className="text-link-blue" href="https://www.pmi.org">pmi.org</a>. This is to formalize extensive hands-on experience with structured methodologies that are essential for project/product management</li>
                  </div>
                  <div className="bg-chewy-blue/20 mt-2 pb-2 border-t-2 pl-2 pr-2 border-chewy-blue">
                    <li>at <span className=" jersey text-2xl text-chewy-blue-accessible">Chewy:</span></li>
                    <li><span className="text-chewy-blue-accessible">•</span>	I managed a cross-team backlog of tickets in JIRA and contributed heavily to analytics document creation & organization within Confluence.</li>
                    <li><span className="text-chewy-blue-accessible">•</span>	I organized regular product demos - providing frequent updates to stakeholders. I also coordinated & ran regular agile ceremonies for the analytics team in order to streamline feature development.</li>
                    <li><span className="text-chewy-blue-accessible">•</span>	I	led a critical recovery operation after a JIRA failure, rebuilding 300+ tickets with complete metadata in under 24 hours to prevent sprint disruption</li>
                  </div>
                  <div className="bg-optum-orange/20 mt-2 pb-2 border-t-2 pl-2 pr-2 border-optum-orange">
                    <li>at <span className="jersey text-2xl text-optum-orange-accessible">Optum (UnitedHealth):</span></li>
                    <li><span className="text-optum-orange-accessible">•</span>	I volunteered as a manager for new hires in our technology development program. </li>
                    <li><span className="text-optum-orange-accessible">•</span>	In order to continuously improve our tools, I ran live user-testing feedback sessions with relevant stakeholders.</li>
                    <li><span className="text-optum-orange-accessible">•</span>	I was an active member of the Optum branch of Toastmasters International (an educational organization that teaches public speaking and leadership skills). </li>
                  </div>
                </ul>
              </Accordion>
            </div>
            <div className="lg:w-1/2 p-4">
              <Accordion title="Frontend Development">
                <ul>
                  <div className="bg-stronghold-red/20 mt-2 pb-2 border-t-2 pl-2 pr-2 border-stronghold-red">
                    <li><strong className="jersey text-2xl text-stronghold-red-accessible">Currently:</strong></li>
                    <li><span className="text-stronghold-red-accessible">•</span> I am working on developing an online React course in partnership with newline.co.  In addition, I am continuously using this site to learn and experiment with new tools, as well as taking courses to keep my frontend skills up to date.</li>
                  </div>
                  <div className="bg-chewy-blue/20 mt-2 pb-2 border-t-2 pl-2 pr-2 border-chewy-blue">
                    <li>at <span className=" jersey text-2xl text-chewy-blue-accessible">Chewy:</span></li>
                    <li><span className="text-chewy-blue-accessible">•</span>	My responsibilities included developing and enhancing critical pages such as the <a className="text-link-blue" href="https://www.chewy.com/b/food-332">Search/Browse</a>, <a className="text-link-blue" href="https://www.chewy.com/american-journey-protein-grains/dp/136721">Product Detail Page (PDP)</a>,
                      and <a className="text-link-blue" href="https://www.chewy.com/">Home</a> pages.</li>
                    <li><span className="text-chewy-blue-accessible">•</span>	I functioned as the Subject Matter Expert for A/B testing & experimentation across the 20+ teams that owned pages within Chewy.com.  This involved an extensive amount of cross-team collaboration.</li>
                    <li><span className="text-chewy-blue-accessible">•</span>	I directed the technical implementation of user interaction tracking and analytics architecture, creating metrics frameworks that shaped product decisions and user experience improvements across the platform.</li>
                  </div>
                  <div className="bg-optum-orange/20 mt-2 pb-2 border-t-2 pl-2 pr-2 border-optum-orange">
                    <li>at <span className=" jersey text-2xl text-optum-orange-accessible">Optum (UnitedHealth):</span></li> 
                    <li><span className="text-optum-orange-accessible">•</span>	I designed and built a modernized version of a very outdated internal placement tool.</li>
                    <li><span className="text-optum-orange-accessible">•</span>	I led the continuous planning and implementation of new features for the above tool.</li>
                    <li><span className="text-optum-orange-accessible">•</span>	I functioned as the lead engineer on building a tool designed to securely store information on internal projects and resources.</li>
                  </div>
                </ul>
              </Accordion>
            </div>
          </div>
          <Disclaimer />
          <div id="projects" tabIndex={0} aria-label='Projects Section' className="mt-10 pt-10">
            <CubeTransparentIcon className="text-main-text hover:animate-spin-slow mx-auto inline-block w-10 mb-4"/>
            <h1 className="jersey-25 sm:text-5xl text-4xl font-medium title-font mb-4 text-stronghold-platinum">
              Side Projects
            </h1>
          </div>
          <p className="bg-stronghold-eerie-black bg-opacity-70 mx-auto leading-relaxed text-base px-4" data-testid="section-description-2">
          When I’m not working, I love exploring new skills and experimenting with different projects. 
          I’ve built apps with React, crafted dynamic websites on WordPress, and also dabbled in graphic and logo design with Photoshop and Illustrator.
            Below is a mix of my some of my side projects, and I will be adding more very soon.
          </p>
        </div>
        <div className="flex flex-wrap" data-testid="projects-list">
          {projects.map((project) => (
            <a
              target={project.newTab ? "_blank" : undefined}
              rel="noreferrer"
              href={project.link}
              key={project.title}
              className="md:w-1/2 p-4"
              data-testid="project-item"
              aria-label={`Open ${project.title}`}
            >
              <div className="flex rounded border-2 border-stronghold-onyx relative transition ease-in-out duration-300 hover:shadow-project-shadow">
                <img
                  alt={`Preview of ${project.title} project`}
                  className="absolute rounded inset-0 w-full h-full object-cover object-top"
                  src={project.image}
                  data-testid="project-image"
                />
                <div className="px-8 py-10 relative z- w-full bg-stronghold-eerie-black ease-in-out duration-300 opacity-0 hover:opacity-100">
                  {project.code ? 
                  <a className="absolute top-0 left-0 w-12"
                    href={project.code} 
                    aria-label={`Open ${project.title} GitHub repository in new tab`}
                    target="_blank" 
                    rel="noreferrer" 
                    data-testid="github-link">
                    <IconGitHub />
                  </a>
                  : <></>}
                  <h2 className="tracking-widest text-sm title-font font-medium text-stronghold-green mb-1" data-testid="project-subtitle">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-stronghold-red-accessible mb-3" data-testid="project-title">
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
