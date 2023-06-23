import React from "react";
import Routers from '../../../routes/Routers';
import Header from '../header/Header';
import About from '../../../modules/home/components/about/About';
import Education from '../../../modules/home/components/education/Education';
import Skills from '../../../modules/home/components/skills/Skills';

const Layout = () => {
  return (
    <div>
      <Header />
      <Routers />
      <About />
      <Education />
      <Skills />
    </div>
  );
};

export default Layout;
