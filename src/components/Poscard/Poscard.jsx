import React from "react";
import "../Poscard/Poscard.css";

function Poscard() {
  return (
    <div className="poscard-dados">
      <div className="dados-home">
        <div>
          <h1>
            Exposição <span>gratuito</span> e <span>personalizada</span>
          </h1>
          <p>
            Divulgue o seu trabalho e encontre outros de forma gratuita e fácil,
            além de poder personalizar sua própria página da forma que imaginar
          </p>
        </div>
        <div>
          <h1>
            Filtre por <span>região</span> e <span>categoria</span>
          </h1>
          <p>
            Filtre pelas mais diversas categorias do mundo dos negócios,
            encontre os mais próximos de você e surpreenda-se
          </p>
        </div>
        <div>
          <h1>
            Negócios de <span>qualidade</span> e <span>verificados</span>
          </h1>
          <p>
            Todas a divulgação sem duvidas são de extrema qualidade e, o melhor,
            são certificadas e verificadas existência real dos comerciantes
          </p>
        </div>
      </div>
      <h2 className="categorias-title">Categorias</h2>
    </div>
  );
}

export default Poscard;
