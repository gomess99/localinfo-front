import React from "react";
import "../PerfilPf_Pj/PerfilPf_Pj.css";

function PerfilPj() {
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
              <p>
                Escolha uma foto para seu perfil e fique a vontade para
                adicionar suas redes sociais, seu ramo de trabalho e uma ou
                cinco fotos que ficaram visíveis ao público
              </p>
            </div>

            <div className="perfilpf_pj-input">
              <div className="ficheiro">
                <div className="addimg">
                  <div className="addimg-icon"></div>
                </div>

                <div className="ficheiro-carrossel">
                  <div className="ficheiro-carrossel-img">
                    <div className="addimg-icon"></div>
                  </div>
                  <div className="ficheiro-carrossel-img">
                    <div className="addimg-icon"></div>
                  </div>
                  <div className="ficheiro-carrossel-img">
                    <div className="addimg-icon"></div>
                  </div>
                </div>
              </div>

              <div className="perfilpf_pj-info">
                <div className="perfilpf_pj-redes">
                  <div className="inputBox_mini">
                    <input className="input-text" type="text" required="required" />
                    <div></div>
                  </div>
                  <div className="inputBox_mini">
                    <input className="input-text" type="text" required="required" />
                    <div></div>
                  </div>
                  <div className="inputBox_mini">
                    <input className="input-text" type="text" required="required" />
                    <div></div>
                  </div>
                </div>
                <div className="inputBox_menor">
                  <input type="text" required="required" />
                  <span>Categoria</span>
                </div>
              </div>
            </div>

            <div className="perfilpf_pj-btn">
              <a href="/sucessregister">
              <button>Realizar cadastro</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilPj;
