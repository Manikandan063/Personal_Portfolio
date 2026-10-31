import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import WhatsAppButton from '../components/WhatsAppButton';

const Portfolio = () => {
  const [currentTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'electric-amber';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('portfolio-theme', currentTheme);
  }, [currentTheme]);

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-main)] transition-colors duration-500 relative selection:bg-[var(--primary)] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default Portfolio;
