import React from "react";
import "../PrePerfil/PrePerfil.css";
import { Link as RouterLink } from "react-router-dom";


function PrePerfil({ imageData, onClose, id }) {

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={handleModalClick}>
        <div className="preperfil-nav">
          <div className="preperfil-nav-perfil">
            <p className="preperfil-title">{imageData.name}</p>
          </div>

          <div className="preperfil-nav-icon" onClick={onClose}><i className="bi bi-x"></i></div>
        </div>

        <div className="preperfil-info">
          <div className="preperfil-grid1">
            <div className="preperfil-grid1-img"
              style={{ backgroundImage: `url(${imageData.avatar})` }}></div>
            <div className="preperfil-grid1-info">
              <Grid1InfoEndereco />
              <Grid1InfoCronograma />
            </div>
          </div>

          <div className="preperfil-grid2">
            <div className="preperfil-grid2-info-contatos">
              <h1>Contatos:</h1>
              <ul>
                <li>
                  <i className="bi bi-whatsapp"></i> 75 98206-5448
                </li>
                <li>
                  <i className="bi bi-telephone-fill"></i> 75 3242-5448
                </li>
                <li>
                  <i className="bi bi-envelope-at-fill"></i> loja@gmail.com
                </li>
              </ul>
            </div>
            <div className="preperfil-grid2-info-redes">
              <h1>Redes Sociais:</h1>
              <ul>
                <li>
                  <i className="bi bi-instagram"></i> @instagram
                </li>
                <li>
                  <i className="bi bi-linkedin"></i> @linkedin
                </li>
                <li>
                  <i className="bi bi-facebook"></i> facebook
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="preperfil-btn">
          <RouterLink to={`/free/${id}`}>
            <button>
              Saiba mais
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  );
}

function Grid1InfoEndereco() {
  return (
    <div className="preperfil-grid1-info-endereco">
      <h1>Endereço:</h1>
      <ul>
        <li>
          <div className="bi bi-geo-alt-fill"></div> Feira de Santana-BA
        </li>
        <li>
          <i className="bi bi-geo-alt-fill"></i> Av. João Durval Carneiro
        </li>
      </ul>
    </div>
  );
}

function Grid1InfoCronograma() {
  return (
    <div className="preperfil-grid1-info-cronograma">
      <h1>Horário de funcionamento:</h1>
      <ul>
        <li>
          <i className="bi bi-calendar-check-fill"></i> Aberto de Seg a Sáb
        </li>
        <li>
          <i className="bi bi-clock-fill"></i> Aberto das 08h às 12h e das 14h às 18h
        </li>
        <li>
          <i className="bi bi-airplane-engines"></i> Fechado aos feriados
        </li>
      </ul>
    </div>
  );
}

export default PrePerfil;
