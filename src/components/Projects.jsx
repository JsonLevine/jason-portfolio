import { React, useRef } from 'react'
import { useInView } from "framer-motion"
import { CubeTransparentIcon } from "@heroicons/react/24/solid";
import IconGitHub from './icons/github'
import { projects } from "../data";

function Projects() {
  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true })

  const contentRef = useRef(null)
  const isContentInView = useInView(contentRef, { once: true })

  const projectRef = useRef(null)
  const isProjectInView = useInView(projectRef, { once: true })

    return (
        <section id="projects" className="text-gray-400 body-font">
          <div className="container px-10 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-10">
              <div ref={titleRef} className={ isTitleInView ? "animate-fade animate-once animate-duration-[1500ms] animate-ease-in-out" : ""}>
                <CubeTransparentIcon className="hover:animate-spin-slow mx-auto inline-block w-10 mb-4" />
                <h1 className="jersey-25 sm:text-5xl text-4xl font-medium title-font mb-4 text-white">
                  Some of my Projects
                </h1>
              </div>
              <p ref={contentRef} className={ isContentInView ? "animate-fade animate-once animate-duration-[1500ms] animate-ease-in-out xl:w-2/3 pb-4 mx-auto leading-relaxed text-base" : "opacity-0 xl:w-2/3 pb-4 mx-auto leading-relaxed text-base"}>
              With over five years of experience as a frontend developer, I have honed my skills across a variety of high-visibility projects.
              At Chewy, my responsibilities included developing and enhancing critical pages such as the <a className="text-indigo-400" href="https://www.chewy.com/b/food-332">Search/Browse</a>, <a className="text-indigo-400" href="https://www.chewy.com/american-journey-protein-grains/dp/136721">Product Detail Page (PDP)</a>,
              and <a className="text-indigo-400" href="https://www.chewy.com/">home</a> pages. Additionally, I specialized as a frontend analytics developer, collaborating extensively with multiple teams to gather
              user insights and conduct robust A/B testing using Optimizely.
              </p>
              <p className={ isContentInView ? "animate-fade animate-once animate-duration-[1500ms] animate-ease-in-out xl:w-2/3 mx-auto leading-relaxed text-base pt-4 border-t border-custom-red" : "opacity-0 xl:w-2/3 mx-auto leading-relaxed text-base pt-4 border-t border-custom-red"}>
              Outside of professional commitments, I actively expand my technical repertoire. My interests have led me to develop applications using React,
              create dynamic websites with WordPress, and delve into graphic and logo design utilizing Adobe Photoshop and Illustrator.
              Below, you will find a selection of my work that showcases my versatility and commitment to excellence in digital design.
              </p>
            </div>
            <div ref={projectRef} className={ isProjectInView ? "animate-fade-down animate-once animate-duration-[1500ms] animate-ease-in-out flex flex-wrap -m-4" : "flex flex-wrap -m-4"}>
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
                    <div className="px-8 py-10 relative z- w-full border-4 border-gray-800 bg-gray-900 ease-in-out duration-300 opacity-0 hover:opacity-100">
                    {project.code ? 
                    <a className=" absolute top-0 left-0 w-12" href={project.code} target="_blank" rel="noreferrer"><IconGitHub /></a>
                    : <></>}
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