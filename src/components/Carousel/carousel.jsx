import React from 'react';
import './carousel.css';
import img3m from '../../img/3m.svg';
import imgBarstoolStore from '../../img/barstool-store.svg';
import imgBudweiser from '../../img/budweiser.svg';
import imgBuzzfeed from '../../img/buzzfeed.svg';
import imgForbes from '../../img/forbes.svg';
import imgMacys from '../../img/macys.svg';
import imgMensHealth from '../../img/menshealth.svg';
import imgMrBeast from '../../img/mrbeast.svg';

function Carousel() {
  return (
    <div className="logos">
      <div className="logos-slide">
        <img src={img3m} alt="3M Logo" />
        <img src={imgBarstoolStore} alt="Barstool Store Logo" />
        <img src={imgBudweiser} alt="Budweiser Logo" />
        <img src={imgBuzzfeed} alt="Buzzfeed Logo" />
        <img src={imgForbes} alt="Forbes Logo" />
        <img src={imgMacys} alt="Macys Logo" />
        <img src={imgMensHealth} alt="Men's Health Logo" />
        <img src={imgMrBeast} alt="MrBeast Logo" />
      </div>
    </div>
  );
}

export default Carousel;
