import Routers from '../../../routes/Routers';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = () => {
  document.addEventListener('scroll', (e) => {
    e.preventDefault();
  })
  return (
    <div>
      <Header />
      <Routers />
      <Footer />
    </div>
  );
};

export default Layout;
