import React from 'react';
import Navbar from '../../Navbar/Navbar'; // Importe o Navbar 
import Footer from '../../Footer/Footer';
import ExibeAboutUs from '../../C_About_Us/C_About_Us';
import Gallery from '../../Gallery/gallery';

function AboutUs(){
    return(
        <div>
            <Navbar />
            <ExibeAboutUs />
            <Gallery />
            <Footer />
        </div>
    );
};

export default AboutUs;