import React from "react";
import "./Dados.css";
import imgEdit from "../../../img/icons/vector.png";

function Dados({name, categoria, avatar}) {
  return (
    <div className="dados">
      <div className="premium-perfil perfil-dados">
        <div className="frame1-perfil">
          <div
            className="perfil-img"
            style={{ backgroundImage: `url(${avatar})` }}
          >
            <button className="editar">
              <img src={imgEdit} alt="Lápis de edição" />
            </button>
          </div>
          <div className="perfil-name">
            <div className="text-name">
              <h1>{name}</h1>
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
