import React from 'react';
import './carousel.css';

import imgRestaurante from '../../img/restaurante.png';
import imgAcademia from '../../img/academia.png';
import imgCinemas from '../../img/cinema.png';
import imgEletronico from '../../img/eletronico.png';
import imgMercados from '../../img/mercados.png';
import imgModa from '../../img/moda.png';
import imgPet_shop from '../../img/pet_shop.png';
import imgTatuagem from '../../img/tatuagem.png';

const imageSources = [
  imgRestaurante,
  imgAcademia,
  imgCinemas,
  imgEletronico,
  imgMercados,
  imgModa,
  imgPet_shop,
  imgTatuagem,
];

const categoryNames = [
  'Restaurantes',
  'Academias',
  'Cinemas',
  'Eletrônicos',
  'Mercados',
  'Moda',
  'Pet-Shops',
  'Tatuagens',
];

function Carousel() {
  return (
    <div className="categorias">
      <div className="categorias-slide">
        {imageSources.map((src, index) => (
          <div key={index} className="category-item">
            <img src={src} alt={`Category ${index + 1} Logo`} />
            <p>{categoryNames[index]}</p>
          </div>
        ))}
      </div>

      <div className="categorias-slide">
        {imageSources.map((src, index) => (
          <div key={index} className="category-item">
            <img src={src} alt={`Category ${index + 1} Logo`} />
            <p>{categoryNames[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
