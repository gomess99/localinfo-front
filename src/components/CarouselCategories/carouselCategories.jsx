import React from 'react';
import { Link } from 'react-router-dom';
import './carouselCategories.css';

import imgRestaurante from '../../img/imgCategories/restaurante.png';
import imgAcademia from '../../img/imgCategories/academia.png';
import imgCinemas from '../../img/imgCategories/cinema.png';
import imgEletronico from '../../img/imgCategories/eletronico.png';
import imgMercados from '../../img/imgCategories/mercados.png';
import imgModa from '../../img/imgCategories/moda.png';
import imgPet_shop from '../../img/imgCategories/pet_shop.png';
import imgTatuagem from '../../img/imgCategories/tatuagem.png';

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
    <div className="categorias" id="carouselCategories">   
      <div className="categorias-slide">
        {imageSources.map((src, index) => (
          <Link key={index} to="/categories" className="category-item">
            <img src={src} alt={`Category ${index + 1} Logo`} />
            <p>{categoryNames[index]}</p>
          </Link>
        ))}
      </div>

      <div className="categorias-slide">
        {imageSources.map((src, index) => (
          <Link key={index} to="/categories" className="category-item">
            <img src={src} alt={`Category ${index + 1} Logo`} />
            <p>{categoryNames[index]}</p>
          </Link>
        ))}
      </div>

      <div className="categorias-slide">
        {imageSources.map((src, index) => (
          <Link key={index} to="/categories" className="category-item">
            <img src={src} alt={`Category ${index + 1} Logo`} />
            <p>{categoryNames[index]}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
