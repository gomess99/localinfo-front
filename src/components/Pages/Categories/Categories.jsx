import React from 'react'
import "../Categories/Categories.css"
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import BusquePj from '../../BusquePj/BusquePj';

function Categories() {
  return (
    <div>
        <Navbar />      
        <BusquePj />
        <Footer />
    </div>
  )
}

export default Categories;
