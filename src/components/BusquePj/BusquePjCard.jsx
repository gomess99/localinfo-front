import React from "react";
import "../BusquePj/BusquePj.css";

export function BusquePjCard({ name, categoria, likes }) {
  return (
    <div className="busquepj-card">
      <div className="busquepj-card-img"></div>

      <div className="busquepj-card-info">
        <div className="busquepj-perfil"></div>
        <div className="busquepj-text">
          <div className="busquepj-name">
            <h1>
              {name} 
            </h1>
            <div className="busquepj-icon"></div>
          </div>
          <p>Likes: {likes}</p>
          <p>{categoria}</p>
        </div>
        <div className="busquepj-like"></div>
      </div>
    </div>
  );
}
