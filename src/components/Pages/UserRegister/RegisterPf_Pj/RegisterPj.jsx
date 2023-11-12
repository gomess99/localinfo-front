import React from "react";
import "./RegisterPf_Pj.css";

function RegisterPj() {
  return (
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
        <div className="registerpf-conteudo">
          <div className="registerpf-conteudo-position">
            <div className="registerpf-conteudo-titulo">
              <h1>
                Criar <span>Conta</span>
              </h1>
            </div>

            <div className="registerpf-input">
              <div className="grupInputBox">
                <div className="inputBox_menor">
                  <input type="text" required="required" />
                  <span>Nome Fantasia</span>
                </div>

                <div className="inputBox_menor">
                  <input type="text" required="required" />
                  <span>CNPJ</span>
                </div>
              </div>

              <div className="inputBox">
                <input type="email" required="required" />
                <span>E-mail</span>
              </div>

              <div className="inputBox">
                <input type="password" required="required" />
                <span>Senha</span>
                <div></div>
              </div>

              <div className="grupInputBox">
                <div className="inputBox_menor">
                  <input type="text" required="required" />
                  <span>Endereço 1</span>
                </div>

                <div className="inputBox_menor">
                  <input type="text" required="required" />
                  <span>Endereço 2</span>
                </div>
              </div>

              <div className="grupInputBox">
                <div className="inputBox_menor">
                  <input type="text" data-mask="(00) 0000-0000" required="required" />
                  <span>Celular</span>
                </div>

                <div className="inputBox_menor">
                  <input type="text" data-mask="(00) 0000-0000" required="required" />
                  <span>Telefone</span>
                </div>
              </div>
            </div>

            <div className="politicasBox">
              <label className="custom-checkbox">
                <input type="checkbox" name="confirma" value="confirmado" />
                <span className="checkmark"></span><p> Concordo com as{" "}
                <a href="#">Políticas de Privacidade</a> e os{" "}
                <a href="#">Termos de Serviço</a> padrão da Nome da Marca</p>
              </label>
            </div>

            <div className="registerpf-btn">
              <a href="/sucessregister_pj">
              <button>Realizar cadastro</button>
              </a>
              <p>
                Já possui uma conta? <a href="/login">Entrar</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPj;
