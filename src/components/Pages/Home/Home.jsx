import React from 'react';
import Navbar from '../../Navbar/Navbar'; // Importe o Navbar
import Footer from '../../Footer/Footer';
import Card2 from '../../Card2/Card2';
import Poscard from '../../Poscard/Poscard';
import Carousel from '../../Carousel/carousel';
import Carousel2 from '../../Carousel2/carousel2';
import Card from '../../Card/Card';


function Home() {
  return (
    <div>
      <Navbar /> {/* Renderize o componente Navbar aqui */}
      <Card />
      <Carousel2 />
      <Card2 />
      <Poscard />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Home;
