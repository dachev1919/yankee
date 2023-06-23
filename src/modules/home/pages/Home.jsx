import React from "react";
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Education from '../components/education/Education';
import Skills from '../components/skills/Skills';
import Contact from '../components/contact/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
