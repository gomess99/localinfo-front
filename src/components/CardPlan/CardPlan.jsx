import React from "react";
import "../CardPlan/CardPlan.css";

function CardPlan() {
  return (
    <div className="cardplan">
      <div className="plano-titulo-principal">
        <div className="plano-texto">
          <h1 className="plano-texto-titulo">
            O <span>melhor plano</span> para você
          </h1>
          <h2 className="plano-texto-subtitulo">
            Tenha ainda <span>mais benefícios</span>, faça seu trabalho seja
            visto por ainda mais pessoas
          </h2>
        </div>
      </div>

      <div className="container-planos">
        <div className="plano-card">
          <div className="plano-titulo">
            <h3>Free</h3>
          </div>
          <div className="plano-price">
            <p>
              <span>R$ 0</span>/ mês
            </p>
          </div>
          <div className="plano-inclui">
            <p>Inclui</p>
            <li>
              <div className="icon-verif"></div>Divulgação Gratuita
            </li>
            <li>
              <div className="icon-verif"></div>+ 5 fotos adicionais
            </li>
          </div>
          <a className="plano-btn" href="/free">
            Adquirir
          </a>
        </div>

        <div className="plano-card">
          <div className="plano-titulo">
            <h3>Premium</h3>
          </div>
          <div className="plano-price">
            <p>
              <span>R$ 70</span>/ mês
            </p>
          </div>
          <div className="plano-inclui">
            <p>Inclui</p>
            <li>
              <div className="icon-verif"></div>Perfil Verificado
            </li>
            <li>
              <div className="icon-verif"></div>Divulgue suas promoções
            </li>
            <li>
              <div className="icon-verif"></div>+ 15 fotos adicionais
            </li>
            <li>
              <div className="icon-verif"></div>+ informações para sua marca
            </li>
          </div>
          <a className="plano-btn" href="/premium">
            Adquirir
          </a>
        </div>

        <div className="plano-card">
          <div className="plano-titulo">
            <h3>Plus</h3>
          </div>
          <div className="plano-price">
            <p>
              <span>R$ 150</span>/ mês
            </p>
          </div>
          <div className="plano-inclui">
            <p>Inclui</p>
            <li>
              <div className="icon-verif"></div>Plano Premium
            </li>
            <li>
              <div className="icon-verif"></div>Site exclusivo
            </li>
          </div>
          <a className="plano-btn" href="/planofree">
            Adquirir
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardPlan;
