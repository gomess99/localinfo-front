import React, { useState } from "react";
import "../Curtidos/Curtidos.css";
import imgVerificado from "../../../img/icons/verified-account.png";

export function CurtidosCard({ avatar, name, categoria, likes }) {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    // Alterna entre true e false no clique
    setLiked(!liked);
  };
  return (
    <div className="curtidos-card">
      <div className="curtidos-card-img"
        style={{
          backgroundImage: `url(${avatar})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="curtidos-card-info">
        <div className="curtidos-perfil"
          style={{
            backgroundImage: `url(${avatar})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="curtidos-text">
          <div className="curtidos-name">
            <h1>{name}</h1>
            <img
              className="curtidos-icon"
              src={imgVerificado}
              alt="Icone verificado"
            />
          </div>
          <p>
            <i className="bi bi-heart curtidos-icon" alt="Icone verificado"></i>{" "}
            {likes}
          </p>
          <p>{categoria}</p>
        </div>
        <i
          className={`bi bi-heart${liked ? '-fill' : ''}`}
          alt="Ícone de like"
          style={{ fontSize: '30px', color: liked ? 'red' : 'black', cursor: 'pointer' }}
          onClick={handleClick}
        ></i>
      </div>
    </div>
  );
}
