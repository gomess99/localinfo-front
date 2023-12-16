import React from "react";
import "../CardPlan/CardPlan.css";

function CardPlan() {

  const handleAdquirirClick = (plano) => {
    const confirmacao = window.confirm(`Você confirma a aquisição do plano ${plano}?`);

    if (confirmacao) {
      // Lógica para prosseguir com a adição do plano
      // Isso pode incluir redirecionar o usuário para a página de pagamento ou realizar outras ações necessárias
      console.log(`Usuário confirmou a adição do plano ${plano}`);
    }
  };

  return (
    <div className="cardplan">
      <div className="plano-titulo-principal">
        <div className="plano-texto">
          <h1 className="plano-texto-titulo">
            O <span>melhor plano</span> para você
          </h1>
          <h2 className="plano-texto-subtitulo">
            Traga o seu negócio para nossa plataforma, faça o mesmo ser
             <span> reconhecido</span> por muito mais pessoas!
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
              <span>R$ 0,00</span>/ mês
            </p>
          </div>
          <div className="plano-inclui">
            <p>Inclui</p>
            <li>
            <i className="bi bi-check-circle-fill"></i>Divulgação Gratuita
            </li>
            <li>
            <i className="bi bi-check-circle-fill"></i>Promoções e Cardápios
            </li>
            <li>
            <i className="bi bi-check-circle-fill"></i>+ 20 fotos adicionais
            </li>
            <li>
            <i className="bi bi-check-circle-fill"></i>+ informações para seu negócio
            </li>
          </div>
          <a className="plano-btn" href="/free" onClick={() => handleAdquirirClick("Free")}>
            Adquirir
          </a>
        </div>

        <div className="plano-card">
          <div className="plano-titulo">
            <h3>Premium</h3>
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
          <a className="plano-btn" href="/premium" onClick={() => handleAdquirirClick("Free")}>
            Adquirir
          </a>
        </div>
      </div>
    </div>
  );
  
}

export default CardPlan;
