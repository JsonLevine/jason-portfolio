import React from 'react'
import IconGitHub from './icons/github'
import IconInstagram from './icons/instagram'
import IconLinkedin from './icons/linkedin'

function Footer() {
  return (
    <>
    <div className="flex flex-row items-center justify-center p-10">
      <span className="pr-4">Designed and built by <span className="text-custom-red">Jason Levine</span></span>
      <a href="https://github.com/JsonLevine" target="_blank" rel="noreferrer"><IconGitHub /></a>
      <a href="https://www.linkedin.com/in/jasonllevine/" target="_blank" rel="noreferrer"><IconLinkedin /></a>
      <a href="https://www.instagram.com/adjacent_levine/" target="_blank" rel="noreferrer"><IconInstagram /></a>
    </div>
    </>
  )
}

export default Footer