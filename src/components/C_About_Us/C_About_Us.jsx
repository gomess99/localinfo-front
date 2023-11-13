import React from "react";
import "./C_About_Us.css";

function C_About_Us() {
  return (
    <div>
      <div className="about-titulo1">
        <h1>O <span className="corVerde">melhor sistema</span> de buscas comerciais da sua região</h1>
        <p>
          Se informe sempre onde há um negócio perto de você, <span className="corRoxo">dê mais
          visibilidade aos seus serviços</span> e encontre parceiros
        </p>
      </div>

      <div className="about-section1">
        <div className="container">
          <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Work Image" className="image" />
          <div className="overlay">
            <div className="text">Seu negócio aqui</div>
          </div>
        </div>

        <div className="container">
          <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Work Image 2" className="image" />
          <div className="overlay">
            <div className="text">Seu negócio aqui</div>
          </div>
        </div>

        <div className="container">
          <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Work Image 3" className="image" />
          <div className="overlay">
            <div className="text">Seu negócio aqui</div>
          </div>
        </div>
      </div>

      <div className="about-titulo2">
          <h1>
            Todos os pequenos negócios da sua cidades localizados em um só site
          </h1>
      </div>

        <div className="about-section2">

        <img src="https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" srcset="" />

          <div className="bloco1">
            <h1>
              <span className="corVerde">Nossa </span><span className="corRoxo">História</span>
              <p>"Tudo o que você puder imaginar é real"</p>
            </h1>
          </div>
          
          <div className="bloco2">
            <p className="" >
              Decidimos unir nossas habilidades para criar um site inovador durante o projeto de TCC. Enfrentando desafios de codificação e design, eles mergulharam em noites sem fim de trabalho árduo. Mesmo quando o código parecia impenetrável, sua paixão os impulsionava. Compartilhando ideias e superando obstáculos, transformaram suas visões em realidade digital, criando um site que não apenas refletia seu esforço conjunto, mas também se tornou uma plataforma reconhecida por sua criatividade e funcionalidade.
            </p>
          </div>
          <div className="bloco3">
            <p>
              Nossa empresa, fundada por estudantes, é pautada pela inovação, colaboração e compromisso, refletindo a essência da dedicação e visão de jovens empreendedores
            </p>
          </div>

          <div className="bloco4">
            <h1 className="corVerde">
             Nossos <span className="corRoxo">Valores</span>
             <p>
              "Guiando cada passo em nosso caminho para o sucesso"
              </p>
             </h1>

          </div>
        </div>
        <div>
          
        </div>
      </div>
  );
}

export default C_About_Us;
