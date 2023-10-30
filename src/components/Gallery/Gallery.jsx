import React from "react";
import "../Gallery/Gallery.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import gatinho from "../../img/gatinho.svg";

function Gallery(){
    return(

        <><header>

            <Navbar>

            </Navbar>

        </header>
    
        <body>

                <section className="gallery-titulos1">

                    <h1 className="gallery-titulo1">
                        O melhor sistema de buscas 
                        comerciais da sua região 
                    </h1>

                    <h5 className="gallery-subtitulo1">
                        Se informe sempre onde há um negócio perto de você, dê mais visibilidade aos seus serviços e encontre parceiros
                    </h5>

                </section>

                <section className="gallery-banner">

                    <div className="gallery-banner-content">

                    </div>

                </section>

                <section className="gallery-titulos2">

                    <h1 className="gallery-titulo2">
                        Todos os pequenos negócios da sua cidades
                        localizados em um só site
                    </h1>

                    <h5 className="gallery-subtitulo2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    </h5>

                    <div className="gallery-info">

                        <h1>100% Texto</h1>
                        <h1>2023 Texto</h1>
                        <h1>50 Texto</h1>
                        
                    </div>

                </section>

                    <section className="gallery-titulos3">

                        <h1 className="gallery-titulo3">Afinal quem somos?</h1>

                        <h5 className="gallery-subtitulo3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </h5>

                    </section>

                    <section className="gallery-images">

                        <div className="gallery-container">

                            <figure className="gallery__item gallery__item--1">
                                <img src={gatinho} className="gallery-img" alt="image1" />
                            </figure>

                            <figure className="gallery__item gallery__item--2">
                                <img src={gatinho} className="gallery-img" alt="image2" />
                            </figure>

                            <figure className="gallery__item gallery__item--3">
                                <img src={gatinho} className="gallery-img" alt="image3" />
                            </figure>

                            <figure className="gallery__item gallery__item--4">
                                <img src={gatinho} className="gallery-img" alt="image4" />
                            </figure>

                            <figure className="gallery__item gallery__item--5">
                                <img src={gatinho} className="gallery-img" alt="image5" />
                            </figure>
                            
                            <figure className="gallery__item gallery__item--6">
                                <img src={gatinho} className="gallery-img" alt="image6" />
                            </figure>
                            

                        </div>

                    </section>



            </body>

            <Footer>

            </Footer>
</>

    )
}

export default Gallery;