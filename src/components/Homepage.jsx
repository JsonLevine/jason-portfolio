import React from 'react'
import About from './About'
import Projects from './Projects'
import Testimonials from './Testimonials'
import Contact from './Contact'

function Homepage({useReducedMotion}) {
  return (
    <>
      <About useReducedMotion={useReducedMotion}/>
      <Projects />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Homepage