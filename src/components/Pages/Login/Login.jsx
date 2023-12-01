import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../../../schemas/signinSchema";
import { useNavigate } from "react-router-dom";
import { signin } from "../../../services/pessoajuridicaServices";
import Cookies from "js-cookie";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signinSchema) });

  const navigate = useNavigate();

  async function inHanleSubmitForm(data) {
    try {
      const response = await signin(data);
      Cookies.set("token", response.data, { expires: 1});
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="registerpf">
        <div className="registerpf-nav">
          <div className="registerpf-back">
            <i className="bi bi-chevron-left"></i>
          </div>
          <a href="/" className="logo">
            <span className="local">Local</span>
            <span className="info2">info</span>
          </a>
        </div>

        <div className="registerpf-container">
          <div className="registerpf-img"></div>
          <div className="registerpf-conteudo">
            <form
              onSubmit={handleSubmit(inHanleSubmitForm)}
              className="registerpf-conteudo-position"
            >
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
                    name="email"
                    {...register("email")}
                  />
                  <span>E-mail</span>
                </div>
                {errors.email && (
                  <span>{errors.email.message}</span>
                )}
                <div className="inputBox">
                  <input
                    type="password"
                    name="password"
                    {...register("password")}
                  />
                  <span>Senha</span>
                  <div></div>
                  <a href="/newpassword">Esqueceu a senha?</a>
                </div>
                <div>{errors.password && (
                  <span>{errors.password.message}</span>
                )}</div>
                
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
