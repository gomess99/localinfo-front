import React from "react";
import "../PerfilPf_Pj/PerfilPf_Pj.css";

function PerfilPf() {
  return (
    <div className="perfilpj">
      <div className="perfilpf_pj-nav">
        <div className="perfilpf_pj-back"></div>
        <a href="/" className="logo">
          <span className="local">Local</span>
          <span className="info2">info</span>
        </a>
      </div>

      <div className="perfilpf_pj-container">
        <div className="perfilpf_pj-img"></div>
        <div className="perfilpf_pj-conteudo">
          <div className="perfilpf_pj-conteudo-position">
            <div className="perfilpf_pj-conteudo-titulo">
              <h1>
                Bem-<span>vindo!</span>
              </h1>
              <p>Adicione uma foto para seu perfil e sua localização</p>
            </div>

            <div className="perfilpf_pj-input">
              <div className="addimg">
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                >
                  <circle
                    cx="100"
                    cy="100.4"
                    r="99.5"
                    stroke="black"
                    stroke-dasharray="10 10"
                  />
                </svg>
                <div className="addimg-icon"></div>
              </div>

              <div className="inputBox_menor">
                <input type="text" required="required" />
                <span>CEP</span>
              </div>
            </div>

            <div className="perfilpf_pj-btn">
              <button>Realizar cadastro</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilPf;
