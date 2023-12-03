import React from "react";
import "../Premium/Premium.css";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import imgPerfil from "../../../../img/carousel/test5.png";
import imgLike from "../../../../img/icons/favorite.png";
import imgPadaria from "../../../../img/imgPlanoFree/padaria.jpg";
import bg1 from "../../../../img/imgPlanoFree/bg1.jpeg";
import bg2 from "../../../../img/imgPlanoFree/bg2.jpeg";
import bg3 from "../../../../img/imgPlanoFree/bg3.jpeg";
import bg4 from "../../../../img/imgPlanoFree/bg4.jpeg";
import bg5 from "../../../../img/imgPlanoFree/bg5.jpg";
import bg6 from "../../../../img/imgPlanoFree/cookies.jpg";
import bg7 from "../../../../img/imgPlanoFree/paes.jpg";
import map from "../../../../img/imgPlanoFree/map.png";

function Premium() {
  return (
    <div>
      <Navbar />
      <div className="premium-info">
        <div className="premium-perfil">
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

        <div className="premium-contatos">
          <div className="premium-contatos-contato">
            <i className="bi bi-whatsapp"></i>
            <p>75 98206-5448</p>
          </div>

          <div className="premium-contatos-contato">
            <i className="bi bi-telephone"></i>
            <p>75 3242-5448</p>
          </div>

          <div className="premium-contatos-contato">
            <i className="bi bi-envelope-at"></i>
            <p>sonhosdp@gmail.com</p>
          </div>
        </div>

        <div className="premium-redes">
          <div className="premium-contatos-contato">
            <i className="bi bi-instagram"></i>
            <p>@loja01</p>
          </div>
          <div className="premium-contatos-contato">
            <i className="bi bi-facebook"></i>
            <p>@loja01</p>
          </div>
          <div className="premium-contatos-contato">
            <i className="bi bi-twitter-x"></i>
            <p>@loja01</p>
          </div>
        </div>
      </div>
      <div className="premium-aboutus">
        <div
          className="premium-aboutus-img"
          style={{
            backgroundImage: `url(${imgPadaria})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="premium-aboutus-text-carrossel">
          <p>
            O estabelecimento X oferece o melhor atendimento e os melhores
            pratos da cidade. Desde 1980, trazendo os sabores da França para a
            região, confira agora nosso restaurante e as promoções do dia. Seja
            bem-vindo
          </p>

          <div className="premium-aboutus-carrossel">
            <div
              className="premium-aboutus-carrossel-img"
              style={{
                backgroundImage: `url(${bg1})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="premium-aboutus-carrossel-img"
              style={{
                backgroundImage: `url(${bg2})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="premium-aboutus-carrossel-img"
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
      <div className="premium-promo">
        <div className="premium-promo-titulo">
          <h1>Promoções do Dia</h1>
        </div>

        <div className="premium-promo-carrossel">
          <div
            className="premium-promo-carrossel-img"
            style={{
              backgroundImage: `url(${bg3})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className="premium-promo-carrossel-img"
            style={{
              backgroundImage: `url(${bg4})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className="premium-promo-carrossel-img"
            style={{
              backgroundImage: `url(${bg6})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className="premium-promo-carrossel-img"
            style={{
              backgroundImage: `url(${bg7})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
      <div className="premium-local">
        <div className="premium-promo-titulo">
          <h1>Como nos encontrar</h1>
        </div>
        <div className="premium-local-info">
          <div className="premium-map" style={{
              backgroundImage: `url(${map})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}></div>
          <div className="premium-local-funcionamento">
            <h1>Aberto agora</h1>
            <div className="hr"></div>
            <div className="premium-local-funcionamento-text">
              <div className="premium-contatos-contato">
                <i class="bi bi-calendar-check"></i>
                <p>De Segunda a Sábado</p>
              </div>
              <div className="premium-contatos-contato">
                <i className="bi bi-clock"></i>
                <p>Aberto das 08h - 12h e das 14h - 18h</p>
              </div>
              <div className="premium-contatos-contato">
                <i className="bi bi-airplane-engines"></i>
                <p>Fechado aos feriados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="premium-gallery">
        <div className="premium-gallery-carrossel">
          <div className="premium-promo-carrossel-img" style={{
              backgroundImage: `url(${bg7})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}></div>
          <div className="premium-promo-carrossel-img" style={{
              backgroundImage: `url(${bg6})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}></div>
          <div className="premium-promo-carrossel-img" style={{
              backgroundImage: `url(${bg5})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}></div>
        </div>
        <div className="premium-gallery-carrossel">
          <div className="premium-promo-carrossel-img" style={{
              backgroundImage: `url(${bg4})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}></div>
          <div className="premium-promo-carrossel-img" style={{
              backgroundImage: `url(${bg3})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}></div>
          <div className="premium-promo-carrossel-img" style={{
              backgroundImage: `url(${bg2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Premium;
