import React from 'react';
import Navbar from '../../Navbar/Navbar'; // Importe o Navbar
import GridExampleCelled from './GridExampleCelled';
import Footer from '../../Footer/Footer';
import Card2 from '../../Card2/Card2';
<<<<<<< HEAD
import Carousel from '../../Carousel/carousel'
import Carousel2 from '../../Carousel2/carousel2';
import Card  from '../../Card/Card';
=======
import BusqueLocal from '../../BusqueLocal/BusqueLocal'
>>>>>>> 605b04ad0c170aafe2edc2ef465a692c15923c69

function Home() {
  return (
    <div>
<<<<<<< HEAD
      <Navbar /> {/* Renderize o componente Navbar aqui */}   
      <Card/> 
      <Carousel2/> 
      <Card2 /> 
      <Carousel/>
=======
      <Navbar /> {/* Renderize o componente Navbar aqui */}
      

      <Card2 />
      <BusqueLocal />
>>>>>>> 605b04ad0c170aafe2edc2ef465a692c15923c69
      <Footer />
      {/* <GridExampleCelled/> */}
    </div>
  );
}

export default Home;
