import React from 'react';
import Navbar from '../../Navbar/Navbar'; // Importe o Navbar
import GridExampleCelled from './GridExampleCelled';

function Home() {
  return (
    <div>
      <Navbar /> {/* Renderize o componente Navbar aqui */}
      <GridExampleCelled/>
    </div>
  );
}

export default Home;
