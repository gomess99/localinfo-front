import React, { useState } from "react";
import "./carousel.css";
import CarouselCard from "./CarouselCard";
import PrePerfil  from "../PrePerfil/PrePerfil";
import Img1 from "../../img/carousel/test1.jpeg";
import Img2 from "../../img/carousel/test2.png";
import Img3 from "../../img/carousel/test3.jpeg";
import Img4 from "../../img/carousel/test4.png";
import Img5 from "../../img/carousel/test5.jpeg";
import Img6 from "../../img/carousel/test6.png";
import Img7 from "../../img/carousel/test7.png";
import Img8 from "../../img/carousel/test8.png";
import Img9 from "../../img/carousel/test9.png";

const imagesData = [
    { img: Img1, name: "Nome1", category: "Categoria1", likes: 8 },
    { img: Img2, name: "Nome2", category: "Categoria2", likes: 5 },
    { img: Img3, name: "Nome3", category: "Categoria3", likes: 12 },
    { img: Img4, name: "Nome4", category: "Categoria4", likes: 12 },
    { img: Img5, name: "Nome5", category: "Categoria5", likes: 12 },
    { img: Img6, name: "Nome6", category: "Categoria6", likes: 12 },
    { img: Img7, name: "Nome7", category: "Categoria7", likes: 12 },
    { img: Img8, name: "Nome8", category: "Categoria8", likes: 12 },
    { img: Img9, name: "Nome9", category: "Categoria9", likes: 12 },
];

function Carousel() {
    const [isPerfilOpen, setIsPerfilOpen] = useState(false);
    const [selectedImageData, setSelectedImageData] = useState(null);

    const openPerfil = (imageData) => {
        setSelectedImageData(imageData);
        setIsPerfilOpen(true);
    };

    const closePerfil = () => {
        setSelectedImageData(null);
        setIsPerfilOpen(false);
    };

    return (
        <div className="main-carousel">
            <div className="carousel">
                {imagesData.map((data, index) => (
                    <div key={index} onClick={() => openPerfil(data)}>
                        <CarouselCard {...data} />
                    </div>
                ))}
            </div>

            <div className="carousel">
                {imagesData.map((data, index) => (
                    <div key={index} onClick={() => openPerfil(data)}>
                        <CarouselCard {...data} />
                    </div>
                ))}
            </div>

            {isPerfilOpen && selectedImageData && (
                <PrePerfil imageData={selectedImageData} onClose={closePerfil} />
            )}
        </div>
    );
}

export default Carousel;
