import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../BusqueLocal/BusqueLocal.css";

function BusqueLocal() {

  return (
    <div className="busquelocal-frame">
      <h1>Busque por sua localização</h1>
      <div className="busquelocal-pesquisas">
        <div className="search-box">
          <input type="text" className="search-text" placeholder="Digite sua busca..." />
          <a className="search-btn">
            <FontAwesomeIcon icon={faSearch} />
          </a>
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
