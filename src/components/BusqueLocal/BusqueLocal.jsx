import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import "../BusqueLocal/BusqueLocal.css";

function BusqueLocal() {
  const { register, handleSubmit, reset } = useForm();

  function onSearch(data) {
    const {title} = data;
    console.log(data);
  }

  return (
    <div className="busquelocal-frame">
      <h1>Busque por sua localização</h1>
      <div className="busquelocal-pesquisas">
        <form onSubmit={handleSubmit(onSearch)}>
          <div className="search-box">
            <input {...register("title")}type="text" className="search-text" placeholder="Digite sua busca..." />
            <button type="submit" className="search-btn">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </form>

        <div className="busquelocal-local">
          <div className="busquelocal-lupa"></div>
          <p>Sua localização</p>
        </div>
      </div>
    </div>
  );
}

export default BusqueLocal;
