import React from 'react';
import Navbar from '../../Navbar/Navbar'; // Importe o Navbar
import GridExampleCelled from './GridExampleCelled';
import Footer from '../../Footer/Footer';
import Card from '../../Card/Card';

function Home() {
  return (
    <div>
      <Navbar /> {/* Renderize o componente Navbar aqui */}
      <Card />
      <Footer />
      {/* <GridExampleCelled/> */}
    </div>
  );
}

export default Home;
