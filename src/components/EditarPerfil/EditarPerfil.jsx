import React, { useState } from "react";
import "./EditarPerfil.css";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import imgBack from "../../img/icons/less-than.png";
import Dados from "./Dados/Dados";
import Curtidos from "./Curtidos/Curtidos";
import Senha from "./Senha/Senha";
import Cookies from "js-cookie";

function EditarPerfil() {
  const [activeComponent, setActiveComponent] = useState("dados");

  const navigate = useNavigate();

  const renderComponent = () => {
    switch (activeComponent) {
      case "dados":
        return <Dados />;
      case "curtidos":
        return <Curtidos />;
      case "senha":
        return <Senha />;
      case "sair":
        return navigate("/");
      default:
        return null;
    }
  };

  // function signout() {
  //   Cookies.remove("token");
  //   setState((prev) => ({ ...prev, user: undefined }));
  //   navigate("/");
  // }

  return (
    <div className="editarperfil">
      <div className="registerpf-nav">
        <div className="registerpf-back">
          <RouterLink to="/">
            <img src={imgBack} alt="Icone voltar" />
          </RouterLink>
        </div>
        <a href="/" className="logo">
          <span className="local">Local</span>
          <span className="info-nav">info</span>
        </a>
      </div>

      <div className="editarperfil-conteudo">
        <div className="sidebar">
          <div className="sidebar-conteudo">
            <h1>Editar Perfil</h1>
            <div className="sidebar-conteudo-lista">
              <div onClick={() => setActiveComponent("dados")}>
                <i className="bi bi-person-fill"></i>
                <p>Meus dados</p>
              </div>
              <div onClick={() => setActiveComponent("dados")}>
                <i className="bi bi-images"></i>
                <p>Editar plano</p>
              </div>
              <div onClick={() => setActiveComponent("curtidos")}>
                <i className="bi bi-heart"></i>
                <p>Curtidos</p>
              </div>
              <div onClick={() => setActiveComponent("senha")}>
                <i className="bi bi-shield-lock-fill"></i>

                <p>Senha</p>
              </div>
              <div
                className="sair"
                style={{ color: "red" }}
                onClick={() => setActiveComponent("sair")}
              >
                <i className="bi bi-box-arrow-right"></i>
                <p style={{ color: "red" }}>Sair</p>
              </div>
            </div>
          </div>
        </div>
        {renderComponent()}
      </div>
    </div>
  );
}

export default EditarPerfil;
