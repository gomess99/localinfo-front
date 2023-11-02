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
              <p>Adicione uma foto para seu perfil e a sua localização</p>
            </div>

            <div className="perfilpf_pf-input">
              <div className="ficheiro">
                <div className="addimg">
                  <div className="addimg-icon"></div>
                </div>
              </div>

              <div className="perfilpf_pj-info">
                <div className="inputBox_menor">
                  <input type="text" required="required" />
                  <span>CEP</span>
                </div>
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
