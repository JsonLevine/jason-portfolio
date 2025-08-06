import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Route, Routes } from 'react-router-dom';
import { useReducedMotion } from '@react-spring/web'
import { loadFull } from "tsparticles";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer"
// import ScreenDebugger from "./components/ScreenDebugger";
import Sidebar from "./components/Sidebar";
import ReducedMotionBanner from "./components/ReducedMotionBanner";
import particlesOptions from "./particles.json";
import "./App.css"
import PageNotFound from "./components/PageNotFound";

export default function App() {
  const [init, setInit] = useState(false);
  const reducedMotion = useReducedMotion()

  // Initialize the particles engine if it hasnt been initialized yet (the background animation)
  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  });

  return (
    <main className='text-main-text background body-font'>
      {init && !reducedMotion && <Particles options={particlesOptions}/>}
      {/* Uncomment the line below (and the import on line 12) to enable the screen debugger */}
      {/* <ScreenDebugger />  */}
      <Navbar useReducedMotion={reducedMotion}/>
      {reducedMotion && <ReducedMotionBanner />}
      <Routes>
        <Route path="/" element={<Homepage useReducedMotion={reducedMotion}/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <Sidebar useReducedMotion={reducedMotion}/>
    </main>
  );
}
