import React, { useState } from "react";
import "../Curtidos/Curtidos.css";
import imgVerificado from "../../../img/icons/verified-account.png";
import { likesPlanoFreeById } from "../../../services/planofreeServices";

export function CurtidosCard({
  id,
  avatar,
  name,
  categoria,
  likes,
  onClickLike,
}) {
  const [liked, setLiked] = useState(false);
  const [iconSize, setIconSize] = useState(30);

  console.log("CurtidosCard renderizado - id:", id); // Adicione esta linha

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
    <div className="curtidos-card">
      <div
        className="curtidos-card-img"
        style={{
          backgroundImage: `url(${avatar})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="curtidos-card-info">
        <div
          className="curtidos-perfil"
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
          style={{
            fontSize: `${iconSize}px`,
            color: liked ? 'red' : 'black',
            cursor: 'pointer',
            transition: 'color 0.3s ease, font-size 0.3s ease-out'
          }}
          onClick={handleClick} // Altere esta linha para onClickLike={handleClick}
        ></i>
      </div>
    </div>
  );
}
