import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import imgcard from "../../img/img-card.png";
import "../Card/Card.css";

function Card() {
  return (
    <div className="card">
      <div className="card-content">
        <h1>Encontre os melhores negócios que sua região tem a oferecer.</h1>
        <p>
          Descubra novos empreendedores, acompanhe divulgações e faça parte
          desse grupo também
        </p>
        <RouterLink to="/findbusiness">
          <button className="btn-card">O mais próximo de você</button>
        </RouterLink>
      </div>
      <div className="card-image">
        <img src={imgcard} alt="Imagem do Card" />
      </div>
    </div>
  );
}

export default Card;
