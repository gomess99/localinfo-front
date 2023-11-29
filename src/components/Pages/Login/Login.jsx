import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { signinSchema } from "../../../schemas/signinSchema";

function Login() {
  const {
    register: resgisterSigin,
    handleSubmit: handleSubmitSigin,
    reset: resetSigin,
    formState: { errors: errorsSignin },
  } = useForm({resolver: zodResolver(signinSchema)});

  return (
    <div>
      <div className="registerpf">
        <div className="registerpf-nav">
          <div className="registerpf-back">
            <i className="bi bi-arrow-left-circle"></i>
          </div>
          <a href="/" className="logo">
            <span className="local">Local</span>
            <span className="info2">info</span>
          </a>
        </div>

        <div className="registerpf-container">
          <div className="registerpf-img"></div>
          <div className="registerpf-conteudo">
            <form className="registerpf-conteudo-position">
              <div className="registerpf-conteudo-titulo">
                <h1>
                  Acessar <span>Conta</span>
                </h1>
              </div>

              <div className="login-google">
                <div></div>
                <p>Faça Login com o Google</p>
              </div>

              <div className="login-ou">
                <hr />
                <p>ou acessar por e-mail</p>
                <hr />
              </div>

              <div className="registerpf-input">
                <div className="inputBox">
                  <input
                    type="email"
                    resgisterSigin={resgisterSigin}
                    required="required"
                  />
                  <span>E-mail</span>
                </div>
                {errorsSignin.email && <ErrorSpan text={errorsSignin.email.message} />}

                <div className="inputBox">
                  <input
                    type="password"
                    resgisterSigin={resgisterSigin}
                    required="required"
                  />
                  <span>Senha</span>
                  <div></div>
                  <a href="/newpassword">Esqueceu a senha?</a>
                </div>
              </div>
              <div className="registerpf-btn">
                  <button type="submit">Continuar</button>
                <p>
                  Não possui login? <a href="/userregister">Cadastrar</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
