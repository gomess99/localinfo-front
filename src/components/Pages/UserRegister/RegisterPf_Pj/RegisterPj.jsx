import React from "react";
import "./RegisterPf_Pj.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../../../schemas/signupSchema";
import { singup } from "../../../../services/pessoajuridicaServices";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function RegisterPj() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });

  const navigate = useNavigate();

  async function upHanleSubmitForm(data) {
    try {
      const response = await singup(data);
      Cookies.set("token", response.data, { expires: 1});
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="registerpf">
      <div className="registerpf-nav">
        <div className="registerpf-back"><i className="bi bi-chevron-left"></i></div>
        <a href="/" className="logo">
          <span className="local">Local</span>
          <span className="info2">info</span>
        </a>
      </div>

      <div className="registerpf-container">
        <div className="registerpf-img"></div>
        <div className="registerpf-conteudo">
          <form
            onSubmit={handleSubmit(upHanleSubmitForm)}
            className="registerpf-conteudo-position"
          >
            <div className="registerpf-conteudo-titulo">
              <h1>
                Criar <span>Conta</span>
              </h1>
            </div>

            <div className="registerpf-input">
              <div className="inputBox">
                <input type="text" name="name" {...register("name")} />
                <span>Nome fantasia</span>
              </div>
              {errors.name && <span>{errors.name.message}</span>}
              <div className="inputBox">
                <input type="number" name="cpf" {...register("cpf")} />
                <span>CPF</span>
              </div>
              {errors.cpf && <span>{errors.cpf.message}</span>}

              <div className="inputBox">
                <input type="email" name="email" {...register("email")} />
                <span>E-mail</span>
              </div>
              {errors.email && <span>{errors.email.message}</span>}

              <div className="inputBox">
                <input
                  type="password"
                  name="password"
                  {...register("password")}
                />
                <span>Senha</span>
                <div className="showPassword"><i className="bi bi-eye-slash-fill"></i></div>
              </div>
              {errors.password && <span>{errors.password.message}</span>}

              <div className="inputBox">
                <input
                  type="password"
                  name="confirmPassword"
                  {...register("confirmPassword")}
                />
                <span>Confirmar senha</span>
                <div></div>
              </div>
              {errors.confirmPassword && (
                <span>{errors.confirmPassword.message}</span>
              )}
            </div>

            <div className="politicasBox">
              <label className="custom-checkbox">
                <input type="checkbox" name="confirma" value="confirmado" />
                <span className="checkmark"></span>
                <p>
                  {" "}
                  Concordo com as <a href="#">Políticas de Privacidade</a> e os{" "}
                  <a href="#">Termos de Serviço</a> padrão da Nome da Marca
                </p>
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPj;
