import React from "react";
import "../SucessRegister/SucessRegister.css";
import { Link as RouterLink } from 'react-router-dom';
import imgBack from "../../../../img/icons/less-than.png";

function SucessRegister() {
  return (
    <div className="perfilpj">
      <div className="registerpf-nav">
        <div className="registerpf-back">
          <RouterLink to="/userregister">
            <img src={imgBack} alt="Icone back" />
          </RouterLink>
        </div>
        <a href="/" className="logo">
          <span className="local">Local</span>
          <span className="info2">info</span>
        </a>
      </div>

      <div className="perfilpf_pj-container">
        <div className="perfilpf_pj-img"></div>
        <div className="sucessregister-conteudo">
          <div className="sucessregister-conteudo-position">
            <div className="perfilpf_pj-conteudo-titulo">
              <h1>
                Tudo <span>pronto!</span>
              </h1>
              <p>
                Seu perfil está pronto para explorar os negócios da sua
                localidade. Busque por eles agora.
              </p>
            </div>
            <div className="perfilpf_pj-btn">
              <a href="/">
              <button>Continuar</button>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SucessRegister;
