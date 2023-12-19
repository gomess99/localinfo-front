import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../BusquePj/BusquePj.css";
import imgVerificado from "../../img/icons/verified-account.png";
import { likesPlanoFreeById } from "../../services/planofreeServices";

export function BusquePjCard(props) {
  const {
    id,
    categoria,
    likes,
    name,
    avatar,
  } = props;

  const [liked, setLiked] = useState(false);
  const [iconSize, setIconSize] = useState(30);

  const handleClick = () => {

    setLiked(!liked);

    setIconSize(35);

    setTimeout(() => {
      setIconSize(30);
    }, 300);

    return handleLikesPlanoFree();

  };

  async function handleLikesPlanoFree() {
    try {
      if (!id) {
        console.error("ID do plano não disponível.");
        return;
      }
      const response = await likesPlanoFreeById(id);
      console.log("Deu like");
      // Faça algo com a resposta, se necessário
    } catch (error) {
      console.log(error);
    }
  }


  return (

    <div className="busquepj-card">
      <Link to={`/free/${id}`} className="busquepj-card-link">
        <div className="busquepj-card-img"
          style={{
            backgroundImage: `url(${avatar})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
        </div>
      </Link >
      <div className="busquepj-card-info">
        <div className="busquepj-perfil"
          style={{
            backgroundImage: `url(${avatar})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
        </div>

        <div className="busquepj-text">
          <Link to={`/free/${id}`} className="busquepj-card-link">
            <div className="busquepj-name">
              <h1 className="busquepj-name1">{name}</h1>
              <img
                className="busquepj-icon"
                src={imgVerificado}
                alt="Icone verificado"
              />
            </div>
          </Link >
          <p>
            <i className="bi bi-heart"
              alt="Icone verificado"
              style={{
                fontSize: "20px",
              }}>
            </i>{" "}
            {likes}
          </p>
          <p>{categoria}</p>
        </div>
        <i
          className={`bi bi-heart${liked ? '-fill' : ''}`}
          alt="Ícone de like"
          style={{
            fontSize: `${iconSize}px`,
            color: liked ? 'red' : 'black',
            cursor: 'pointer',
            transition: 'color 0.3s ease, font-size 0.3s ease-out'
          }}
          onClick={handleClick}
        ></i>
      </div>
    </div >

  );
}
