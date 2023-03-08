import { useState } from 'react';
import Circle from './components/Circle';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Project from './components/project/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll } from 'framer-motion';
import './assets/sass/main.css';

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className='container'>
        <Circle />
        <Header />
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div >
    </>

  )
}

export default App
