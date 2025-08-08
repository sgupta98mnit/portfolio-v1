import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LandingAnimation from './components/LandingAnimation';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showAnimation && (
          <LandingAnimation onComplete={() => setShowAnimation(false)} />
        )}
      </AnimatePresence>
      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
