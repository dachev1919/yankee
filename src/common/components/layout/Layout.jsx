import React from "react";
import Routers from '../../../routes/Routers';
import Header from '../header/Header';
import About from '../../../modules/home/components/about/About';

const Layout = () => {
  return (
    <div>
      <Header />
      <Routers />
      <About />
    </div>
  );
};

export default Layout;
