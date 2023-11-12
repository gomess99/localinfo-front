import React from "react";
import "./C_About_Us.css";
import gpsImg from "../../img/gps.jpg";

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

      <div className="about-section2">
        <div className="about-titulo2">
          <h1>
            Todos os pequenos negócios da sua cidades localizados em um só site
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vero quae laborum dignissimos asperiores dolorem nulla sed, explicabo facilis atque magni dolor necessitatibus nisi quaerat quam inventore cum nam est? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dicta, numquam dolor animi reprehenderit voluptatum mollitia iusto sed nihil molestiae. Placeat, neque veniam fugit ad distinctio excepturi quam aspernatur repellendus!
          </p>
        </div>

        <div className="about-dados">
          <div>
            <h1>100%</h1>
            <p>Seguro</p>
          </div>
          <div>
            <h1>2023</h1>
            <p>Desde</p>
          </div>
          <div>
            <h1>50</h1>
            <p>Assinantes</p>
          </div>
        </div>

        <div className="about-titulo2">
          <h1>
            Afinal, quem somos?
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default C_About_Us;
