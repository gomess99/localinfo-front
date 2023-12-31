import "./Register.css";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../../../schemas/signupSchema";
import { singup } from "../../../../services/pessoajuridicaServices";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import imgBack from "../../../../img/icons/less-than.png";
import InputMask from "react-input-mask";

function RegisterPj() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [showPasswordC, setShowPasswordC] = useState(false);

  const togglePasswordCVisibility = () => {
    setShowPasswordC(!showPasswordC);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });

  const navigate = useNavigate();

  async function upHanleSubmitForm(data) {
    try {
      const response = await singup(data);
      Cookies.set("token", response.data, { expires: 1 });
      navigate("/sucessregister");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="registerpf">
      <div className="registerpf-nav">
        <div className="registerpf-back">
          <RouterLink to="/">
            <img src={imgBack} alt="Icone back" />
          </RouterLink>
        </div>
        <a href="/" className="logo">
          <span className="local">Local</span>
          <span className="info-nav">info</span>
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
                <span>Nome</span>
              </div>
              {errors.name && (
                <span className="validation-error">{errors.name.message}</span>
              )}
              <div className="inputBox">
                <InputMask
                  name="cpf"
                  mask="999.999.999-99"
                  maskChar={null}
                  {...register("cpf")}
                >
                  {(inputProps) => (
                    <input type="text" name="cpf" {...inputProps} />
                  )}
                </InputMask>
                <span>CPF</span>
              </div>
              {errors.cpf && (
                <span className="validation-error">{errors.cpf.message}</span>
              )}

              <div className="inputBox">
                <input type="email" name="email" {...register("email")} />
                <span>E-mail</span>
              </div>
              {errors.email && (
                <span className="validation-error">{errors.email.message}</span>
              )}

              <div className="inputBox">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  {...register("password")}
                />
                <span>Senha</span>
                <div>
                  {/* Ícones de olho aberto e fechado */}
                  {showPassword ? (
                      <i
                        className="bi bi-eye-fill"
                        onClick={togglePasswordVisibility}
                      ></i>
                    ) : (
                      <i
                        className="bi bi-eye-slash-fill"
                        onClick={togglePasswordVisibility}
                      ></i>
                    )}
                </div>
              </div>
              {errors.password && (
                <span className="validation-error">
                  {errors.password.message}
                </span>
              )}

              <div className="inputBox">
                <input
                  type={showPasswordC ? "text" : "password"}
                  name="confirmPassword"
                  {...register("confirmPassword")}
                />
                <span>Confirmar senha</span>
                <div className="showPassword">
                  {/* Ícones de olho aberto e fechado */}
                  {showPasswordC ? (
                      <i
                        className="bi bi-eye-fill"
                        onClick={togglePasswordCVisibility}
                      ></i>
                    ) : (
                      <i
                        className="bi bi-eye-slash-fill"
                        onClick={togglePasswordCVisibility}
                      ></i>
                    )}
                </div>
              </div>
              {errors.confirmPassword && (
                <span className="validation-error">{errors.confirmPassword.message}</span>
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
              <a href="/sucessregister">
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
