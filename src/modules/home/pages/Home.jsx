import React, { useEffect } from 'react';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Education from '../components/education/Education';
import Skills from '../components/skills/Skills';
import Contact from '../components/contact/Contact';
import styles from '../../../common/components/header/Header.module.scss';

const Home = () => {
  useEffect(() => {
    // active navbar links
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    document.addEventListener('scroll', () => {
      sections.forEach(section => {
        let top = window.scrollY;
        let sectionOffsetTop = section.offsetTop - 100;
        let sectionHeight = section.offsetHeight;
        let sectionId = section.getAttribute('id');

        if (top >= sectionOffsetTop && top < sectionOffsetTop + sectionHeight) {
          // active navbar links
          navLinks.forEach(link => {
            link.classList.remove(`${styles.active}`);
            document.querySelector(`header nav a[href*='${sectionId}']`).classList.add(`${styles.active}`);
          });
          // active sections for animation on scroll
          section.classList.add('show-animate');
        } else {
          section.classList.remove('show-animate');
        }
      });
    });
    // END active navbar links
  }, []);

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
