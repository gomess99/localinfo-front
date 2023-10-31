import React from "react";
import "../RegisterPf/RegisterPf.css";

function RegisterPf() {
  return (
    <div>
      <div className="userregister-nav">
        <div className="userregister-back"></div>
        <a href="/" className="logo">
          <span className="local">Local</span>
          <span className="info2">info</span>
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
            </div>

            <div className="grupInputBox">
              <div className="inputBox">
                <input type="text" required="required" />
                <span>Nome</span>
              </div>

              <div className="inputBox">
                <input type="text" required="required" />
                <span>Nome</span>
              </div>
            </div>

            <div className="inputBox">
              <input type="text" required="required" />
              <span>Nome</span>
            </div>

            <div className="inputBox">
              <input type="text" required="required" />
              <span>Nome</span>
            </div>

            <div className="politicasBox">
              <label className="custom-checkbox">
                <input type="checkbox" name="confirma" value="confirmado" />
                <span className="checkmark"></span> Concordo com as <a href="#">Políticas de
                Privacidade</a> e os <a href="#">Termos de Serviço</a> padrão da Nome da Marca
              </label>
            </div>

            <div className="userregister-conteudo-options">
              <div className="userregister-conteudo-btn">
                <h3>Pessoa Física</h3>

                <p>
                  Encontre os estabelecimentos e serviços mais próximos de você!
                </p>
              </div>

              <p>ou</p>

              <div className="userregister-conteudo-btn">
                <h3>Pessoa Jurídica</h3>

                <p>
                  Faça parte do nosso projeto, divulgue seu trabalho e encontre
                  novos clientes!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPf;
