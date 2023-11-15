import React from 'react';
import Navbar from '../../Navbar/Navbar'; // Importe o Navbar
import Footer from '../../Footer/Footer';
import Card2 from '../../Card2/Card2';
import Poscard from '../../Poscard/Poscard';
import CarouselCategories from '../../CarouselCategories/carouselCategories';
import Carousel from '../../Carousel/carousel';
import Card from '../../Card/Card';


function Home() {
  return (
    <div>
      <Navbar /> {/* Renderize o componente Navbar aqui */}
      <Card />
      <Carousel />
      <Card2 />
      <Poscard />
      <CarouselCategories />
      <Footer />
    </div>
  );
}

export default Home;
