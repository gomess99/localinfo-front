import React from "react";
import "../BusquePj/BusquePj.css";
import imgLike from "../../img/icons/favorite.png";
import imgVerificado from "../../img/icons/verified-account.png";

export function BusquePjCard({ name, categoria, likes }) {
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
            <img style={{ width: "20px" }} src={imgLike} alt="Icone like" />{" "}
            {likes}
          </p>
          <p>{categoria}</p>
        </div>
        <img src={imgLike} alt="Icone like" />
      </div>
    </div>
  );
}
