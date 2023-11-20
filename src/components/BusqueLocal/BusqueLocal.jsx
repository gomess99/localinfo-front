import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "../BusqueLocal/BusqueLocal.css";

const searchSchema = z.object({
  categoria: z.string().nonempty({message: "A pesquisa não pode ser vazia."}).refine(value => !/^\s*$/.test(value), {message: "A pesquisa não pode ter apenas espaços."}),
});

function BusqueLocal() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate ();

  function onSearch(data) {
    const { categoria } = data;
    navigate(`/searchCategories/${categoria}`);
    reset();
  }

  return (
    <div className="busquelocal-frame">
      <h1>Busque por sua localização</h1>
      <div className="busquelocal-pesquisas">
        <form onSubmit={handleSubmit(onSearch)}>
          <div className="search-box">
            <input {...register("categoria")}type="text" className="search-text" placeholder="Digite sua busca..." />
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
      {errors.categoria && <span className="message-error">{errors.categoria.message}</span>}
    </div>
    
  );
}

export default BusqueLocal;
