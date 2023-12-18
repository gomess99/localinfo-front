import React from "react";
import "./SemPlano.css";
import { useNavigate } from "react-router-dom";

function SemPlano() {

  const nategate = useNavigate();

  const acessarPlano = () =>{
    nategate("/plan")
  }

  return (
    <div className="semplano">
      <div className="semplano-grid">
        <div className="semplano-texto">
          <h1><span className="span-h1">Ops!</span> Você ainda não possue um plano.</h1>
          <p>
            Não perca tempo, acesse agora e <span className="span-p">garanta seu plano gratuito</span> e mostre
            para as pessoas o melhor que você tem a oferecer de seu negócio.
          </p>
        </div>
        <div className="dados-botao" onClick={acessarPlano}>
          <button>Salvar alterações</button>
        </div>
      </div>
    </div>
  );
}

export default SemPlano;
