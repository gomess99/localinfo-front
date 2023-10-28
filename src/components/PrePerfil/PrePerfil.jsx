import React from "react";
import "../PrePerfil/PrePerfil.css";

function PrePerfil() {
  return (
    <div className="modal">
      <div className="preperfil-nav">
        <div className="preperfil-nav-perfil">
          <div></div>
          <p>Nome</p>
        </div>

        <div className="preperfil-nav-icon"></div>
      </div>

      <div className="preperfil-info">
        <div className="preperfil-grid1">
          <div className="preperfil-grid1-img"></div>
          <div className="preperfil-grid1-info">
            <div className="preperfil-grid1-info-endereco">
              <h1>Endereço</h1>
              <ul>
                <li>
                  <div className="preperfil-icon"></div> Endereço1
                </li>
                <li>
                  <i className="preperfil-icon"></i> Endereço2
                </li>
              </ul>
            </div>

            <div className="preperfil-grid1-info-cronograma">
              <h1>Horário de funcionamento</h1>
              <ul>
                <li>
                  <i className="preperfil-icon"></i> Aberto de Seg a Sáb
                </li>
                <li>
                  <i className="preperfil-icon"></i> Aberto das 08h às 12h e das
                  14h às 18h
                </li>
                <li>
                  <i className="preperfil-icon"></i> Fechado aos feriados
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="preperfil-grid2">
          <div className="preperfil-grid2-info-contatos">
            <h1>Contatos</h1>
            <ul>
              <li>
                <i className="preperfil-icon"></i> 75 98206-5448
              </li>
              <li>
                <i className="preperfil-icon"></i> 75 3242-5448
              </li>
              <li>
                <i className="preperfil-icon"></i> loja@gmail.com
              </li>
            </ul>
          </div>
          <div className="preperfil-grid2-info-redes">
            <h1>Redes Sociais</h1>
            <ul>
              <li>
                <i className="preperfil-icon"></i> @intagram
              </li>
              <li>
                <i className="preperfil-icon"></i> @twiter
              </li>
              <li>
                <i className="preperfil-icon"></i> facebook
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="preperfil-btn">
      <button>Saiba mais</button>
      </div>
    </div>
  );
}

export default PrePerfil;
