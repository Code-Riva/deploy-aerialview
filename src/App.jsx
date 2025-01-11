//REACT
import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Service from './components/Services/Services.jsx';
import Products from './components/Products/Products.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import VideosComp from './components/VideosComp/VideosComp.jsx';
import FAQ from './components/FAQ/FAQ.jsx';
import Collab from './components/Collab/Collab.jsx';
import Footer from './components/Footer/Footer.jsx';

//CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  React.useEffect(() => {
    AOS.init(
      {
        duration: 1000,
        easing: "ease-in-out",
        offset: 100,
        delay: 100,
      });
      AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden bg-white dark:bg-dark duration-300">
      <Navbar />
      <Hero />
      <Service />
      <Products />
      <Gallery />
      <VideosComp /> 
      <FAQ />
      <Collab />
      <Footer />
    </div>
  );
};

export default App;