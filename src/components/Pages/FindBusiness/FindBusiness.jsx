import React from 'react';
import BusqueLocal from '../../BusqueLocal/BusqueLocal';
import Navbar from '../../Navbar/Navbar'; 
import Footer from '../../Footer/Footer';
import BusquePj from '../../BusquePj/BusquePj';


function FindBusiness() {
  return (
    <div>
      <Navbar /> 
      <BusqueLocal />
      <BusquePj/>    
      <Footer />
    </div>
  );
}

export default FindBusiness;
