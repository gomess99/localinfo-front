import React, { useState } from "react";
import "../BusquePj/BusquePj.css";
import imgVerificado from "../../img/icons/verified-account.png";

export function BusquePjCard({ name, categoria, likes }) {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    // Alterna entre true e false no clique
    setLiked(!liked);

  };
  return (
    <div className="busquepj-card">
      <div className="busquepj-card-img"></div>

      <div className="busquepj-card-info">
        <div className="busquepj-perfil"></div>
        <div className="busquepj-text">
          <div className="busquepj-name">
            <h1>{name}</h1>
            <img
              className="busquepj-icon"
              src={imgVerificado}
              alt="Icone verificado"
            />
          </div>
          <p>
            <i className="bi bi-heart"
              alt="Icone verificado"
              style={{ fontSize: "20px" }}>
            </i>{" "}
            {likes}
          </p>
          <p>{categoria}</p>
        </div>
        <i
          className={`bi bi-heart${liked ? '-fill' : ''}`}
          alt="Ícone de like"
          style={{ fontSize: '30px', color: liked ? 'red' : 'black', cursor: 'pointer', transition: 'color 0.3s ease' }}
          onClick={handleClick}
        ></i>
      </div>
    </div>
  );
}
