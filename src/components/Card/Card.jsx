import React from "react";
import imgcard from "../../img/img-card.png"
import "../Card/Card.css";

function Card() {
  return (
    <div className="card">
      <div className="card-content">
        <h2>Encontre os melhores negócios que sua região tem a oferecer.</h2>
        <p>
          Descubra novos empreendedores, acompanhe divulgações e faça parte
          desse grupo também
        </p>
        <button className="btn-card">Saiba Mais</button>
      </div>
      <div className="card-image">
        <img src={imgcard} alt="Imagem do Card" />
      </div>
    </div>
  );
}

export default Card;
