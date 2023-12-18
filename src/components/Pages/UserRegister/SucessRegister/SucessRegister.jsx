import React from "react";
import "../SucessRegister/SucessRegister.css";
import { Link as RouterLink } from "react-router-dom";
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
            <div className="sucess_pj-conteudo-titulo">
              <h1>
                Tudo <span className="span-h1">pronto!</span>
              </h1>
              <p>
                Seu perfil está pronto para explorar os negócios da sua
                localidade.
              </p>
              <div className="perfilpf_pj-btn2">
                <RouterLink to="/">
                  <button>Continuar</button>
                </RouterLink>
              </div>
              <p>
                Possui algum estabelecimento? <br /> Nós temos uma{" "}
                <span className="span-p">oferta imperdível</span> para você!
              </p>
              <p>
                Comece a divulgar agora o seu perfil e ganhe destaque na
                comunidade, saiba mais clicando no botão logo abaixo.
              </p>
              <div className="perfilpf_pj-btn2">
                <RouterLink to="/plan">
                  <button>Saiba mais</button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SucessRegister;
