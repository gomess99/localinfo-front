import React from "react";
import "../Free/Free.css";
import { planofree } from "../../../../Data";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import imgPerfil from "../../../../img/carousel/test5.png";
import imgLike from "../../../../img/icons/favorite.png";
import bg1 from "../../../../img/imgPlanoFree/bg1.jpeg";
import bg2 from "../../../../img/imgPlanoFree/bg2.jpeg";
import bg3 from "../../../../img/imgPlanoFree/bg3.jpeg";
import bg4 from "../../../../img/imgPlanoFree/bg4.jpeg";
import bg5 from "../../../../img/imgPlanoFree/bg5.jpg";
import map from "../../../../img/imgPlanoFree/map.png";

function Free() {
  return (
    <div>
      <Navbar />
      <div className="free-container">
        <div className="free-container-frame1">
          <div className="frame1-position-perfil">
            <div className="frame1-perfil">
              <div
                className="perfil-img"
                style={{ backgroundImage: `url(${imgPerfil})` }}
              ></div>
              <div className="perfil-name">
                <div className="text-name">
                  <h1>Sonho da Praça</h1>
                  <p>Padaria</p>
                </div>
                <i>
                  <img src={imgLike} alt="Icone like" />
                  125
                </i>
              </div>
            </div>
          </div>
          <div className="frame1-carrossel">
            <div
              className="frame1-carrossel-img"
              style={{ backgroundImage: `url(${bg1})` }}
            ></div>
            <div
              className="frame1-carrossel-img"
              style={{ backgroundImage: `url(${bg2})` }}
            ></div>
            <div
              className="frame1-carrossel-img"
              style={{ backgroundImage: `url(${bg3})` }}
            ></div>
            <div
              className="frame1-carrossel-img"
              style={{ backgroundImage: `url(${bg4})` }}
            ></div>
            <div
              className="frame1-carrossel-img"
              style={{ backgroundImage: `url(${bg5})` }}
            ></div>
          </div>
        </div>

        <div className="free-container-frame2">
          <div className="frame2-titulo">
            <h1>Aberto Agora</h1>
          </div>

          <div className="frame2-info">
            <div className="frame2-info-funcionamento">
              <div className="info-funcionamento">
                <i class="bi bi-calendar-check"></i>
                <p>De Segunda a Sábado</p>
              </div>

              <div className="info-funcionamento">
                <i className="bi bi-clock"></i>
                <p>Aberto das 08h - 12h e das 14h - 18h</p>
              </div>

              <div className="info-funcionamento">
                <i className="bi bi-airplane-engines"></i>
                <p>Fechado aos feriádos</p>
              </div>
            </div>
            <div className="frame2-info-barra"></div>
            <div className="frame2-info-contato">
              <div className="info-funcionamento">
                <i className="bi bi-whatsapp"></i>
                <p>75 98206-5448</p>
              </div>
              <div className="info-funcionamento">
                <i className="bi bi-telephone"></i>
                <p>75 3242-5448</p>
              </div>
              <div className="info-funcionamento">
                <i className="bi bi-envelope-at"></i>
                <p>sonhosdp@gmail.com</p>
              </div>
            </div>
          </div>

          <div
            className="frame2-map"
            style={{ backgroundImage: `url(${map})` }}
          ></div>
          <div className="frame2-redes">
            <div className="redessociais">
              <i className="bi bi-instagram"></i>
              <p>@sonhosdp</p>
            </div>
            <div className="redessociais">
              <i className="bi bi-facebook"></i>
              <p>sonhosdp</p>
            </div>
            <div className="redessociais">
              <i className="bi bi-twitter-x"></i>
              <p>@sonhosdp</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Free;
