import React from "react";
import imgPerfil from "../../../img/carousel/test5.png";
import "./Dados.css";
import imgEdit from "../../../img/icons/vector.png";

function Dados() {
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
              <h1>nome do usuário</h1>
              <p>categoria</p>
            </div>
          </div>
        </div>
      </div>
      <div className="dados-inputs">
          <div className="dados-inputs-grup">
            <div className="inputBox dados-input">
              <input type="text" name="email" />
              <span>Nome fantasia</span>
            </div>
            <div className="inputBox dados-input">
              <input type="text" name="email" />
              <span>Nome de usuário</span>
            </div>
          </div>
          <div className="dados-inputs-grup">
            <div className="inputBox dados-input">
              <input type="text" name="email" />
              <span>E-mail</span>
            </div>
            <div className="inputBox dados-input">
              <input type="text" name="email" />
              <span>CPF</span>
            </div>
          </div>
        </div>

        <div className="dados-botao">
            <button>Salvar alterações</button>
        </div>
    </div>
  );
}

export default Dados;
