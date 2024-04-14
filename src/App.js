import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar";
import "./App.css"

export default function App() {
  return (
    <main className='text-gray-400 background body-font'>
      <Navbar />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
        <Footer />
        <Sidebar />
    </main>
  );
}
