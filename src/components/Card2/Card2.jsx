import React from "react";
import "../Card2/Card2.css";
import imgloja from "../../img/loja.png";
import { Link as RouterLink } from 'react-router-dom';

function Card2() {
  return (
    <div className="card2">
      <div className="card2-position">
        <div className="card2-text">
          <h1>Traga sua loja e nós cuidamos da divulgação da sua marca</h1>

          <p>
            Faça parte do nosso time, aumente o alcance do seu estabelecimento,
            serviço ou produto. Acompanhe suas avaliações e encontre novas
            parcerias de negócios.
          </p>
          <RouterLink to="/plan">
            <button className="card2-btn">Saiba mais</button>
          </RouterLink>
        </div>

        <div className="card2-img">
          <img src={imgloja} alt="Imagem do Card" />
        </div>
      </div>
    </div>
  );
}

export default Card2;
