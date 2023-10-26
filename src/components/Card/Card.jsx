import React from "react";
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
        <button>Busque aqui</button>
      </div>
      <div className="card-image">
        <img src="sua-imagem.jpg" alt="Imagem do Card" />
      </div>
    </div>
  );
}

export default Card;
