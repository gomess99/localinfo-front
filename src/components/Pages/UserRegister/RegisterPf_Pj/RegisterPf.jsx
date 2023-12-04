import React from "react";
import "./RegisterPf_Pj.css";
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../../../schemas/signupSchema";
import imgBack from "../../../../img/icons/less-than.png";

function RegisterPf() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });

  function upHanleSubmitForm(data) {
    console.log(data);
  }

  return (
    <div className="registerpf">
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

      <div className="registerpf-container">
        <div className="registerpf-img"></div>
        <form
          onSubmit={handleSubmit(upHanleSubmitForm)}
          className="registerpf-conteudo"
        >
          <div className="registerpf-conteudo-position">
            <div className="registerpf-conteudo-titulo">
              <h1>
                Criar <span>Conta</span>
              </h1>
            </div>

            <div className="registerpf-input">

              <div className="inputBox">
                <input type="text" name="name" {...register("name")} />
                <span>Nome</span>
              </div>
              {errors.name && <span className="validation-error">{errors.name.message}</span>}
              <div className="inputBox">
                <input type="email" name="email" {...register("email")} />
                <span>E-mail</span>
              </div>
              {errors.email && <span className="validation-error">{errors.email.message}</span>}

              <div className="inputBox">
                <input type="password" name="password" {...register("password")} />
                <span>Senha</span>
                <div className="showPassword"><i className="bi bi-eye-slash-fill"></i></div>
              </div>
              {errors.password && <span className="validation-error">{errors.password.message}</span>}

              <div className="inputBox">
                <input type="password" name="confirmPassword" {...register("confirmPassword")} />
                <span>Confirmar Senha</span>
                <div className="showPassword"><i className="bi bi-eye-slash-fill"></i></div>
              </div>
              {errors.confirmPassword && <span className="validation-error">{errors.confirmPassword.message}</span>}

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
