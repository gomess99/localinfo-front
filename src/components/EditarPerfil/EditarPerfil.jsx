import React, { useEffect, useState } from "react";
import { findPlanoFreeByUserId } from "../../services/planofreeServices";
import "./EditarPerfil.css";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import imgBack from "../../img/icons/less-than.png";
import Dados from "./Dados/Dados";
import Curtidos from "./Curtidos/Curtidos";
import Senha from "./Senha/Senha";
import Plano from "./Plano/Plano";
import MeuPlano from "./Plano/MeuPlano";

function EditarPerfil() {
  const [planofree, setPlanoFree] = useState([]);

  async function findPlanoFreeByUser() {
    const planofreeresponse = await findPlanoFreeByUserId();
    setPlanoFree(planofreeresponse.data.planofreeByUser);
  }

  useEffect(() => {
    findPlanoFreeByUser();
  }, []);

  const [activeComponent, setActiveComponent] = useState("dados");

  const navigate = useNavigate();

  const renderComponent = () => {
    switch (activeComponent) {
      case "dados":
        return <Dados />

      case "curtidos":
        return <Curtidos />;

      case "senha":
        return <Senha />

      case "meuplano":
        return <MeuPlano />;

      case "plano":
        if (planofree.length === 0) {
          return <span className="message-error">Você não possui um plano cadastrado ao seu perfil...</span>;
        }
        return planofree.map((item) => (
          <Plano
            key={item.id}
            id={item.id}
            categoria={item.categoria}
            descricao={item.descricao}
            likes={item.likes}
            img1={item.galeria.img1}
            img2={item.galeria.img2}
            img3={item.galeria.img3}
            img4={item.galeria.img4}
            img5={item.galeria.img5}
            img6={item.galeria.img6}
            img7={item.galeria.img7}
            img8={item.galeria.img8}
            img9={item.galeria.img9}
            img10={item.galeria.img10}
            img11={item.galeria.img11}
            img12={item.galeria.img12}
            img13={item.galeria.img13}
            img14={item.galeria.img14}
            dia={item.funcionamento.dia}
            hora={item.funcionamento.hora}
            feriado={item.funcionamento.feriado}
            instagram={item.redessociais.instagram}
            facebook={item.redessociais.facebook}
            twitter={item.redessociais.twitter}
            celular={item.contatos.celular}
            telefone={item.contatos.telefone}
            endereco={item.endereco}
            name={item.name}
            username={item.username}
            email={item.email}
            avatar={item.avatar}
          />
        ));
      case "sair":
        return navigate("/");
      default:
        return null;
    }
  };

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
              <div onClick={() => setActiveComponent("meuplano")}>
                <i className="bi bi-shop"></i>
                <p>Meu plano</p>
              </div>
              <div onClick={() => setActiveComponent("plano")}>
                <i className="bi bi-pencil-square"></i>
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
