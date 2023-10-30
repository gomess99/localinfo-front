import React from "react";
import "../Gallery/Gallery.css"
import gatinho from "../../img/gatinho.webp";

function Gallery() {
    return (

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

    )
}

export default Gallery;