import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "../PerfilPf_Pj/PerfilPf_Pj.css";
import imgBack from "../../../../img/icons/less-than.png";

function PerfilPj() {
  return (
    <div className="perfilpj">
      <div className="perfilpf_pj-nav">
        <div className="perfilpf_pj-back">
          <RouterLink to="/">
            <img src={imgBack} alt="Icone back" />
          </RouterLink>
        </div>
        <a href="/" className="logo">
          <span className="local">Local</span>
          <span className="info-nav">info</span>
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
                Fique a vontade para adicionar seu ramo de trabalho e uma ou
                cinco fotos que ficaram visíveis ao público e os meios para seus
                cliente te encontrarem.
              </p>
            </div>

            <div className="perfilpf_pj-input">
              <div className="ficheiro">
                <div className="ficheiro-carrossel">
                  <div className="ficheiro-carrossel-img" id="carrossel">
                    <i
                      className="bi bi-camera-fill"
                      style={{ fontSize: `30px` }}
                    ></i>
                  </div>
                  <div className="ficheiro-carrossel-img">
                    <i
                      className="bi bi-camera-fill"
                      style={{ fontSize: `30px` }}
                    ></i>
                  </div>
                  <div className="ficheiro-carrossel-img">
                    <i
                      className="bi bi-camera-fill"
                      style={{ fontSize: `30px` }}
                    ></i>
                  </div>
                  <div className="ficheiro-carrossel-img">
                    <i
                      className="bi bi-camera-fill"
                      style={{ fontSize: `30px` }}
                    ></i>
                  </div>
                  <div className="ficheiro-carrossel-img">
                    <i
                      className="bi bi-camera-fill"
                      style={{ fontSize: `30px` }}
                    ></i>
                  </div>
                </div>
              </div>

              <div className="perfilpf_pj-info">
                <div className="inputBox">
                  <input type="text" required="required" />
                  <span>Categoria</span>
                </div>

                <div className="grupInputBox2">
                  <div className="inputBox">
                    <input type="text" required="required" />
                    <span>Telefone 1</span>
                  </div>

                  <div className="inputBox">
                    <input type="text" required="required" />
                    <span>Telefone 2</span>
                  </div>
                </div>

                <div className="grupInputBox2">
                  <div className="inputBox">
                    <input type="text" required="required" />
                    <span>Endereço 1</span>
                  </div>

                  <div className="inputBox">
                    <input type="text" required="required" />
                    <span>Endereço 2</span>
                  </div>
                </div>
                <div className="perfilpf_pj-redes">
                  <div className="inputBox_mini">
                    <input
                      className="input-text"
                      type="text"
                      required="required"
                    />
                    <div><i class="bi bi-instagram"></i></div>
                  </div>
                  <div className="inputBox_mini">
                    <input
                      className="input-text"
                      type="text"
                      required="required"
                    />
                    <div><i class="bi bi-facebook"></i></div>
                  </div>
                  <div className="inputBox_mini">
                    <input
                      className="input-text"
                      type="text"
                      required="required"
                    />
                      <div><i className="bi bi-twitter-x"></i></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="perfilpf_pj-btn">
              <a href="/sucessregister_pf_pj">
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
