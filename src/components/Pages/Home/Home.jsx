import React from 'react';
import Navbar from '../../Navbar/Navbar'; // Importe o Navbar
import GridExampleCelled from './GridExampleCelled';
import Footer from '../../Footer/Footer';
import Card2 from '../../Card2/Card2';
import Carousel from '../../Carousel/carousel'
import Carousel2 from '../../Carousel2/carousel2';
import Card  from '../../Card/Card';

function Home() {
  return (
    <div>
      <Navbar /> {/* Renderize o componente Navbar aqui */}   
      <Card/> 
      <Carousel2/> 
      <Card2 /> 
      <Carousel/>
      <Footer />
      {/* <GridExampleCelled/> */}
    </div>
  );
}

export default Home;
