import React from "react";
import Routers from '../../../routes/Routers';
import Header from '../header/Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <Routers />
    </div>
  );
};

export default Layout;
