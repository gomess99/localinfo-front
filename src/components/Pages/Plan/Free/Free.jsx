import React from "react";
import "../Free/Free.css";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";

function Free() {
  return (
    <div>
      <Navbar />
      <div className="free-container">
        <div className="free-container-frame1">
          <div className="frame1-position-perfil">
            <div className="frame1-perfil">
              <div className="perfil-img"></div>
              <div className="perfil-name">
                <div className="text-name">
                  <h1>Nome do Estabelecimento</h1>
                  <p>Categoria</p>
                </div>
              </div>
            </div>
          </div>
          <div className="frame1-carrossel">
            <div className="frame1-carrossel-img"></div>
            <div className="frame1-carrossel-img"></div>
            <div className="frame1-carrossel-img"></div>
          </div>
        </div>

        <div className="free-container-frame2">
          <div className="frame2-titulo">
            <h1>Aberto Agora</h1>
          </div>

          <div className="frame2-info">
            <div className="frame2-info-funcionamento">
              <div className="info-funcionamento">
                <div></div>
                <p>De Segunda a Sábado</p>
              </div>

              <div className="info-funcionamento">
                <div></div>
                <p>Aberto das 08h - 12h e das 14h - 18h</p>
              </div>

              <div className="info-funcionamento">
                <div></div>
                <p>Fechado aos feriádos</p>
              </div>
            </div>
            <div className="frame2-info-barra"></div>
            <div className="frame2-info-contato">
              <div className="info-funcionamento">
                <div></div>
                <p>75 98206-5448</p>
              </div>
              <div className="info-funcionamento">
                <div></div>
                <p>75 3242-5448</p>
              </div>
              <div className="info-funcionamento">
                <div></div>
                <p>loja@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="frame2-map"></div>

          <div className="frame2-redes">
            <div className="redessociais">
              <div></div>
              <p>@loja01</p>
            </div>
            <div className="redessociais">
              <div></div>
              <p>@loja01</p>
            </div>
            <div className="redessociais">
              <div></div>
              <p>loja01</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Free;
