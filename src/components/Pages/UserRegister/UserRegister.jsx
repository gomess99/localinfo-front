import React from "react";
import "../UserRegister/UserRegister.css";
import { Link as RouterLink } from 'react-router-dom';
import imgBack from "../../../img/icons/less-than.png";

function UserRegister() {
  return (
    <div className="userregister">
      <div className="userregister-nav">
        <div className="userregister-back">
          <RouterLink to="/">
            <img src={imgBack} alt="Icone back" />
          </RouterLink>
          </div>
        <a href="/" className="logo">
          <span className="local">Local</span>
          <span className="info-nav">info</span>
        </a>
      </div>

      <div className="userregister-container">
        <div className="userregister-img"></div>
        <div className="userregister-conteudo">
          <div className="userregister-conteudo-position">
            <div className="userregister-conteudo-titulo">
              <h1>
                Criar <span>Conta</span>
              </h1>
              <h2>Escolha o tipo de conta que deseja criar:</h2>
            </div>

            <div className="userregister-conteudo-options">
              <a href="/registerpf" className="userregister-conteudo-btn" >
                <h3>Pessoa Física</h3>

                <p>
                  Encontre os estabelecimentos e serviços mais próximos de você!
                </p>
              </a>

              <div className="userresister-ou">
                <hr />
                <p>ou</p>
                <hr />
              </div>

              <a href="/registerpj" className="userregister-conteudo-btn">
                <h3>Pessoa Jurídica</h3>

                <p>
                  Faça parte do nosso projeto, divulgue seu trabalho e encontre
                  novos clientes!
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
