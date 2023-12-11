import React, { useEffect } from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Card2 from '../../Card2/Card2';
import Poscard from '../../Poscard/Poscard';
import CarouselCategories from '../../CarouselCategories/carouselCategories';
import Carousel from '../../Carousel/carousel';
import Card from '../../Card/Card';

function Home() {
  return (
    <div>
      <Navbar />
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
