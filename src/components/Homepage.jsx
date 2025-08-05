import React from 'react'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Testimonials from './Testimonials'
import Contact from './Contact'

function Homepage({useReducedMotion}) {
  return (
    <>
      <About useReducedMotion={useReducedMotion}/>
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Homepage