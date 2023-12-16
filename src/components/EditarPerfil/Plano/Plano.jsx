import React from "react";
import "./Plano.css";
import imgPerfil from "../../../img/carousel/test5.png";
import imgLike from "../../../img/icons/favorite.png";
import imgPadaria from "../../../img/imgPlanoFree/padaria.jpg";
import bg1 from "../../../img/imgPlanoFree/bg1.jpeg";
import bg2 from "../../../img/imgPlanoFree/bg2.jpeg";
import bg3 from "../../../img/imgPlanoFree/bg3.jpeg";
import bg4 from "../../../img/imgPlanoFree/bg4.jpeg";
import bg5 from "../../../img/imgPlanoFree/bg5.jpg";
import bg6 from "../../../img/imgPlanoFree/cookies.jpg";
import bg7 from "../../../img/imgPlanoFree/paes.jpg";
import map from "../../../img/imgPlanoFree/map.png";

function Plano() {
  return (
    <div className="plano-container">
      <div className="plano">
        <div className="plano-info">
          <div className="plano-perfil">
            <div className="frame1-perfil">
              <div
                className="perfil-img"
                style={{ backgroundImage: `url(${imgPerfil})` }}
              ></div>
              <div className="perfil-name">
                <div className="text-name">
                  <h1>Sonhos da Praça</h1>
                  <p>Padaria</p>
                </div>
                <i>
                  <img src={imgLike} alt="Icone like" />
                  125
                </i>
              </div>
            </div>
          </div>

          <div className="plano-contatos-position">
            <div className="plano-contatos">
              <div className="plano-contatos-contato">
                <i className="bi bi-whatsapp"></i>
                <p>75 98206-5448</p>
              </div>

              <div className="plano-contatos-contato">
                <i className="bi bi-telephone"></i>
                <p>75 3242-5448</p>
              </div>

              <div className="plano-contatos-contato">
                <i className="bi bi-envelope-at"></i>
                <p>sonhosdp@gmail.com</p>
              </div>
            </div>

            <div className="plano-contatos-position-barra"></div>

            <div className="plano-redes">
              <div className="plano-contatos-contato">
                <i className="bi bi-instagram"></i>
                <p>@sonhosdp</p>
              </div>
              <div className="plano-contatos-contato">
                <i className="bi bi-facebook"></i>
                <p>sonhosdp</p>
              </div>
              <div className="plano-contatos-contato">
                <i className="bi bi-twitter-x"></i>
                <p>@sonhosdp</p>
              </div>
            </div>
          </div>
        </div>
        <div className="plano-aboutus">
          <div
            className="plano-aboutus-img"
            style={{
              backgroundImage: `url(${imgPadaria})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div className="plano-aboutus-text-carrossel">
            <p>
              O estabelecimento X oferece o melhor atendimento e os melhores
              pratos da cidade. Desde 1980, trazendo os sabores da França para a
              região, confira agora nosso restaurante e as promoções do dia.
              Seja bem-vindo
            </p>

            <div className="plano-aboutus-carrossel">
              <div
                className="plano-aboutus-carrossel-img"
                style={{
                  backgroundImage: `url(${bg1})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div
                className="plano-aboutus-carrossel-img"
                style={{
                  backgroundImage: `url(${bg2})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div
                className="plano-aboutus-carrossel-img"
                style={{
                  backgroundImage: `url(${bg3})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="plano-promo">
          <div className="plano-promo-titulo">
            <h1>Promoções do Dia</h1>
          </div>

          <div className="plano-promo-carrossel">
            <div
              className="plano-promo-carrossel-img"
              style={{
                backgroundImage: `url(${bg3})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="plano-promo-carrossel-img"
              style={{
                backgroundImage: `url(${bg4})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="plano-promo-carrossel-img"
              style={{
                backgroundImage: `url(${bg6})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="plano-promo-carrossel-img"
              style={{
                backgroundImage: `url(${bg7})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
        <div className="plano-local">
          <div className="plano-promo-titulo">
            <h1>Como nos encontrar</h1>
          </div>
          <div className="plano-local-info">
            <div
              className="plano-map"
              style={{
                backgroundImage: `url(${map})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="plano-local-funcionamento">
              <h1>Aberto agora</h1>
              <div className="hr"></div>
              <div className="plano-local-funcionamento-text">
                <div className="plano-contatos-contato">
                  <i className="bi bi-calendar-check"></i>
                  <p>De Segunda a Sábado</p>
                </div>
                <div className="plano-contatos-contato">
                  <i className="bi bi-clock"></i>
                  <p>Aberto das 08h - 12h e das 14h - 18h</p>
                </div>
                <div className="plano-contatos-contato">
                  <i className="bi bi-airplane-engines"></i>
                  <p>Fechado aos feriados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="plano-gallery">
          <div className="plano-gallery-carrossel">
            <div
              className="plano-promo-carrossel-img"
              style={{
                backgroundImage: `url(${bg7})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="plano-promo-carrossel-img"
              style={{
                backgroundImage: `url(${bg6})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="plano-promo-carrossel-img"
              style={{
                backgroundImage: `url(${bg5})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
          <div className="plano-gallery-carrossel">
            <div
              className="plano-promo-carrossel-img"
              style={{
                backgroundImage: `url(${bg4})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="plano-promo-carrossel-img"
              style={{
                backgroundImage: `url(${bg3})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="plano-promo-carrossel-img"
              style={{
                backgroundImage: `url(${bg2})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="planoedit-botao">
        <button>Salvar alterações</button>
      </div>
    </div>
  );
}

export default Plano;
