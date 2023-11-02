import React from 'react'
import "../Categories/Categories.css"
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import BusqueLocal from '../../BusqueLocal/BusqueLocal';
import BusquePj from '../../BusquePj/BusquePj';

function Categories() {
  return (
    <div>
        <Navbar />
        <BusqueLocal />
        <BusquePj />
        <Footer />
    </div>
  )
}

export default Categories;
