import React, { useState } from "react";
import "./Senha.css";
import imgEdit from "../../../img/icons/vector.png";
import imgPerfil from "../../../img/carousel/test5.png";

function Senha() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordC, setShowPasswordC] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordCVisibility = () => {
    setShowPasswordC(!showPasswordC);
  };

  return (
    <div className="dados">
      <div className="premium-perfil perfil-dados">
        <div className="frame1-perfil">
          <div
            className="perfil-img"
            style={{ backgroundImage: `url(${imgPerfil})` }}
          >
            <button className="editar">
              <img src={imgEdit} alt="Lápis de edição" />
            </button>
          </div>
          <div className="perfil-name">
            <div className="text-name">
              <h1>Sonho da Praça</h1>
              <p>Padaria</p>
            </div>
          </div>
        </div>
      </div>

      <div className="dados-inputs">
        <div className="dados-inputs-grup-senha">
          <div className="inputBox dados-input">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
            />
            <span>Senha</span>
            <div style={{ transform: 'translateX(290px) translateY(-42px)' }} className="showPassword-dados">
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

          <div className="inputBox dados-input">
            <input
              type={showPasswordC ? "text" : "password"}
              name="confirmPassword"
            />
            <span>Confirmar senha</span>
            <div style={{ transform: 'translateX(290px) translateY(-42px)' }} className="showPassword-dados">
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
        </div>
      </div>

      <div className="dados-botao">
        <button>Salvar alteração</button>
      </div>
    </div>
  );
}

export default Senha;
