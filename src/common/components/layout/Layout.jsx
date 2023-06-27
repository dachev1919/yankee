import Routers from '../../../routes/Routers';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = () => {

  return (
    <div>
      <Header />
      <Routers />
      <Footer />
    </div>
  );
};

export default Layout;
