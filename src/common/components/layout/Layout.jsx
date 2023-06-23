import React from "react";
import Routers from '../../../routes/Routers';
import Header from '../header/Header';
import About from '../../../modules/home/components/about/About';
import Education from '../../../modules/home/components/education/Education';

const Layout = () => {
  return (
    <div>
      <Header />
      <Routers />
      <About />
      <Education />
    </div>
  );
};

export default Layout;
