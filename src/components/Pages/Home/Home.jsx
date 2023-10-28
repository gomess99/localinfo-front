import React from 'react';
import Navbar from '../../Navbar/Navbar'; // Importe o Navbar
import GridExampleCelled from './GridExampleCelled';
import Footer from '../../Footer/Footer';
import Card2 from '../../Card2/Card2';
import BusqueLocal from '../../BusqueLocal/BusqueLocal'

function Home() {
  return (
    <div>
      <Navbar /> {/* Renderize o componente Navbar aqui */}
      

      <Card2 />
      <BusqueLocal />
      <Footer />
      {/* <GridExampleCelled/> */}
    </div>
  );
}

export default Home;
