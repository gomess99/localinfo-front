import React from "react";
import "../CardPlan/CardPlan.css";

function CardPlan() {
  return (
    <div>
      <div className="plano-titulo-principal">
        <div className="plano-texto">
          <h1>
             O <span>melhor plano</span> para você
          </h1>
          <h2>
            Tenha ainda <span>mais benefícios</span>, faça seu trabalho seja
            visto por ainda mais pessoas
          </h2>
        </div>
      </div>

      <div className="container-planos">
        <div className="plano1">
          <div className="plano-titulo">
            <h3>Free</h3>
          </div>
          <div className="um">
            <h3>R$0/mês</h3>
            <div className="dois">
              <h5>Inclui</h5>
              <ul>
                <li>Divulgação Gratuita</li>
                <li>+ 5 fotos adicionais</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="plano2">
          <div className="plano-titulo">
            <h3>Free</h3>
          </div>
          <div className="um">
            <h3>R$0/mês</h3>
            <div className="dois">
              <h5>Inclui</h5>
              <ul>
                <li>Divulgação Gratuita</li>
                <li>+ 5 fotos adicionais</li>
              </ul>
            </div>
            <button className="btn-plano" href="">
              Adquirir
            </button>
          </div>
        </div>

        <div className="plano3">
          <div className="plano-titulo">
            <h3>Free</h3>
          </div>
          <div className="um">
            <h3>R$0/mês</h3>
            <div className="dois">
              <h5>Inclui</h5>
              <ul>
                <li>Divulgação Gratuita</li>
                <li>+ 5 fotos adicionais</li>
              </ul>
            </div>
            <button className="btn-plano" href="">
              Adquirir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPlan;
