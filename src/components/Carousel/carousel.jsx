import React, { useState } from "react";
import "./carousel.css";
import CarouselCard from "./CarouselCard";
import PrePerfil  from "../PrePerfil/PrePerfil";
import Img1 from "../../img/carousel/test1.gif";
import Img2 from "../../img/carousel/test2.gif";
import Img3 from "../../img/carousel/test3.png";
import Img4 from "../../img/carousel/test4.png";
import Img5 from "../../img/carousel/test5.png";
import Img6 from "../../img/carousel/test6.png";
import Img7 from "../../img/carousel/test7.png";
import Img8 from "../../img/carousel/test8.png";
import Img9 from "../../img/carousel/test9.png";

const imagesData = [
    { img: Img1, name: "Tattoo Rock", category: "Tatuagens", likes: 52 },
    { img: Img3, name: "Lila Make", category: "Maquiagem", likes: 42 },
    { img: Img4, name: "Oficina da Márcia", category: "Mecânica", likes: 63 },
    { img: Img5, name: "Sonhos da Praça", category: "Padaria", likes: 62 },
    { img: Img6, name: "Rodrig's", category: "Roupas", likes: 64 },
    { img: Img7, name: "MalheFit", category: "Academia", likes: 85 },
    { img: Img2, name: "PizzariaQd+", category: "Pizzaria", likes: 83 },
    { img: Img8, name: "Meu Pet", category: "Pet Shop", likes: 121 },
    { img: Img9, name: "WiliTec", category: "Celulares", likes: 36 },
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
