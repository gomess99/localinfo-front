import React from "react";
import "../Login/NewPassword.css";

function Login() {
  return (
    <div>
      <div className="registerpf">
        <div className="registerpf-nav">
          <div className="registerpf-back"></div>
          <a href="/" className="logo">
            <span className="local">Local</span>
            <span className="info2">info</span>
          </a>
        </div>

        <div className="registerpf-container">
          <div className="registerpf-img"></div>
          <div className="password-conteudo">
            <div className="password-conteudo-position">
              <div className="registerpf-conteudo-titulo">
                <h1>
                  Esqueceu sua senha<span>?</span>
                </h1>
              </div>

              <div className="password-text-input">
                <div className="password-text">
                  <p>
                    Digite o e-mail que você usou para se cadastrar. Entraremos
                    em contato por esse e-mail e será enviado o passo a passo
                    para redefinir sua senha.
                  </p>
                  <p>
                    <span className="password-text-span">
                      Atenção. Não enviamos sugestões de senha e nem
                      armazenamos.
                    </span>{" "}
                    Fique atento a qualquer atividade que inflija nossas
                    políticas de privacidade.
                  </p>
                </div>

                <div className="registerpf-input">
                  <div className="inputBox">
                    <input type="text" required="required" />
                    <span>E-mail</span>
                  </div>
                </div>
              </div>
              <div className="registerpf-btn">
                <a href="/">
                  <button>Continuar</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
