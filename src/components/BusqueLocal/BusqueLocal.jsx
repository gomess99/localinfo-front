import React from "react";
import "../BusqueLocal/BusqueLocal.css";

function BusqueLocal() {
  return (
    <div className="busquelocal-frame">
      <h1>Busque por sua localização</h1>
      <div className="busquelocal-pesquisas">
        <div className="busquelocal-busca">
          <div className="busquelocal-lupa"></div>
          <p>Busque</p>
        </div>

        <div className="busquelocal-local">
          <div className="busquelocal-lupa"></div>
          <p>Sua localização</p>
        </div>
      </div>
    </div>
  );
}

export default BusqueLocal;
