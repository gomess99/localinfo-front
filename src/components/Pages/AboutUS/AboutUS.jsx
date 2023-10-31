import React from 'react';
import Navbar from '../../Navbar/Navbar'; // Importe o Navbar 
import Footer from '../../Footer/Footer';
import ExibeAboutUs from '../../C_About_Us/C_About_Us';


function AboutUs(){
    return(
        <div>
            <Navbar />
            <ExibeAboutUs />
            <Footer />
        </div>
    );
};

export default AboutUs;