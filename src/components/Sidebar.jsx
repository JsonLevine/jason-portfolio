import React from 'react'
import IconGitHub from './icons/github'
import IconInstagram from './icons/instagram'
import IconLinkedin from './icons/linkedin'

function Sidebar() {
    
  return (
    <>
     {/* Place on side for medium+ */}
      <div className="hidden md:flex lg:ml-4 fixed flex-col items-center justify-center w-12 left-0 bottom-0">
        <a className="w-12" aria-label='Github' href="https://github.com/JsonLevine" target="_blank" rel="noreferrer"><IconGitHub/></a>
        <a className="w-12" aria-label='Linkedin' href="https://www.linkedin.com/in/jasonllevine/" target="_blank" rel="noreferrer"><IconLinkedin/></a>
        <a className="w-12" aria-label='Instagram' href="https://www.instagram.com/adjacent_levine/" target="_blank" rel="noreferrer"><IconInstagram/></a>
        <span className="w-[.1rem] block h-40 bg-stronghold-red"></span>
      </div>
      <div className="hidden md:flex lg:ml-4 fixed flex-col items-center justify-center w-12 right-0 top-0 z-20">
          <span className="w-[.1rem] block h-60 bg-stronghold-red"></span>
          <a href="mailto:jason.levine131@gmail.com" 
            aria-label='Open a new email to Jason Levine'
            className="transition ease-in-out duration-300 hover:text-stronghold-red hover:translate-y-1 mt-[6rem] rotate-90">
              jason.levine131@gmail.com
          </a>
      </div>

      {/* Place on bottom otherwise */}
      <div className="md:hidden flex flex-row items-center justify-center pb-10">
        <a className="w-12" aria-label='Github' href="https://github.com/JsonLevine" target="_blank" rel="noreferrer"><IconGitHub/></a>
        <a className="w-12" aria-label='Linkedin' href="https://www.linkedin.com/in/jasonllevine/" target="_blank" rel="noreferrer"><IconLinkedin/></a>
        <a className="w-12" aria-label='Instagram' href="https://www.instagram.com/adjacent_levine/" target="_blank" rel="noreferrer"><IconInstagram/></a>
      </div>
    </>
  )
}

export default Sidebar
