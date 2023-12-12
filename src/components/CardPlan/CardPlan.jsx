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
            Tenha ainda <span>mais benefícios</span>, faça o seu trabalho ser
            visto por muito mais pessoas
          </h2>
        </div>
      </div>

      <div className="container-planos">
        {/* <div className="plano-card">
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
            <i className="bi bi-check-circle-fill"></i>Divulgação Gratuita
            </li>
            <li>
            <i className="bi bi-check-circle-fill"></i>+ 5 fotos adicionais
            </li>
          </div>
          <a className="plano-btn" href="/free">
            Adquirir
          </a>
        </div> */}

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
            <i className="bi bi-check-circle-fill"></i>Perfil Verificado
            </li>
            <li>
            <i className="bi bi-check-circle-fill"></i>Divulgue suas promoções
            </li>
            <li>
            <i className="bi bi-check-circle-fill"></i>+ 15 fotos adicionais
            </li>
            <li>
            <i className="bi bi-check-circle-fill"></i>+ informações para sua marca
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
              <span>R$ 99,90</span>/ mês
            </p>
          </div>
          <div className="plano-inclui">
            <p>Inclui</p>
            <li>
            <i className="bi bi-check-circle-fill"></i>Plano Premium
            </li>
            <li>
            <i className="bi bi-check-circle-fill"></i>Site exclusivo
            </li>
          </div>
          <a className="plano-btn" href="/free">
            Adquirir
          </a>
        </div>
      </div>
    </div>
  );
  
}

export default CardPlan;
