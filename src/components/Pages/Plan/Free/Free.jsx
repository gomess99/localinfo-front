import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "../free/free.css";
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

function Free() {

  return (
    <div>
      <Navbar />
      <div className="free-info">
        <div className="free-perfil">
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

        <div className="free-contatos-position">
          <div className="free-contatos">
            <div className="free-contatos-contato">
              <i className="bi bi-whatsapp"></i>
              <p>75 98206-5448</p>
            </div>

            <div className="free-contatos-contato">
              <i className="bi bi-telephone"></i>
              <p>75 3242-5448</p>
            </div>

            <div className="free-contatos-contato">
              <i className="bi bi-envelope-at"></i>
              <p>sonhosdp@gmail.com</p>
            </div>
          </div>
          <div className="free-contatos-position-barra"></div>

          <div className="free-redes">
            <div className="free-contatos-contato">
              <i className="bi bi-instagram"></i>
              <p>@loja01</p>
            </div>
            <div className="free-contatos-contato">
              <i className="bi bi-facebook"></i>
              <p>@loja01</p>
            </div>
            <div className="free-contatos-contato">
              <i className="bi bi-twitter-x"></i>
              <p>@loja01</p>
            </div>
          </div>
        </div>
      </div>
      <div className="free-aboutus">
        <div
          className="free-aboutus-img"
          style={{
            backgroundImage: `url(${imgPadaria})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="free-aboutus-text-carrossel">
          <p>
            O estabelecimento X oferece o melhor atendimento e os melhores
            pratos da cidade. Desde 1980, trazendo os sabores da França para a
            região, confira agora nosso restaurante e as promoções do dia. Seja
            bem-vindo
          </p>

          <motion.div className="free-aboutus-carrossel">
            <motion.div className="inner-carrousel"
              whileTap={{ cursor: "grabbing" }}
              drag="x"
              dragConstraints={{ right: 0, left: -630 }}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="free-aboutus-carrossel-img"
                style={{
                  backgroundImage: `url(${bg1})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div
                className="free-aboutus-carrossel-img"
                style={{
                  backgroundImage: `url(${bg2})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div
                className="free-aboutus-carrossel-img"
                style={{
                  backgroundImage: `url(${bg3})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="free-promo">
        <div className="free-promo-titulo">
          <h1>Promoções do Dia</h1>
        </div>

        <motion.div className="free-promo-carrossel">
          <motion.div className="inner-carrousel2"
            whileTap={{ cursor: "grabbing" }}
            drag="x"
            dragConstraints={{ right: 0, left: 0 }}
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="free-promo-carrossel-img"
              style={{
                backgroundImage: `url(${bg3})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="free-promo-carrossel-img"
              style={{
                backgroundImage: `url(${bg4})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="free-promo-carrossel-img"
              style={{
                backgroundImage: `url(${bg6})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="free-promo-carrossel-img"
              style={{
                backgroundImage: `url(${bg7})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </motion.div>
        </motion.div>
      </div>
      <div className="free-local">
        <div className="free-promo-titulo">
          <h1>Como nos encontrar</h1>
        </div>
        <div className="free-local-info">
          <div
            className="free-map"
            style={{
              backgroundImage: `url(${map})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="free-local-funcionamento">
            <h1>Aberto agora</h1>
            <div className="hr"></div>
            <div className="free-local-funcionamento-text">
              <div className="free-contatos-contato">
                <i className="bi bi-calendar-check"></i>
                <p>De Segunda a Sábado</p>
              </div>
              <div className="free-contatos-contato">
                <i className="bi bi-clock"></i>
                <p>Aberto das 08h - 12h e das 14h - 18h</p>
              </div>
              <div className="free-contatos-contato">
                <i className="bi bi-airplane-engines"></i>
                <p>Fechado aos feriados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="free-gallery">
        <motion.div className="free-gallery-carrossel">
          <motion.div className="inner-carrousel3"
            whileTap={{ cursor: "grabbing" }}
            drag="x"
            dragConstraints={{ right: 0, left: -1135 }}
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="free-promo-carrossel-img"
              style={{
                backgroundImage: `url(${bg7})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="free-promo-carrossel-img"
              style={{
                backgroundImage: `url(${bg6})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="free-promo-carrossel-img"
              style={{
                backgroundImage: `url(${bg5})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="free-promo-carrossel-img"
              style={{
                backgroundImage: `url(${bg4})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="free-promo-carrossel-img"
              style={{
                backgroundImage: `url(${bg3})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="free-promo-carrossel-img"
              style={{
                backgroundImage: `url(${bg2})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default Free;
