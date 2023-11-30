import React from "react";
import "./RegisterPf_Pj.css";

function RegisterPf() {
  return (
    <div className="registerpf">
      <div className="registerpf-nav">
        <div className="registerpf-back"><i class="bi bi-chevron-left"></i></div>
        <a href="/" className="logo">
          <span className="local">Local</span>
          <span className="info2">info</span>
        </a>
      </div>

      <div className="registerpf-container">
        <div className="registerpf-img"></div>
        <form className="registerpf-conteudo">
          <div className="registerpf-conteudo-position">
            <div className="registerpf-conteudo-titulo">
              <h1>
                Criar <span>Conta</span>
              </h1>
            </div>

            <div className="registerpf-input">
              {/* <div className="grupInputBox">
                <div className="inputBox_menor">
                  <input type="text" required="required" />
                  <span>Nome de usuário</span>
                </div>

                <div className="inputBox_menor">
                  <input type="text" required="required" />
                  <span>Nome</span>
                </div>
              </div> */}

              <div className="inputBox">
                <input type="text" required="required" />
                <span>Nome de usuário</span>
              </div>

              <div className="inputBox">
                <input type="text" required="required" />
                <span>Nome</span>
              </div>

              <div className="inputBox">
                <input type="email" required="required" />
                <span>E-mail</span>
              </div>

              <div className="inputBox">
                <input type="password" required="required" />
                <span>Senha</span>
                <div className="showPassword"><i class="bi bi-eye-slash-fill"></i></div>
              </div>

              <div className="politicasBox">
                <label className="custom-checkbox">
                  <input type="checkbox" name="confirma" value="confirmado" />
                  <span className="checkmark"></span>
                  <p>
                    {" "}
                    Concordo com as <a href="#">Políticas de Privacidade</a> e
                    os <a href="#">Termos de Serviço</a> padrão da Nome da Marca
                  </p>
                </label>
              </div>
            </div>
            <div className="registerpf-btn">
            <a href="/perfilpf">
              <button type="submit">Realizar cadastro</button>
              </a>
              <p>
                Já possui uma conta? <a href="/login">Entrar</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPf;
