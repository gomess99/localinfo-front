import React from "react";
import "../BusquePj/BusquePj.css";

export function BusquePjCard({
  name,
  categoria
}) {
  
  return (
    <div className="busquepj-card">
      <div className="busquepj-card-img"></div>

      <div className="busquepj-card-info">
        <div className="busquepj-perfil"></div>

        <p>{name}</p>
        <p>{categoria}</p>

        <div className="busquepj-icon"></div>
      </div>
    </div>
  );
}
