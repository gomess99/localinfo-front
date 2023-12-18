import React, { useState, useEffect } from "react";
import { getAllPlanoFree } from "../../services/planofreeServices";
import "./carousel.css";
import CarouselCard from "./CarouselCard";
import PrePerfil from "../PrePerfil/PrePerfil";

const Carousel = () => {
    const [planofree, setPlanoFree] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isPerfilOpen, setIsPerfilOpen] = useState(false);
    const [selectedImageData, setSelectedImageData] = useState(null);

    async function findAllPlanoFree() {
        try {
            const planofreeResponse = await getAllPlanoFree();
            setPlanoFree(planofreeResponse.data.results);
            setIsLoading(false);
        } catch (error) {
            console.error("Erro ao buscar planos gratuitos:", error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        findAllPlanoFree();
    }, []);

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
            {isLoading ? (
                <span className="loader"></span>
            ) : (
                <div className="carousel">

                    {planofree.map((data, index) => (
                        <div key={index} onClick={() => openPerfil(data)}>
                            <CarouselCard {...data} />
                        </div>
                    ))}

                    {planofree.map((data, index) => (
                        <div key={index} onClick={() => openPerfil(data)}>
                            <CarouselCard {...data} />
                        </div>
                    ))};

                </div>
            )}
            {isPerfilOpen && selectedImageData && (
                <PrePerfil imageData={selectedImageData} onClose={closePerfil} />
            )}
        </div>
    );
};

export default Carousel;
