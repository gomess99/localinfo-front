import React from "react";
import "../SucessRegister/SucessRegister.css";

function SucessRegister() {
  return (
    <div className="perfilpj">
      <div className="perfilpf_pj-nav">
        <div className="perfilpf_pj-back"></div>
        <a href="/" className="logo">
          <span className="local">Local</span>
          <span className="info2">info</span>
        </a>
      </div>

      <div className="perfilpf_pj-container">
        <div className="perfilpf_pj-img"></div>
        <div className="sucessregister-conteudo">
          <div className="sucessregister-conteudo-position">
            <div className="perfilpf_pj-conteudo-titulo">
              <h1>
                Tudo <span>pronto!</span>
              </h1>
              <p>
                Seu perfil está pronto para explorar os negócios da sua
                localidade. Busque por eles agora.
              </p>
            </div>
            <div className="perfilpf_pj-btn">
              <button>Continuar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SucessRegister;
